import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Cases = () => {
  const Grid = styled.div`
  display: flex;
  // grid-template-columns: repeat(1, 3fr);
  grid-template-columns: repeat(2, 3fr);
  grid-gap: 70px;
  width:50px;
  padding: 20px;
`
  return (
<div>
<Grid className="imageplusnews">
    <img src="https://lh3.googleusercontent.com/TFcvndBxeggBwx_ewIGSbFKFmfaN0e_7mx4r--b7_Vr_ZUA0GZ-EmtHTAAG1q62Rpu-LPNlYWOv7f0ePB2mup_a2jFuqVhJIssbGx4Qf=s750" width={200} height={200}/>
  <div>
    <h3>Enziu River Bridge</h3>
    <p>I am calling upon the Kenyan government. </p>
    </div>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBLfwKG8u9t2N-vt8vkOicZGbp8UEzMepPSUX-4QScmUqBY69NL6xP1e2Qn2I0TRr5I0&usqp=CAU" width={200} height={200}/>
  <div>
    <h3>Bribery in Kenya</h3>
    Three people among them two police officers .
    </div>
   

    <img src="https://www.kenyans.co.ke/files/images/news/nhif_billions_lost.jpg" width={200} height={200}/>
  <div>
    <h3>NHIF pay scandal</h3>
    <p>Over Sh10b feared lost in new NHIF pay scandal. </p>
    </div>
    </Grid>
    <Grid>
    <img src="https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/wfp_drought_kenya_ethiopia_ok.jpg?itok=et09eLGs" width={200} height={200}/>
  <div>
    <h3>Hunger</h3>
    <p>Millions facehunger as drought creeps kenya. </p>
    </div>

    <img src="https://www.ttnews.com/sites/default/files/images/articles/speeding-truck-getty_0.jpg" width={200} height={200}/>
  <div>
    <h3>Speeding Cars</h3>
    <p>The government should take action in introducing speed governors in vehicles</p>
    </div>

    <img src="https://th.bing.com/th/id/R.36adcfcea2d278193f13d7ea4026e11c?rik=h3gPo05VN%2fVIhA&pid=ImgRaw&r=0" width={200} height={200}/>
  <div>
    <h3>Protesters clash with police</h3>
    <p>the government should come in to the  world or politics to stop tribla conflicts among citizens. </p>
    </div>
    </Grid>

<Link  to="/signup" className="productButton"> create case </Link> 

  </div> 
  );
};

export default Cases;