import React from 'react';
import Banner from '../component/ui/banner';
import SignupComponent from '../component/ui/SignupComponent';
import '../App.css';

const SignupPage = () => {
    return (
       
            <div className='row position-absolute h-100'>
      
            <div className='col-lg-7 col-md-7 col-sm-12 bg-img banner-bg'>
                <Banner/>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12 align-items-center p-10 h-100'>
                <div className='row w-75 m-auto p-2 border border-light-subtle rounded-2 shadow '>
                    <SignupComponent />
                    </div>
               
            </div>
          </div>
        
    );
};

export default SignupPage;