import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';
const Footer = () => {
    return (
        <div>
            <div className='footer_outer_container'>

                <div  className='footer_inner_container'>

                    <div className='footer_icons'>
                     <FacebookOutlinedIcon/>
                     <InstagramIcon/>
                     <YouTubeIcon/>
                    </div>
                    <div className='footer_data'>
                        <div>
                        <ul>
                            <li>Audio Description</li>
                        <li>Invester Relations</li>
                        <li>Legal Notice</li>

                        </ul>
                        </div>
                   
                    <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookies Preference</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Media Center</li>
                            <li>Private</li>
                            <li>Contact Use</li>
                        </ul>
                        </div>
                    </div>
                    <div className='service_code'>
               <p>ServiceCode</p>
                    </div>
                    <div className='copy_write'>&copy;1997-2024 Netflix.Inc.</div>
                </div>
            </div>
        </div>
    ); 
}

export default Footer;
