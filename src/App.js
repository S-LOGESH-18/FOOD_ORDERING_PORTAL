import React from 'react'
import PersistentDrawerLeft from './Components/Home_Page_Files/SideBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Apped from './Components/Login-Register/SignIn';
// import { Button } from '@mui/material';

import ExistingUserPage from './Components/Home_Page_Files/ExistingUserPage';
import OrderNowContainer from './Components/OrderNow';
import ViweingLogin from './Components/Home_Page_Files/ViweingLogin';

import FoodList from './Components/FoodPageContent';
import NextFile from './Components/OrderNowForEachFoods/NextFile';
import Foods from './Components/Header_Components/Foods';
import Restaurants from './Components/Header_Components/Restaurants';

const App = () => {
  return (
    <Router>
      {/* <nav>
        {/* Add a Link to FoodList */}
        {/* <Button varient="contained" component={Link} to="/foodlist" >Food List</Button> */}
        {/* <Link to="/foodlist">Food List</Link> */}
      {/* </nav> */} 
      <Switch>
        <Route path="/" exact component={PersistentDrawerLeft} />
        <Route path="/login" component={Apped} />
        <Route path="/SideB" component={ExistingUserPage}/>
        <Route path="/RegisteredUser" component={ViweingLogin}/>
        {/* i have added /SideBar.js in terms of /SideB */}
        {/* inside of the SignIn i have used the useHistory */}

        <Route path="/nextfile/:id" component={NextFile}/>
        <Route path="/foodlist" component={FoodList} />
        <Route path="/foods" component={Foods} />
        <Route path="/restaurants" component={Restaurants} />

        <Route path="/order" component={OrderNowContainer}/>
        <Route component={PersistentDrawerLeft} />
      </Switch>
      
    </Router>
    );
};


export default App;