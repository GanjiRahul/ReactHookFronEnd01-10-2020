import React ,{useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import NavBar from '../components/OtherComponent/navbar';
import DropDown from '../components/OtherComponent/dropDown';

function Home(props) {

  useEffect(()=>{
    const username = localStorage.getItem('username');
    if(username === '')
    props.history.push("/") 
  })

  return (
    <div>
        <NavBar /><br/><br/>
        <DropDown />
    </div>
  );
}export default withRouter(Home);
