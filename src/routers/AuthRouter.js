import React from 'react';
import { 
    Switch,
    Route,
    
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import Container from '@material-ui/core/Container';

export const AuthRouter = () => {
    return (
    
    <Container>
   <Switch>
    <Route path="/auth/login" exact >
        <LoginScreen />
         </Route>
    <Route path="/auth/register" exact>
        <RegisterScreen />
         </Route>
    </Switch>

    </Container>




    )
}
