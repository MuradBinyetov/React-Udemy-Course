import React,{useContext} from 'react';
import AuthContext from '../../store/auth-context'; 
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authContext = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={authContext.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
