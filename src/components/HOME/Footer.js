import React from "react";


const Footer= () => {
  return (
    
    <div>
        <div class="footerLeft">
            
            <div class="footerMenu">

                <img src="https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg" width={50} height={40}/>
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem">Contact</li>
                    <li class="fListItem">About us</li>
                    <li class="fListItem">Our team </li>
                </ul>
            </div>
            
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    <li class="fListItem">Support</li>
                    <li class="fListItem">Redflags</li>
                    <li class="fListItem">FAQ</li>
                    <li class="fListItem">Feedback</li>
                    <li class="fListItem">Stories</li>
                </ul>
            </div>

            <div class="footerMenu">
                <h1 class="fMenuTitle">Privacy and Cookies</h1>
                <ul class="fList">
                    <li class="fListItem">Terms</li>
                    <li class="fListItem">Privacy</li>
                    <li class="fListItem">Security</li>
                    <li class="fListItem">Help</li>

                </ul>
            </div>

        </div>

        <div class="footerRight">

            {/* <div class="footerRightMenu">
                <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
                <div class="fMail">
                    <input type="text" placeholder="your@email.com" class="fInput"/>
                    <button class="fButton">Join us now!</button>
                </div>
            </div> */}

            {/* <div class="footerRightMenu">
                <h1 class="fMenuTitle">Follow Us on our socials</h1>
                <div class="fIcons">
                    <img src="https://i.pinimg.com/236x/59/8c/ae/598cae0d99a402d8c8501151305dcfdf.jpg" alt="" class="fIcon"/>
                    <p>facebook</p>
                    <img src="https://i.pinimg.com/236x/27/68/55/2768551da1180077958b615f1cd55068.jpg" alt="" class="fIcon"/>
                    <p>twitter</p>
                    <img src="https://i.pinimg.com/236x/e5/41/74/e541741065a1c35e79717909172d1bb4.jpg" alt="" class="fIcon"/>
                    <p>instagram</p>
                    <img src="https://i.pinimg.com/236x/72/af/ce/72afce0390483373f832588032fc8efe.jpg" alt="" class="fIcon"/>
                    <p>whatsapp</p>
                </div>
            </div> */}
            
            <div class="footerRightMenu">
                <span class="copyright">@2022 ireporter. All rights reserved. we rspect your privacy ,by using our site ,you agree to our terms .</span>
            </div>
            
        </div>
    </div>
 

    
  );
};

 export default Footer