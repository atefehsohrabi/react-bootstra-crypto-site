import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


const LoginComponent = () => {
    return (
        <div >
            <form className='row align-items-center'>
            <div class="h4 pb-2 mb-3 text-danger border-bottom border-info-subtle">
                <h3 for="exampleInputEmail1" className="form-label">ورود در رمز ارز</h3>            </div>
                
                <div className="mgb-0">
                    <label for="exampleInputPassword1" className="form-label">پست الکترونیک</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='cryprto@gmail.com'/>
                </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">رمز عبور</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                
            </div>
             
           
                <div className="mgb-0 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">مرا به خاطر بسپار</label>
                </div>
            <button type="submit" className="btn btn-color mb-3 mt-2 ">ورود</button>
            <button type="submit" className="btn btn-gl mb-3">ورود با حساب گوگل</button>
                <div id="emailHelp" class="form-text">رمز عبور خود را فراموش کرده اید؟ فراموشی رمز عبور</div>
            </form>
        </div>
    );
};

export default LoginComponent;