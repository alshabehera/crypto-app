import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Card, Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const demoImage = 'https://www.chainalysis.com/wp-content/uploads/2022/01/cryptocurrency-money-laundering-2022-min-scaled-1-948x632.jpg';

const News = () => {
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency' });

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error fetching news</div>;
  if (!cryptoNews) return <div>No news found</div>;

  // Make sure to adjust based on the actual structure of your API response
  const newsList = cryptoNews.data || [];

  return (
    <>
    <Title>Latest Crypto News</Title>
    <Row gutter={[24, 24]}>
      {newsList.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i} className="crypto-card">
          <Card
            hoverable
            className="news-card"
          
          >
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
              <Title className="news-title" level={4}>{news.name?news.name:"cryptoCurrencies"}</Title>
              <img src={news?.logo || demoImage} alt="news" width="60px" height="50px"/>
              </div>
             
             
            </a>
            <p>{news.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default News;
