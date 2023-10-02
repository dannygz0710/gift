import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
   
    
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux'; 
import firebase from 'firebase';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { login } from '../actions/auth';
import { GiftScreen } from '../components/gift/GiftScreen';





export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checkin, setCheckin] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
     
    useEffect(() => {
  
      firebase.auth().onAuthStateChanged( (user) => {
        if  ( user?.uid ) {
          dispatch( login( user.uid, user.displayName ));
        //   dispatch( startLoadingNotes( user.uid ) );
          setIsLogged( true );
         
  
  
        }else{
          setIsLogged( false )
        }
        setCheckin( false ); 
      })
    }, [dispatch, setCheckin]);
  
  
    if( checkin ){
    return(
      <h1>...Loading</h1>
    )}
  
  
    return (
  
      <Router>
        <div>
          <Switch>
            <PublicRoute
              path="/auth"
              component={AuthRouter}
              isAuthenticated={isLogged}
            />
            <PrivateRoute
              exact path="/"
              component={GiftScreen}
              isAuthenticated={isLogged}
            />
          </Switch>
        </div>
      </Router>
  
    )
  }
  
