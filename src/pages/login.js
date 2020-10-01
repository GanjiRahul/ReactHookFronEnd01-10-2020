import React ,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Form , FormGroup , Button , Label , Input , } from 'reactstrap';
import  '../App.css';

function Login(props) {
  const [preDefinedUser] = useState(localStorage.getItem('password')===''?'user@2020':localStorage.getItem('password'));
  const [preDefinedPassword] = useState('userPass@2020');
  const [username , setUserName] = useState('');
  const [password , setPassword] = useState('');
  var [success , setSuccess] = useState('');
  const [errors , setErrors] = useState({});

  const onSubmit = () => {
    console.log('validate :' , validateForm());
    if(validateForm()){
      console.log('preDefinedUser , preDefinedPassword  username , password , errors :',username , password, preDefinedUser , preDefinedPassword , errors);
      localStorage.setItem('username',username);
      success = "Successfully Login , Your are redirecting to the home page in a moment";
      setSuccess(success)
      setTimeout(()=>{
        props.history.push('/home');
      },5000)
    }
  }

  const validateForm = () => {
    let isValid = true;
    var localPassword = localStorage.getItem('password') ? localStorage.getItem('password') :'';
    console.log('local password :',localPassword);
    console.log('preDefine Pass :',preDefinedPassword);
    let errors  = {};
    if(username===''){
      isValid = false;
      errors["username"] = "Please enter username";
    }else if(!username.match(preDefinedUser)){
      isValid = false;
      errors["username"] = "User not found"
    }

    if(password===''){
      isValid = false;
      errors["password"] = "Please enter password";
    }else if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
       isValid = false;
       errors["password"] = "Please enter password with  number, small letter , capital letter , and special character."
    }else if(!password.match((localPassword === '' ? preDefinedPassword : localPassword))){
      isValid = false;
      errors["password"] = "Password is not matched."
    }

    setErrors(errors);

   return isValid;
  }
  
  return (
    <div className="userLoginDiv">
      <h1>Login</h1>
        <Form >
          <FormGroup>
            <Input name="username" value={username} onChange={e => setUserName(e.target.value , errors.username='')} placeholder="Enter UserName"/>
            <Label className="errMessage">{errors.username}</Label>
          </FormGroup>
          <FormGroup>
            <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value, errors.password='')} placeholder="Enter Password"/>
            <Label className="errMessage">{errors.password}</Label>
          </FormGroup>
          {/* <FormGroup>
            <Label for="confirmPassword" />
            <Input name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password"/>
          </FormGroup> */}
          <Label className="successMessage">{success}</Label><br/>
          <Button onClick={onSubmit}>Login</Button>
        </Form>
    </div>
  );
}export default withRouter(Login);
