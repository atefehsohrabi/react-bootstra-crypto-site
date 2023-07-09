import React from 'react';
// import backimg from '../../assets/image/background-imgg.png';
import logoimg from '../../assets/image/logo.png';
import '../../App.css';
const Banner = () => {
    return (
        <>
            <div className="p-2  border-light"> <img src={logoimg} alt="logo" className='logo-box'/></div>
              
            <div className="p-2 rounded-2 bg-banner-bottom "><span className='text-question'>قبلا حساب کاربری ایجاد کرده اید؟</span><span className='text-signin'>وارد شوید</span></div>
        </>
    );
};

export default Banner;