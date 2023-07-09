import React from 'react';
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import OnboardCard from '../component/ui/onboard-card';
import Videoimg from '../assets/image/Video.png';


const HomePage = () => {
    return (
        <div className='container text-center '>
            <div className='row flex-row mg-row'>
                <div className='col'><Link to="/Signup"><FaUser className='iconcolor'/> <span className='text-login'>ورود به حساب</span></Link></div>
                <div className='col'><span className='welcom-font'>به رمز ارزها خوش آمدید</span></div>
                <div className='col text-reject'><Link to="/" className='text-reject'>رد کردن</Link></div>
            </div>
            <div className='row d-flex flex-column mg-row-20'>
                
                <span className='text-info-h'> ما در رمز ارز کلی محصول متنوع و مختلف داریم که به همه کمک می کنند معامله ای آسان، لذت بخش و پرسود داشته باشید.</span>

                <span className='text-getinfo'>دوست داری با کدومشون شروع کنی؟ انتخاب کن تا بیشتر برات توضیح بدم.</span>
            </div>
            <div className=' row d-flex flex-column mt-10 mb-10'>
                <OnboardCard />
            </div>
            <div className='row d-flex flex-column align-items-center mt-10 mb-10'>
                <span className='mg-span-20 text-info-h'>مطمئن نیستی میخوای با کدوم شروع کنی؟ ویدئو محصولات رمز ارز و ببین و تصمیم بگیر!</span>
                <div className=' col w-75 video'> <img src={Videoimg} className='img-video'/></div>
            </div>
            
        </div>
    );
};

export default HomePage;