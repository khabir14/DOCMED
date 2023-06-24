import { herobg, hero } from "../assets";
import React from "react";

const Hero = () => {
    // const myStyle = {
    //     width: '178rem',
    //     height: '74rem',
    //     marginLeft: '-11rem',
    //     marginTop: '-4rem',
    //     backgroundSize: 'cover',
    //     backgroundImage: `url(${herobg})`,
    //     backgroundColor: 'white',
        

    // };
    return (
            <section class="home" id="home" >

                <div class="swiper-container home-slider">
                    <div class="swiper-slide slide">
                        <div class="content">
                            <h3>We're   <strong>   determined</strong> for
                                <br />
                                your <strong> better </strong> life. <br />
                            </h3>
                            <a href="#" className="btn">join as patient</a>
                            <br /> <br />
                            <h6 class="small">
                                You can get the care you need 24/7 – be it online or in
                                person. <br />
                                You will be treated by caring specialist doctors.

                            </h6>
                            <br />
                            <a href="#" className="btn">join as doctor</a>
                        </div>
                        <div class="image">
                            <img src={hero} className="heroimg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
    )
};

export default Hero;