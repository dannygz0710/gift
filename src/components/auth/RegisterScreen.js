import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';





const useStyles = makeStyles(() => ({
  root: {
    marginTop: '100px'
  },
  paper: {
    padding: '50px',
    margin: 'auto',
    maxWidth: 400,

  },
  marginInput: {
    marginTop: '35px'
  },
  marginInputError: {
    marginTop: '35px'
  },
  marginButton: {
    marginTop: '40px'
  },
  btnGoogle: {
    marginTop: '30px',
    marginBottom: '40px'

  },
  

}));

export const RegisterScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [InputName, setInputName] = useState(false);
  const [InputEmail, setInputEmail] = useState(false);
  const [InputPassword, setInputPassword] = useState(false);
  const [InputPassword2, setInputPassword2] = useState(false);

  const [values, handleInputChange,] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setInputName(true)
      return;
    } else if (!validator.isEmail(email)) {
      setInputEmail(true);
      return;
    } else if (password.length < 5) {
      setInputPassword(true);
      return;
    } else if (password !== password2) {
      setInputPassword2(true);
      return
    }
    setInputName(false);
    setInputEmail(false);
    setInputPassword(false);
    setInputPassword2(false);
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  }


  return (
    <div className={classes.root}>
      <form onSubmit={handleRegister}>
        <Paper className={classes.paper}>
          < Grid container direction="column">
            <Grid item>
              <Typography variant="h5" component="h2" gutterBottom color="primary">
                Register
              </Typography>
            </Grid>
            <Grid item>
              {

                InputName ?

                  <TextField
                    error
                    type="text"
                    name="name"
                    fullWidth
                    value={name}
                    onChange={handleInputChange}
                    helperText="Name is required"
                  />

                  :

                  <TextField
                    label="Name"
                    type="text"
                    name="name"
                    fullWidth
                    onChange={handleInputChange}
                    value={name}

                  />

              }

            </Grid>

            <Grid item>
              {

                InputEmail ?


                  <TextField
                    error
                    className={classes.marginInputError}
                    type="text"
                    name="email"
                    fullWidth
                    value={email}
                    onChange={handleInputChange}
                    helperText="Valid email"
                  />

                  :

                  <TextField
                    label="Email"
                    type="text"
                    name="email"
                    fullWidth
                    className={classes.marginInput}
                    onChange={handleInputChange}
                    value={email}
                  />
              }
            </Grid>

            <Grid item>

              {

                InputPassword ?

                  <TextField
                    error
                    className={classes.marginInputError}
                    type="password"
                    name="password"
                    fullWidth
                    value={password}
                    onChange={handleInputChange}
                    helperText="Password should be at least 6 characters and match"
                  />

                  :

                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    onChange={handleInputChange}
                    value={password}
                    className={classes.marginInput}
                  />
              }
            </Grid>

            <Grid item>

              {

                InputPassword2 ?

                  <TextField
                    error
                    className={classes.marginInputError}
                    type="password"
                    name="password2"
                    fullWidth
                    value={password2}
                    onChange={handleInputChange}
                    helperText="Passwords must be same"
                  />

                  :
                  
                  <TextField
                    label="Confirm Password"
                    type="password"
                    name="password2"
                    fullWidth
                    onChange={handleInputChange}
                    value={password2}
                    className={classes.marginInput}
                  />
              }
            </Grid>

            <Grid item>
              <Button variant="contained"
                color="primary"
                type="submit"
                className={classes.btnGoogle}
              >
                Register
              </Button>
            </Grid>
            <Grid item>
              <Link
               to="/auth/login"
               className={classes.link}
              >
                Already Register
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}