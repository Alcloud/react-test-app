import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <div className='app-wrapper-content'>
        {/*<Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile}/>*/}

        <Route path="/dialogs" render={() => <Dialogs 
            messageData = {props.state.messagesPage.messageData} 
            dialogData = {props.state.messagesPage.dialogData}/>}/>
        <Route path="/profile" render={() => <Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>}/>
      </div>
    </div>
  );
}

export default App;
