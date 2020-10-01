import React ,{useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Form , FormGroup , Button , Label , Input , Row } from 'reactstrap';
import  '../App.css';
import Logout from '../components/OtherComponent/logout';
import NavBar from '../components/OtherComponent/navbar';

function User(props) {
  const [preDefinedUser] = useState('user@2020');
  const [oldPassword , setOldPassword] = useState(' ');
  const [password , setPassword] = useState('');
  const [errors , setErrors] = useState({});
  const [isChange , setIsChange] = useState(false);

  const onSubmit = () => {
    console.log('validate :' , validateForm());
    if(validateForm()){
      localStorage.setItem('password',password);
     alert("Successfully Changed Password");
    }
  }
  
  const onChangePassword = () => {
    setIsChange(!isChange);
  }

  const validateForm = () => {
    let isValid = true;
    let errors  = {};

    if(password===''){
      isValid = false;
      errors["password"] = "Please enter password";
    }else if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
       isValid = false;
       errors["password"] = "Please enter password with  number, small letter , capital letter , and special character."
    }
    
    setErrors(errors);

   return isValid;
  }

  useEffect(()=>{
    const username = localStorage.getItem('username');
    if(username === '')
    props.history.push("/") 
    else {
      var localPassword = localStorage.getItem('password');
      console.log('local Pass :',localPassword);
      setOldPassword(localPassword);
    }
  },[])
  
  return (
    <div>

      <NavBar /><br /><br />
      <div className="userLoginDiv">
        <h1>User</h1><br />
        <Form >
          <FormGroup>
            <Input name="username" value={preDefinedUser} placeholder="Enter UserName" />
            <Label className="errMessage">{errors.username}</Label>
          </FormGroup>
          {
            isChange ?
              <FormGroup>
                <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value, errors.password = '')} placeholder="Enter Password" />
                <Label className="errMessage">{errors.password}</Label>
              </FormGroup>
              :
              <FormGroup>
                <Input name="password" type="password" value={oldPassword} placeholder="Enter Password" />
              </FormGroup>
          }
          {isChange ?

            <Row className="btnRow">
              <Button color="warning" onClick={onSubmit} >Save Password</Button>
              <Logout />
            </Row>
            :
            <Row className="btnRow">
              <Button color="warning" onClick={onChangePassword} >Change Password</Button>
              <Logout />
            </Row>
          }
        </Form>
      </div>
    </div>
  );
}export default withRouter(User);
