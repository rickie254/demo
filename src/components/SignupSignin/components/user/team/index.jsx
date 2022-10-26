import React from "react";
import "./team.css"


const Team = () => {
  

  return (
    <>
    <div className="form-container">
        <form className="register-form" >
          <select form="Categories" id="field" className="form-field" autofocus>
            <option value="red flags">Create a red flag</option>
            <option value="intervention">Create an intervention</option>
          </select>
          <input id="case-report" className="form-field" type="text" placeholder="Enter your report" name="report" />
        <input id="desc-rption" className="form-field" type="text" placeholder="Description" name="description" />
          <input id="loc-tion" className="form-field" type="text" placeholder="Location" name="location" />
          <input id="da-te" className="form-field" type="text" placeholder="Date" name="date" />
          <label id="file">Choose an Image</label>
         <input id="image"className="form-field" type="file" placeholder="Image Url" name="image" />
          <button className="form-field" type="submit">SUBMIT</button>
        </form>
      </div>
     </> 
  );
};

export default Team;
