import React, { useState, useRef } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import "./SignIn.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


// import { Container, Paper, TextField, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

//------------------------------------------------------------------------------------------------




const Login = ({ onSwitchToRegister }) => {
  
  // const history1 = useHistory();

  // const handleButtonClickLogin = () =>{
  //   history1.push('/SideB');
  // }

  const history1 = useHistory();


  const emailRef = useRef(null);
  const passwordRef = useRef(null);

    //------------------------------------------------------------------------------------------------------

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+])[A-Za-z\d!@#$%^&()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  //-----------------------------------------------------------------

  const [loginSuccess, setLoginSuccess] = useState(false);

  //--------------------------------------------------------------------

  const changeMessage = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      window.alert('Please fill both email and password');
      return;
    }

    if (!validateEmail(email)) {
      window.alert('Invalid email format. Enter correct email format');
      return;
    }

    if (!validatePassword(password)) {
      window.alert('Invalid password format. Enter password that satisfies our password policy.');
      return;
    }
    //-----------------------------------------------------------------------------
    
  setLoginSuccess(true);

  // history.push('/SideB');
  
  //-----------------------------------------------------------------------------
  };

  if (loginSuccess) {
    return (
      <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
            <img src='https://gifdb.com/images/high/animated-green-verified-check-mark-k3et2jz52jyu2v22.gif' alt='login not coming' width={175} height={175} />
            <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Successful</h4>
            
            
            
            <Button onClick={() => history1.push('/SideB')} variant='contained'>OK</Button>

            {/* history.push('/SideB'); */}
            
            {/* {loginSuccess && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
              <img src='https://gifdb.com/images/high/animated-green-verified-check-mark-k3et2jz52jyu2v22.gif' alt='login not coming' width={175} height={175} />
              <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Successful</h4>
              <Button component={Link} to="/" variant='contained'>OK</Button>
              </div>
            )} */}

        
          
          {/* <img src='https://img.freepik.com/premium-vector/cross-icon_23-2147734006.jpg?w=740' alt='Login Wrong' width={175} height={175} />
            <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Unsuccessful You are not an existing user, Please Register </h4>
          */}
          
          </div> 
        </div>
      );
      //----------------------------------------------------------------------------
    }
    if (false){
      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
            <img src='https://img.freepik.com/premium-vector/cross-icon_23-2147734006.jpg?w=740' alt='You are not an existing user, Please Register' width={175} height={175} />
            <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Unsuccessful You are not an existing user, Please Register </h4>
          </div>
        </div>
      );
  }
  // /------------------------------------------------------------

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log('Login clicked:', emailRef.current.value, passwordRef.current.value);
  // };
    //------------------------------------------------------------------------
  return (
    <Container component="main" maxWidth="sm" style={{width:'400px', height:'500px',paddingTop:'15px'}}>
      <Paper elevation={10} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center">
          <h3>Login</h3>
        </Typography>
        <form>
          {/* ------------------------------------------------------------------------- */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={passwordRef}
          />
          <Button variant="contained" color="primary" fullWidth onClick={changeMessage}>
            Login
          </Button>
          <Button variant="text" color="primary" fullWidth onClick={onSwitchToRegister}>
            Switch to Register
          </Button>
        </form>
        {/* {loginSuccess && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
          <img src='https://gifdb.com/images/high/animated-green-verified-check-mark-k3et2jz52jyu2v22.gif' alt='login not coming' width={175} height={175} />
          <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Successful</h4>
          <Button component={Link} to="/" variant='contained'>OK</Button>
        </div>
      )} */}
        {/* --------------------------------------------------------- */}
      </Paper>
    </Container>
  );
};





const Register = ({ onSwitchToLogin }) => {


  const history2 = useHistory();



  const nameRef2 = useRef(null);
  const emailRef2 = useRef(null);
  const passwordRef2 = useRef(null);
  const confirmPasswordRef2 = useRef(null);

  const validateEmail2 = (Rtemail) => {
    const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex2.test(Rtemail);
  };

  const validatePassword2 = (Rtpassword) => {
    const passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+])[A-Za-z\d!@#$%^&()_+]{8,}$/;
    return passwordRegex2.test(Rtpassword);
  };
  
  const validateConfirm2 = (Rtpassword, RtconfirmPassword) => {
    return Rtpassword !== RtconfirmPassword;
  };
  
  const [registerationSuccess, setRegisterationSuccess] = useState(false);
  
  const changeMessage2 = () => {
    
    console.log('emailRef2.current:', emailRef2.current); 
    // const Rtname = nameRef2.current.value;
    const Rtemail = emailRef2.current.value;
    const Rtpassword = passwordRef2.current.value;
    const RtconfirmPassword = confirmPasswordRef2.current.value;

    if (!Rtemail || !Rtpassword) {
      window.alert('Please fill both email and password');
      return;
    }

    if (!validateEmail2(Rtemail)) {
      window.alert('Invalid email format. Enter correct email format');
      return;
    }

    if (!validatePassword2(Rtpassword)) {
      window.alert('Invalid password format. Enter password that satisfies our password policy.');
      return;
    }

    if (!validateConfirm2(RtconfirmPassword)) {
      window.alert('Please enter the same password you typed above.');
      return;
    }

    setRegisterationSuccess(true);
    
    // history2.push('/SideB');
  };
  
  


  // const [Rtname, setName] = useState('');
  // const [Rtemail, setEmail] = useState('');
  // const [Rtpassword, setPassword] = useState('');
  // const [RtconfirmPassword, setConfirmPassword] = useState('');
  
  // const handleRegister = () => {
    //   // Implement your registration logic here
  //   console.log('Register clicked:', name, email, password, confirmPassword);
  // };

  // const history2 = useHistory();
  // const handleButtonClickRegister = () =>{
  //   history2.push('/SideB');
  // }

  if (registerationSuccess) {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
          <img src='https://gifdb.com/images/high/animated-green-verified-check-mark-k3et2jz52jyu2v22.gif' alt='Registeration Wrong' width={175} height={175} />
          <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Registeration Successful</h4>
          <Button onClick={() => history2.push('/RegisteredUser')} variant='contained'>OK</Button>
        </div>
          <div>
   {/* <Button onClick={handleButtonClickRegister} variant='contained'>
      OK
   </Button> */}
    </div>
      </div>
    );
  }
  
  return (
    <Container component="main" maxWidth="ss" style={{width:'500px', height:'900px', paddingTop:'140px'}}>
      <Paper elevation={10} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" align="center">
          <h3>Register</h3>
        </Typography>
        <form>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            // value={Rtname}
            inputRef={nameRef2}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            inputRef={emailRef2}
            
            // onChange={(e) => setEmail(e.target.value)}
            />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            
            inputRef={passwordRef2}
            // onChange={(e) => setPassword(e.target.value)}
            />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            
            inputRef={confirmPasswordRef2}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={changeMessage2}>
            Register
          </Button>
          <Button variant="text" color="primary" fullWidth onClick={onSwitchToLogin}>
            Switch to Login
          </Button>
        </form>
      </Paper>
      
    </Container>
  );
};

const Apped = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchToRegister = () => {
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className='bg-image'>
      {showLogin ? <Login onSwitchToRegister={handleSwitchToRegister} /> : <Register onSwitchToLogin={handleSwitchToLogin} />}
    </div>
  );
};

export default Apped;
