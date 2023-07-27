import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import OnboardCard from '../component/ui/onboard-card';
import axios from "axios";
import { baseUrl } from '../constant/api';
import CoinComponent from '../component/coin/CoinComponent';

// import { Spinner } from '../component/ui/Spinner.component';
// import spinnerImg from "../../assets/image/spinner.gif";
const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        setLoading(true)
        axios(baseUrl).then(response=>{
            setLoading(false)
            console.log(response.data)
            setData(response.data)
        })
        .catch((error)=>{
            setError("An Error occured")
        });

    },[])
console.log(data)
    return (
        <div className='container text-center '>
            <div className='row flex-row mg-row'>
                <div className='col'><Link to="/Signup"><FaUser className='iconcolor'/> <span className='text-login'>Login</span></Link></div>
                <div className='col'><span className='welcom-font'>Crypto Tracking</span></div>
                <div className='col text-reject'><Link to="/" className='text-reject'>Reject</Link></div>
            </div>
            <div className='row d-flex flex-column mg-row-20'>
                
                <span className='text-info-h'>A place to manage all of your trade information and actions</span>

                <span className='text-getinfo'>Do not forget to always using asset and risk managment!!!!!</span>
            </div>
            <div className=' row d-flex flex-column mt-10 mb-10'>
                {/* <OnboardCard /> */}
            </div>
            <div className='row d-flex flex-column align-items-center mt-10 mb-10'>
                <CoinComponent data={data} />
            </div>
            
        </div>
    );
};

export default HomePage;