import React from 'react';
import '../../App.css';
import QuickMenu from '../../assets/image/Quick Menu.png';
import QuickMenuDashboard from '../../assets/image/Quick Menu-dashboard.png';
import QuickMenuSoon from '../../assets/image/Quick Menu-soon.png';
import QuickMenuSignal from '../../assets/image/Quick Menu-signal.png';



const OnboardCard = () => {
    return (
        <div>
            <div className='row d-flex flex-row align-items-center justify-content-between'>
                <div className='col'>
                    <div ><img src={QuickMenu} className=' img-size'/></div>
                </div>
                <div className='col'>
                    <div ><img src={QuickMenuDashboard} className=' img-size'/></div>
                </div>
                <div className='col'>
                    <div ><img src={QuickMenuSignal} className=' img-size' /></div>
                </div>
                <div className='col'>
                    <div ><img src={QuickMenuSoon} className=' img-size'/></div>
                </div>
               
            </div>
        </div>
    );
};

export default OnboardCard;