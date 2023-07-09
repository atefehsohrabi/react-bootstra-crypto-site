import React,{ Ref, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import '../../App.css';


const NavbarComponent = () => {
const btnToggleRef = useRef();
const toggleMenu =() =>{
    btnToggleRef.current.click();
}
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <div className="navbar-brand navbar-font" >
                    {/* <FaCoins className='navbar-logo'/>  */}
                    پلتفرم رمز ارز</div>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation"
                    ref={btnToggleRef}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link className="nav-link navbar-font" ></Link>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link className="nav-link navbar-font" to="/">صفحه نخست</Link>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link className="nav-link navbar-font" to="/login">ورود</Link>
                        </li>
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link className="nav-link navbar-font" to="/validsignup">تایید ثبت نام</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;