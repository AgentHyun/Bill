import { Button } from 'antd'
import React from 'react'
import './css/LandingPage.css';
import { useNavigate } from 'react-router-dom';



function LandingPage() {

    const handleNavigate = () => {
    
        navigate('/main');
    };

    const navigate = useNavigate();
  return (
    <div className="Landing-Page">
  <div className="landing-title">Select</div>
   <Button className='Landing-Button1' onClick={handleNavigate}>주문하기</Button>
  <Button className = "Landing-Button2" onClick = {handleNavigate}>주문받기</Button>
</div>


  )
}

export default LandingPage
