import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {DetailUrl} from '../constant/api';
import axios from 'axios';
import CoinDetail from './CoinDetail';

const CoinPage = () => {
    const paramObject = useParams();
    const url = DetailUrl(paramObject.id);
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        axios(url).then(response => {
            setLoading(false)
            console.log(response.coin)
            setCoin(response.coin)
        })
            .catch((error) => {
                setError("An Error occured")
            });

    }, []);

    return (
        <div className='container'>
            {
                loading?<h3>hi</h3>: error !=="" ? <h3>{error}</h3>:<CoinDetail coin={coin}/>
            }
        </div>
    );
};

export default CoinPage;