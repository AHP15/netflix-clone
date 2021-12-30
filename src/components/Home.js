import React from 'react'
import HomeRow from './HomeRow';
import Questions from './Questions';
import "../styles/Home.css";
import Email from './Email';
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate =  useNavigate();
    return (
        <div className='home'>
            <div className='home_logo' onClick={() => {navigate("/")}}>
                <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png'
                alt='netflex logo' />
            </div>
            <div className='home_signin' onClick={() => {navigate("/login")}}>
                <button>Sign In</button>
            </div>
            <div className='home_first'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/61b1ed99-aa5e-4310-91cb-317f7140c653/c027b6ba-d329-4bfe-9f26-ae63461b7b27/MA-fr-20211220-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>

            <div className='home_first_info'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <Email />
            </div>
            </div>
            <HomeRow
               title={"Enjoy on your TV."}
               desc={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."}
               img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"}
               video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"}
               large={true}
            />
            <HomeRow
               title={"Download your shows to watch offline."}
               desc={"Save your favorites easily and always have something to watch."}
               img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}
               video={""}
            />
            <HomeRow
               title={"Watch everywhere."}
               desc={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."}
               img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"}
               video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"}
            />
            <HomeRow
               title={"Create profiles for kids."}
               desc={"Send kids on adventures with their favorite characters in a space made just for them—free with your membership."}
               img={"https://occ-0-56-55.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZDfkUMdwXcdHIHDS8mqiBYqabgFeaWFN6H5MDy4Sad0uS0CwII4ot9SLFvEiI5URTBm3WolSn9tevH9mWgTI1f2gkJM.png?r=a3e"}
               video={""}
            />
            <Questions />
        </div>
    )
}

export default Home;
