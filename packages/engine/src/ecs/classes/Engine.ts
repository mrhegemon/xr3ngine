import { Entity } from "./Entity"
import { processDeferredEntityRemoval } from "../functions/EntityFunctions"
import { EntityPool } from "./EntityPool"
import { EventDispatcher } from "./EventDispatcher"
import { Query } from "./Query"
import { WebGLRenderer, Camera } from "three"
import { SceneManager } from "../../common/classes/SceneManager"
import { hasWindow, now } from "../functions/Utils"
import { System } from "./System"
import { executeSystem } from "../functions/SystemFunctions"

export interface EngineOptions {
  entityPoolSize?: number
  [propName: string]: any
}

const DEFAULT_OPTIONS = {
  entityPoolSize: 0,
  entityClass: Entity
}

export class Engine {
  static renderer: WebGLRenderer = null
  static engine: Engine = null
  static sceneManager: SceneManager = new SceneManager()
  static camera: Camera = null
  static eventDispatcher = new EventDispatcher()

  static options: { entityPoolSize: number; entityClass: typeof Entity } & EngineOptions = DEFAULT_OPTIONS
  static enabled = true
  static deferredRemovalEnabled = true

  static systems: any[] = []
  static entities: any[] = []
  static entitiesByName: {} = {}
  static queries: Query[] = []
  static components: any[] = []

  static lastTime: number

  static nextEntityId = 0
  static nextComponentId = 0

  static eventQueues: {} = {}
  static entityPool: EntityPool = new EntityPool()
  static componentsMap: {} = {}
  static componentPool: {} = {}
  static numComponents: {} = {}
  static entitiesWithComponentsToRemove: any[] = []
  static entitiesToRemove: any[] = []

  static executeSystems: any[] = []
  static lastExecutedSystem: any

  static initialize(options?: EngineOptions) {
    initializeEngine(options)
  }
}

export function initializeEngine(options?: EngineOptions) {
  Engine.options = { ...Engine.options, ...options }
  if (hasWindow && typeof CustomEvent !== "undefined") {
    const event = new CustomEvent("world-created")
    window.dispatchEvent(event)
  }

  Engine.lastTime = now() / 1000
}

export function execute(delta?: number, time?: number): void {
  if (!delta) {
    time = now() / 1000
    delta = time - Engine.lastTime
    Engine.lastTime = time
  }

  if (Engine.enabled) {
    Engine.executeSystems.forEach(system => system.enabled && executeSystem(system, delta, time))
    processDeferredEntityRemoval()
  }
}

export function stop(): void {
  Engine.enabled = false
  Engine.executeSystems.forEach(system => system.stop())
}

export function stats(): { entities: any; system: any } {
  const queryStats = {}
  for (const queryName in Engine.queries) {
    queryStats[queryName] = Engine.queries[queryName].stats()
  }

  const entityStatus = {
    numEntities: Engine.entities.length,
    numQueries: Object.keys(System.queries).length,
    queries: queryStats,
    numComponentPool: Object.keys(Engine.componentPool).length,
    componentPool: {},
    eventDispatcher: (Engine.eventDispatcher as any).stats
  }

  for (const componentId in Engine.componentPool) {
    const pool = Engine.componentPool[componentId]
    entityStatus.componentPool[pool.type.name] = {
      used: pool.totalUsed(),
      size: pool.count
    }
  }

  const systemStatus = {
    numSystems: Engine.systems.length,
    systems: {}
  }

  for (let i = 0; i < Engine.systems.length; i++) {
    const system = Engine.systems[i]
    const systemStats = (systemStatus.systems[system.name] = {
      queries: {},
      executeTime: system.executeTime
    })
    for (const name in system.ctx) {
      systemStats.queries[name] = system.ctx[name].stats()
    }
  }

  return {
    entities: entityStatus,
    system: systemStatus
  }
}