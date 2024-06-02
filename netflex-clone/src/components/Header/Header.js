import React from 'react';
import './header.css';
import NetflexLogo from '../../assets/images/NetflexLogo.png';
import SearchIcon from '@mui/icons-material/Search';
const Header = () =>   {
    return (
        <div className='header_outer_container'>
       <div className='header_container'>
        <div className='header_left'>
         <ul>
          <li><img src={NetflexLogo}  alt='NetflexLogo' width={100}/></li>
            
            <li>Netflex</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languages</li>

         </ul>
        </div>
        <div className='header_right'>
        <ul>
            <li>SearchIcon</li>
          { /* <li>NotificationsNoneIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li>*/}
        </ul>
         <div/>
       </div>
       </div>

        </div>
    );
}

export default Header;
