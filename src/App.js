import React, { useEffect } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeThunk } from './redux/app-reducer';
import preloader from './assets/img/preloader.gif'

function App(props) {
  useEffect(() => {
    props.initializeThunk()
  }, [props.isInitialized])

  
  if (!props.isInitialized) return <img src={preloader}></img>
  
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

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, {initializeThunk})(App);
