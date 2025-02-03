import React from 'react';
import { Card, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';
import logo from './logo.png';

function LoginPage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // 메인 페이지로 강제 이동
        navigate('/main');
    };

    return (
        <div className="login-page">
             <div className="logo-section">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            <Card className="login-card">
               
                <Form layout="vertical">
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input placeholder="Enter your username" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button  className='Login-Button' block onClick={handleNavigate}>
                            로그인
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default LoginPage;
