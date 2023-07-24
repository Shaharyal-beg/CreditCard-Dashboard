import React from 'react'
import './component.css'
import avatar from './user-img.jpg'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className='avatar-area'>
                <div className='img-area'>
                    <img src={avatar} />
                </div>
                <div className='userNameStatus'>
                    <p className='userName'>John Doe</p><br />
                    <p className='status'><div className='statusDot'></div>&nbsp;Active Now</p>
                </div>

            </div>
            <div className='optionsArea'>
                <div className='option'>
                    <div className='icon-space'><GridViewOutlinedIcon sx={{fontSize:'28px'}}/> </div>
                    <p className='abc'>Dashboard</p>
                </div>
                <div className='option'>
                    <div className='icon-space'><TrendingUpOutlinedIcon sx={{fontSize:'30px'}}/> </div>
                    <p className='abc'>My Stocks</p>
                </div>
                <div className='option'>
                    <div className='icon-space'><SignalCellularAltOutlinedIcon sx={{fontSize:'28px'}}/> </div>
                    <p className='abc'>Analytics</p>
                </div>
                <div className='option'>
                    <div className='icon-space'><StorefrontOutlinedIcon sx={{fontSize:'28px'}}/> </div>
                    <p className='abc'>Market</p>
                </div>
                <div className='option'>
                    <div className='icon-space'><SettingsOutlinedIcon sx={{fontSize:'28px'}}/> </div>
                    <p className='abc'>Setting</p>
                </div>


            </div>

        </div>
    )
}

export default Leftbar