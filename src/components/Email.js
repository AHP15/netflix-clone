import React from 'react';
import "../styles/Email.css";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/userContext';

export default function Email() {
    const navigate = useNavigate();
    const {user, setUser} = useUser();

    function handleChange(e){
        setUser(prevState => {
            return {
                ...prevState,
                email:e.target.value,
            };
        });
    }

    function handleClick(){
        navigate("/login");
    }

    return (
        <div className='email_form'>
            <input
               type="email"
               placeholder='Email address'
               value={user.email}
               onChange={handleChange} />
            <button onClick={handleClick}>Get Started</button>
        </div>
    )
}
