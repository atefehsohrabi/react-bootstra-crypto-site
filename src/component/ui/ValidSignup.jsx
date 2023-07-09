import React from 'react';

const ValidSignup = () => {
    return (
        <div>
            <form className='row align-items-center'>
                <div class="h4 pb-2 mb-3 text-danger border-bottom border-info-subtle">
                    <h3 for="exampleInputEmail1" className="form-label">ثبت نام در رمز ارز</h3>  
                              </div>
                <div id="emailHelp" className="form-text mb-3 label">به آدرس ایمیل cryto@gmail.com یک کد تایید ارسال شده است، لطفا آن را وارد کنید.</div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">نام و نام خانوادگی</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='نام و نام خانوادگی خود را وارد کنید.' />

                </div>
             
             
                <button type="submit" className="btn btn-color mb-2 mt-2 ">ادامه</button>
                <div id="emailHelp" class="form-text">کد تایید دریافت نکرده اید؟</div>
               
            </form>
        </div>
    );
};

export default ValidSignup;