import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import "../styles/Signin.css";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../contexts/userContext";

export default function Signin() {

    const navigate = useNavigate();
    const {user, setUser} = useUser();

    function handleEmailChange(e){
        setUser(prevState => {
            return {
                ...prevState,
                email:e.target.value
            };
        })
    }

    function handlePassChange(e){
        setUser(prevState => {
            return {
                ...prevState,
                password: e.target.value
            };
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        setUser(prevState => {
            return {
                ...prevState,
                isLoggedIn:true,
            };
        });
        navigate("/");
    }

    return (
        <div className='login'>
            <div className='home_logo' onClick={() => {navigate("/")}}>
                <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png'
                alt='netflex logo' />
            </div>

            <div className='home_first'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>

            <div className='login_form'>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <input
                       type="email"
                       name='email'
                       placeholder='Enter any email address'
                       value={user.email}
                       onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder='Enter any password'
                        value={user.password}
                        onChange={handlePassChange}
                    />
                    <button type='submit'>Sign In</button>
                </form>
                <div>
                    <p><GoogleIcon /></p>
                    <p className='login_google'>Login with google</p>
                </div>
            </div>
            </div>

            <div className='login_footer'>
                 <div>Questions? contact us.</div>
                 <div className='option'>
                    <p>FAQ</p>
                    <p>Help Center</p>
                 </div>
                 <div className='option'>
                     <p>Terms of use</p>
                     <p>Privacy</p>
                 </div>
             </div>
        </div>
    )
}
