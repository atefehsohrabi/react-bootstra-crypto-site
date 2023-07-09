import React from 'react';
import '../../App.css';


const SignupComponent = () => {
    return (
        <div >
            <form className='row align-items-center'>
            <div class="h4 pb-2 mb-3 text-danger border-bottom border-info-subtle">
                <h3 for="exampleInputEmail1" className="form-label">ثبت نام در رمز ارز</h3>            </div>
                <div className="mgb-0">
                    <label for="exampleInputEmail1" className="form-label">نام و نام خانوادگی</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='نام و نام خانوادگی خود را وارد کنید.'/>
                        
                </div>
                <div className="mgb-0">
                    <label for="exampleInputPassword1" className="form-label">پست الکترونیک</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='cryprto@gmail.com'/>
                </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">رمز عبور</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                    <div id="emailHelp" class="form-text form-label">باید حداقل شامل 4 کاراکتر شامل حروف، بزرگ و کوچک باشد.</div>
            </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">تکرار رمز عبور</label>
                <input type="password" className="form-control " id="exampleInputPassword1" />
            </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">کد مصرف</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
           
                <div className="mgb-0 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">من با مطالعه و آگاهی، با شرایط عمومی موافقت می نمایم.</label>
                </div>
            <button type="submit" className="btn btn-color mb-2 mt-2 ">ایجاد حساب کاربری</button>
            <button type="submit" className="btn btn-gl">ورود با حساب گوگل</button>
            </form>
        </div>
    );
};

export default SignupComponent;