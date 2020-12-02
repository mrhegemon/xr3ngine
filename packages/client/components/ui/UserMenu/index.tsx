import React, { useEffect, useRef, useState } from 'react';
import styles from './UserMenu.module.scss';
import { Button, TextField, Drawer, Typography, CardMedia, Card, CardActionArea, CardContent, Snackbar } from '@material-ui/core';
import { generalStateList, setAppSpecificOnBoardingStep } from '../../../redux/app/actions';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Tooltip from '@material-ui/core/Tooltip';
import store from '../../../redux/store';
import { selectAppOnBoardingStep } from '../../../redux/app/selector';
import { selectAuthState } from '../../../redux/auth/selector';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { CharacterAvatars } from '@xr3ngine/engine/src/templates/character/CharacterAvatars';
import { setActorAvatar } from "@xr3ngine/engine/src/templates/character/behaviors/setActorAvatar";

import { updateUsername } from '../../../redux/auth/service';
import { isMobileOrTablet } from '@xr3ngine/engine/src/common/functions/isMobile';
import { showDialog } from '../../../redux/dialog/service';
import SignIn from '../Auth/Login';
import { logoutUser } from '../../../redux/auth/service';
import { Network } from '@xr3ngine/engine/src/networking/components/Network';
import { loadActorAvatar } from '@xr3ngine/engine/src/templates/character/behaviors/loadActorAvatar';
import UserSettings from '../Profile/UserSettings';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeUser } from '../../../redux/auth/service';

interface Props {
    login?: boolean;
    authState?:any;
    updateUsername?: typeof updateUsername;
    logoutUser?: typeof logoutUser;
    showDialog?: typeof showDialog;
    removeUser?: typeof removeUser;
}

const mapStateToProps = (state: any): any => {
  return {
    onBoardingStep: selectAppOnBoardingStep(state),
    authState: selectAuthState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  updateUsername: bindActionCreators(updateUsername, dispatch),
  logoutUser: bindActionCreators(logoutUser, dispatch),
  showDialog: bindActionCreators(showDialog, dispatch),
  removeUser: bindActionCreators(removeUser, dispatch),
});


const UserMenu = (props: Props): any => {    
  const { login, authState, logoutUser, removeUser, showDialog} = props;
  const selfUser = authState.get('user');
  const [isEditName, setIsEditName] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [username, setUsername] = useState(selfUser?.name);
  const [drawerType, setDrawerType] = useState('default');

  const invitationLink = window.location.href;
  const refLink = useRef(null);
  const postTitle = 'AR/VR world';
  const siteTitle = 'XREngine';
  const anchor = 'right';
  const worldName = 'Lobbyworld Demo';

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type Anchor = 'top' | 'left' | 'bottom' | 'right';

  const handleEditClick = () => {
    setIsEditName(true);
  };

  const handleTutorialClick = (event: React.KeyboardEvent | React.MouseEvent) =>{
    toggleDrawer(anchor, false)(event);
    store.dispatch(setAppSpecificOnBoardingStep(generalStateList.TUTOR_LOOKAROUND, true));
  };

  const handleAccountDeleteClick = () => setDrawerType('accountDelete');
  const handleAvatarChangeClick = () => setDrawerType('avatar');
  const handleDeviceSetupClick = () => setDrawerType('device');

  const handleUsernameChange = (e: any): void => {
    const newName = e.target.value;
    setUsername(newName);
  };

  const updateUsername = async (): Promise<void> => {
    await props.updateUsername(selfUser?.id, username);
    setIsEditName(false);
  };
  
  const copyCodeToClipboard = () => {    
    refLink.current.select();
    document.execCommand("copy");
    setOpenSnackBar(true);
  };

  const confirmAccountDelete = () => {
    removeUser(selfUser.id);
    setDrawerType('default');
  };
  
  const handleMobileShareOnClick = () =>{
    if (navigator.share) {
      navigator
        .share({
          title: "`${postTitle} | ${siteTitle}`,",
          text: `Check out ${postTitle} on ${siteTitle}`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the world', error);
        });
    }
  };
  
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    setIsOpenDrawer(open);
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });

    open === true ? window.document.querySelector('body').classList.add('menuDrawerOpened')
               : window.document.querySelector('body').classList.remove('menuDrawerOpened');
  };

  const handleLogin = () => {
    setDrawerType('login');
  };

  const handleLogout = () => {
    logoutUser();
  };


  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const handleCloseSnackBar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const renderSuccessMessage = ()=>
    <Snackbar open={openSnackBar} 
    autoHideDuration={3000} 
    onClose={handleCloseSnackBar} 
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}>
      <section>Link successfully added to clipboard</section>
    </Snackbar>;

  const renderChangeNameForm = () =>
      <section>
        {isEditName === true ? (<section>
          <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Your Name"
                name="name"
                autoFocus
                defaultValue={selfUser?.name}
                onChange={(e) => handleUsernameChange(e)}
            />
            <Button onClick={()=>setIsEditName(false)} variant="outlined" color="secondary" className={styles.autoWidth}>
              Cancel
            </Button>
            <Button onClick={updateUsername} variant="outlined" color="primary"className={styles.autoWidth}>
              Save
            </Button>
        </section>) 
                : 
        (<span className={styles.userTitle}>    
          <ArrowBackIosIcon onClick={toggleDrawer(anchor, false)} />      
          <span>{ selfUser ? selfUser?.name : ''}</span>
           <Tooltip title="Edit Username"><EditIcon color="primary" onClick={handleEditClick}  /></Tooltip>
        </span>)}
      </section>;


  const renderShareLocation = () =>
      <section>
        <p className={styles.userTitle} onClick={() => isMobileOrTablet() && navigator.share ? handleMobileShareOnClick() : copyCodeToClipboard()}>
          <Typography variant="subtitle2" color="primary">{invitationLink}</Typography>
          <Tooltip title="Share"><ShareIcon color="primary" /></Tooltip>
        </p>
        {(!isMobileOrTablet() || !navigator.share) && <textarea readOnly className={styles.linkField} ref={refLink} value={invitationLink} />}
    </section>;


  const [actorEntity, setActorEntity] = useState(null);
  const [actorAvatarId, setActorAvatarId] = useState('Rose');

    useEffect(() => {

      const actorEntityWaitInterval = setInterval(() => {
        if (Network.instance?.localClientEntity) {
          setActorEntity(Network.instance.localClientEntity);
          clearInterval(actorEntityWaitInterval);
        }
      }, 300);
    }, []);

    useEffect(() => {
      if (actorEntity) {
        setActorAvatar(actorEntity, {avatarId: actorAvatarId});
        loadActorAvatar(actorEntity);
      }
    }, [ actorEntity, actorAvatarId ]);
   
//filter avatars by some attribute
const avatarsForRender = CharacterAvatars.filter(avatar=>avatar.id !== 'Animation');
function imageExists(image_url){
  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  http.send();
  return http.status != 404;
}
const renderAvatarSelectionPage = () =><>
      <Typography variant="h2" color="primary"><ArrowBackIosIcon onClick={()=>setDrawerType('default')} />Change Avatar</Typography>
      <section className={styles.avatarCountainer}>
          {avatarsForRender.map(characterAvatar=>
              <Card key={characterAvatar.id} className={styles.avatarPreviewWrapper}> 
                <CardActionArea>
                  {imageExists('/static/'+characterAvatar.id.toLocaleLowerCase()+'.png') ? 
                  <CardMedia
                    component="img"
                    alt={characterAvatar.title}
                    height="145"
                    image={'/static/'+characterAvatar.id.toLocaleLowerCase()+'.png'}
                    title={characterAvatar.title}
                    className={styles.avatarPreview+(actorAvatarId === characterAvatar.id ? ' '+'currentAvatar' : '')} 
                    onClick={()=>setActorAvatarId(characterAvatar.id)}                    
                  /> : <PermIdentityIcon color="primary" height="145" 
                      className={styles.avatarPreview+(actorAvatarId === characterAvatar.id ? ' '+styles.currentAvatar : '')} 
                      onClick={()=>setActorAvatarId(characterAvatar.id)} /> }
                </CardActionArea>
              </Card>
            )}
      </section>
      </>;

const renderDeviceSetupPage = () =><>
  <Typography variant="h2" color="primary"><ArrowBackIosIcon onClick={()=>setDrawerType('default')} />Device Setup</Typography>
  <UserSettings />
</>;

const renderLoginPage = () =><>
  <Typography variant="h2" color="primary"><ArrowBackIosIcon onClick={()=>setDrawerType('default')} />Login</Typography>
  <SignIn />
</>;

const renderAccountDeletePage = () => <>
  <Typography variant="h2" color="primary"><ArrowBackIosIcon onClick={()=>setDrawerType('default')} />Delete Account</Typography>
  <div>
    <Typography variant="h5" color="primary" className={styles.header}>Delete account?</Typography>
    <div className={styles.deleteAccountButtons}>
      <Button
          onClick={() => setDrawerType('default')}
          startIcon={<ClearIcon />}
          variant="contained"
      >
        Cancel
      </Button>
      <Button
          onClick={() => confirmAccountDelete()}
          startIcon={<DeleteIcon />}
          variant="contained"
          color='secondary'
      >
        Confirm
      </Button>
    </div>
  </div>
</>;

const renderUserMenu = () =><>
          {renderChangeNameForm()}
          <Typography variant="h1">{worldName}</Typography>
          {renderShareLocation()}
          <Typography variant="h2" color="primary" onClick={handleAvatarChangeClick}>Change Avatar</Typography>
          <Typography variant="h2" color="primary" onClick={(event)=>handleTutorialClick(event)}>Tutorial</Typography>
          <Typography variant="h2" color="primary" onClick={handleDeviceSetupClick}>Device Setup</Typography>
          { selfUser?.userRole === 'guest' ? 
                <Typography variant="h2" color="primary" onClick={handleLogin}>Login</Typography> :
                <Typography variant="h2" color="primary" onClick={handleLogout}>Logout</Typography>}
          { selfUser?.userRole !== 'guest' && <Typography variant="h2" color="primary" onClick={handleAccountDeleteClick}>Delete account</Typography>}
          <section className={styles.placeholder} />
          <Typography variant="h2" color="secondary">About</Typography>
          <Typography variant="h2" color="secondary">Privacy & Terms</Typography>
          {renderSuccessMessage()}
      </>;

const renderDrawerContent = () =>{
  switch(drawerType){
    case 'avatar': return renderAvatarSelectionPage();
    case 'device': return renderDeviceSetupPage();
    case 'login': return renderLoginPage();
    case 'accountDelete': return renderAccountDeletePage();
    default: return renderUserMenu();
  }
};

  return (
        <section key={anchor} className={styles.anchorContainer}>
          <MenuIcon className={styles.anchorDrawer} onClick={toggleDrawer(anchor, isOpenDrawer === true ? false : true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={styles.drawer}
            BackdropProps={{invisible:true, open:false }}
          >
            {renderDrawerContent()}            
          </Drawer>
        </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
