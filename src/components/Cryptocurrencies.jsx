import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Card, Col, Input, Row } from 'antd';


const Cryptocurrencies = ({simplified}) => {
  const count=simplified? 10:100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem,setSearchItem]=useState('')

  // Update state when data is fetched
  useEffect(() => {
    if (cryptosList?.data?.coins) {
      const filterData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchItem.toLowerCase()))
      setCryptos(filterData);
    }
  }, [cryptosList,searchItem]);
  
  if(isFetching) return 'Loading...'


  return (
   <>
  
    {!simplified &&
     (<div className="search-crypto">
     <Input placeholder="search Cruptocurrencies" onChange={(e)=>setSearchItem(e.target.value)}/>
   </div> )}
   

   <Row gutter={[32,32]} className="crypto-car-container">
    {
      cryptos?.map((currency)=>(
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
          <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>

          <Card title={`${currency.rank}. ${currency.name}`}
          extra={<img className="crypto-image" src={currency.iconUrl} alt="currency"/>}
          hoverable
          >
            <p>Price: {millify(currency.price)}</p>
            <p>MarketCap: {millify(currency.marketCap)}</p>
            <p>Daily Change: {millify(currency.change)}%</p>
            
          </Card>
          </Link>
        </Col>
      ))
    }
   </Row>
   </>
  )
}

export default Cryptocurrencies