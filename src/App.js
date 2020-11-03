import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <NavBarContainer />
        <main>
          <Route path='/Profile/:id?' render={() => <ProfileContainer />}/>
          <Route path='/Users' render={() => <UsersContainer />}/>
          <Route path='/Login' render={() => <LoginContainer />}/>
        </main>
    </div>
  );
}

export default App;
