import React from 'react';

const CoinComponent = ({data}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>logo</th>
                        <th scope='col'>symbol</th>
                        <th scope='col'>price</th>
                        <th scope='col'>24h</th>
                        <th scope='col'>volume</th>
                        <th scope='col'>marketcap</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
               
               {
                   data.map((coin)=>{
                       
                       <tr key={coin.market_cap_rank}>
                           <th scope='row'>{coin.market_cap_rank}</th>
                           <td>{coin.market_cap_rank}</td>
                           <td ><img src={coin.image} /></td>
                           <td>{coin.symbol}</td>
                           <td>{coin.current_price}</td>
                           <td>{coin.price_change_percentage_24h}</td>
                           <td>{coin.total_volume}</td>
                           <td>{coin.market_cap}</td>
                       </tr>
                   })
               }
               
            </table>
        </div>
    );
};

export default CoinComponent;