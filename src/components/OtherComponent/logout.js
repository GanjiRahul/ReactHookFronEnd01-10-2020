import React from 'react'
import { Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';

function Logout(props) {

  const  signOut = () => {
      console.log("User signed out.");
      localStorage.setItem('username','');
      props.history.push("/")
   };

    return (
      <div style={{"margin-left": "25px"}}>
        <Button
            className="logoutBtn"
            color="danger"
            onClick={signOut}
            style={{float: "right", marginRight:"10px"}}>Logout
        </Button>
      </div>
    )
}export default withRouter(Logout);