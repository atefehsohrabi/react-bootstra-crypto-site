import React from 'react';
import '../../App.css';


const SignupComponent = () => {
    return (
        <div >
            <form className='row align-items-center'>
            <div class="h4 pb-2 mb-3 text-danger border-bottom border-info-subtle">
                <h3 for="exampleInputEmail1" className="form-label">Signup</h3>            </div>
                <div className="mgb-0">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please enter your name'/>
                        
                </div>
                <div className="mgb-0">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='cryprto@gmail.com'/>
                </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                    <div id="emailHelp" class="form-text form-label">It must contain at least 4 characters, including letters, uppercase and lowercase. </div>
            </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">Repeasd Password</label>
                <input type="password" className="form-control " id="exampleInputPassword1" />
            </div>
                <div className="mgb-0">
                <label for="exampleInputPassword1" className="form-label">Code</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
           
                <div className="mgb-0 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I agree to the general conditions by reading and knowing.</label>
                </div>
            <button type="submit" className="btn btn-color mb-2 mt-2 ">Submit</button>
            <button type="submit" className="btn btn-gl">Login with Google</button>
            </form>
        </div>
    );
};

export default SignupComponent;