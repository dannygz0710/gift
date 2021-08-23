import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { starloginEmailPassword, startGoogleLogin } from '../../actions/auth';




const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'100px'
  },
  paper: {
    padding: '50px',
    margin: 'auto',
    maxWidth: 400,

  },
  marginInput: {
    marginTop:'20px'
  },
  marginButton: {
    marginTop:'40px'
  },
  btnGoogle: {
    marginTop: '30px',
    marginBottom:'40px'
   
  },
  link: {
    color: 'blue',
    textDecoration:'none',

    '&:hover': {
        textDecoration: 'underline'
    }
}
}));




export const LoginScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.ui)

  const [ values, handleInputChange] = useForm({
    email:'danny@gmail.com',
    password:'123456',
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(starloginEmailPassword(email, password));

  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div className={classes.root}>
      <form onSubmit={ handleLogin}>
      <Paper className={classes.paper}>
        < Grid container direction="column">

          <Grid item>
          <Typography variant="h5" component="h2" gutterBottom color="primary">
        Login
      </Typography>
          </Grid>

          <Grid item>
          <TextField 
              label="email"
              autoComplete="off"
              type="text"
              name="email"
              value={email}
              fullWidth
              onChange={handleInputChange}
               
               />
          </Grid>

          <Grid item>
          <TextField id="password"
              label="password"
              type="password"
              name="password"
              value={password}
              className={classes.marginInput}
              fullWidth
              onChange={handleInputChange}

               />
          </Grid>
    
          <Grid item>
          <Button variant="contained" 
          color="primary"
          type="submit"
          disabled={loading}
          className={classes.marginButton}
          >
            Login
            </Button>
          </Grid>

          <Grid item>
          <Button variant="outlined" 
          type="submit"
          color="primary"
          startIcon={<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />}
          className={classes.btnGoogle}
          disableElevation
          onClick={handleGoogleLogin}
          >
            Sign in with google
            </Button>
          </Grid>

          <Grid item>
          <Link
          to ="/auth/register"
           className={classes.link}
            >
                Create new account
            </Link>
          </Grid>
          </Grid>
      </Paper>
      </form>
    </div>
  );
}