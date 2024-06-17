import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        if (email.trim() === '') {
            alert('Email não pode estar vazio');
        } else if (isValidEmail(email)) {
            setMessage('Email validado');
            setShowMessage(true);

            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);

            // Aqui você pode enviar o email para o backend ou realizar outras ações necessárias
        } else {
            setMessage('Email inválido');
            setShowMessage(true);
        }
    };

    const isValidEmail = (email: string) => {
        // Expressão regular para validar email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>footer.</h2>
                    <address>
                        Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São Paulo - SP, 04717-004
                    </address>
                </div>
                <div className="footer-section">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Help</h3>
                    <ul>
                        <li>Payment Options</li> 
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h3 className='titulo-input'>Newsletter</h3>
                    <div className="newsletter-input">
                        <div className="newsletter-input-container">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <div className="newsletter-button">
                                <button onClick={handleSubscribe}>SUBSCRIBE</button>
                            </div>
                        </div>
                        {showMessage && <p className="message">{message}</p>}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>2024 Compass UOL</p>
            </div>
        </footer>
    );
};

export default Footer;
