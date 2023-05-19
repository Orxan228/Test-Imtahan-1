import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Header.scss"

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="header___nav">
        <div className="header___nav___top">
          <div className="header___nav___top___left"><p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p></div>
          <div className="header___nav___top___right">
            <ul>
              <li><FacebookIcon style={{fontSize:"1.2rem"}}/></li>
              <li><TwitterIcon style={{fontSize:"1.2rem"}}/></li>
              <li><LinkedInIcon style={{fontSize:"1.2rem"}}/></li>
              <li><YouTubeIcon style={{fontSize:"1.2rem"}}/></li>
            </ul>
          </div>
        </div>
        <div className="header___nav___bottom">
          <div className="header___nav___bottom___left">
            <ul>
              <li><img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp" alt="" /></li>
              <li>Home</li>
              <li>Add</li>
            </ul>
          </div>
          <div className="header___nav___bottom___right">
            <button>Free Quote</button>
            <div className="header___nav___bottom___right--contact">
              <div className="contactIcon">
                <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/headphones.svg" alt="" />
              </div>
              <div className="contactInfo">
                <p className='contactInfo--p1'> Have any Question?</p>
                <p className='contactInfo--p2'>Call: 10 (78) 837 3647</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
