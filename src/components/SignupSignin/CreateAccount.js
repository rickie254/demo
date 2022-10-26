import { useState} from "react";  
import styled from 'styled-components';


function CreateAccount() {

const App = styled.div`
text-align: center;
background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('https://content.presentermedia.com/content/animsp/00004000/4786/kenya_flag_perspective_anim_300_wht.gif');
background-repeat: no;

`
const Styledlabel = styled.label`
display: block;
font-size: larger;
color: black;
padding: 5px;
`
const Styledinput = styled.input`
font-size: larger;
padding: 5px;
margin: 2px;
color:black;
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
color: black;
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
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
console.log(name);
// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


// Handling the name change
// const handleName = (e) => {
// setName(e.target.value);
// };



// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);

};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
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


<div>
  <App className="form">
<Imagepositioning><h1><img src='../images/mkono.png' alt="" width={100} height={100} /></h1></Imagepositioning>
{/* Calling to the methods */}
<Styledmessages className="messages">
{errorMessage()}
{successMessage()}
</Styledmessages> 
<form>
{/* Labels and inputs for form data */}
<Styledlabel><label className="label"> Username</label></Styledlabel>
<Styledinput  input  className="input" onChange={(e)=>setName(e.target.value)}  type="text" />

<Styledlabel><label className="label">Email</label></Styledlabel>
< Styledinput input   className="input"   defaultvalue={email} type="email" />

<Styledlabel><label className="label">Phone Number</label></Styledlabel>
< Styledinput input   className="input"  type="number" />


<Styledlabel><label className="label">Password</label></Styledlabel>
< Styledinput input   className="input" defaultvalue={password}  type="password" />

<Styledlabel><label className="label">Password Confirmation</label></Styledlabel>
< Styledinput input   className="input" defaultvalue={password} type="password" />


<Styledbutton onClick={handleSubmit} className="btn" type="submit">
Login</Styledbutton>
<div>Do you have an account? Login</div>
</form>
 
</App> 
</div>
);
}
export default CreateAccount