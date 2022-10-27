import { useState, useRef } from "react";  
import styled from 'styled-components';


function SignIn() {

const App = styled.div`
text-align: center;
background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('https://content.presentermedia.com/content/animsp/00004000/4786/kenya_flag_perspective_anim_300_wht.gif');
background-size: contain;
`
const Styledlabel = styled.label`
display: block;
font-size: larger;
color: #00171F;
padding: 5px;
`
const Styledinput = styled.input`
font-size: larger;
padding: 5px;
margin: 2px;
` 
const Styledbutton = styled.button`
color: white;
background-color: red;
border-radius: 5px;
font-size: larger;
display: block;
padding: 5px;
margin: 10px auto;
`
const Imagepositioning = styled.div`
padding: 10px;
`
const Styledmessages = styled.div`
display: flex;
  justify-content: center;`

const Stylederrors = styled.div`
display: block;
background-color: red;
color: white;
width: fit-content;
height: 50px;
padding: 5px;
`
const Styledsuccess = styled.div`
display: block;
  background-color: lightblue;
  color: black;
  width: fit-content;
  height: 50px;
  padding: 5px;
`
// States for registration
const [name, setName] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const ref= useRef(null);
// Handling the name change
const handleName = (e) => {
setName(e.target.value);
};


// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === ''|| password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<Styledsuccess
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</Styledsuccess>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<Stylederrors
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</Stylederrors>
);
};

return (
<App className="form">


<div>
<Imagepositioning><h1><img src='data:image/jpeg;base64,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' alt="" width={100} height={100} /></h1></Imagepositioning>
</div>

{/* Calling to the methods */}
<Styledmessages className="messages">
{errorMessage()}
{successMessage()}
</Styledmessages>

<form>
{/* Labels and inputs for form data */}
<Styledlabel><label for="membership">Admin/User:</label></Styledlabel>
<select name="membership" id="membership">
  <option value="admin">Admin</option>
  <option value="user">User</option>
  </select>

<Styledlabel><label className="label"> Username</label></Styledlabel>
<Styledinput  input ref={ref}  className="input" defaultvalue={name} type="text" />

<Styledlabel><label className="label">Password</label></Styledlabel>
< Styledinput input ref={ref}  className="input"
defaultvalue={password} type="password" />


<Styledbutton onClick={handleSubmit} className="btn" type="submit">
Login</Styledbutton>
<div>Do you have an account? Signup</div>
</form>

</App>
 
);
}
export default SignIn
