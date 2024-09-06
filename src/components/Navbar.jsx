import React, { useEffect, useState } from 'react'
import {Menu,Typography,Avatar, Button} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';
import icon from '../images/image.png';

const Navbar = () => {
    const[activeMenu,setActiveMenu]=useState(true);
    const [ScreenSize,setScreenSize]=useState(null);

    useEffect(()=>{
        const handleResize=()=>setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();
        return()=>window.removeEventListener('resize',handleResize);
    },[]);

    useEffect(() => {
        if (ScreenSize <= 800) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [ScreenSize]);

  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu &&(
                <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>

                

                <Menu.Item icon={<BulbOutlined/>}>
                <Link to='/news'>News</Link>
                </Menu.Item>


            </Menu>
    
            )}
     </div>       
    
  )
}

export default Navbar