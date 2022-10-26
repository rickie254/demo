import React from "react";
import "./dashboard.css"

const Redflags = () => {
  return(
    <>
<div className="redflags">
<h3>Red flags</h3>
<form className="register-form">
          <select form="Categories" id="field" className="form-field" autofocus>
            <option value="red flags">Under-Investigation</option>
            <option value="intervention">Accepted</option>
            <option value="intervention">Rejected</option>
          </select>
          <button className="delete">delete</button>
          </form>
</div>
</>
  );
}
const Interventions = () => {
  return(
<>
<div className="intervene">
<h3>Interventions</h3>
<form className="register-form">
          <select form="Categories" id="field" className="form-field" autofocus>
          <option value="red flags">Under-Investigation</option>
            <option value="intervention">Accepted</option>
            <option value="intervention">Rejected</option>
          </select>
          <button className="delete">delete</button>
          </form>
</div>
</>
  );
}
const Dashboard = () => {
  
  return (
   <div>
<h2>Reported cases</h2>
      <Redflags />
      <Interventions />
    </div>         
  );
};

export default Dashboard;
