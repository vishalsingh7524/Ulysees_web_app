import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <p className='footer-heading' style={{ textAlign: 'center', fontWeight: '500', fontSize: '18px', color: 'white', marginTop: '20px' }}>Partnerships</p>
                <div className='roundup'>
                    <marquee>
                        <img src="./images/m1.png" alt="" />
                        <img src="./images/m2.png" alt="" />
                        <img src="./images/m3.png" alt="" />
                        <img src="./images/m4.png" alt="" />
                        <img src="./images/m5.jpg" alt="" />
                        <img src="./images/m6.png" alt="" />
                        <img src="./images/m7.png" alt="" />
                    </marquee>
                </div>

                <div className="logo1">
                    <p>Ulysses <br /> <span>system</span></p>
                </div>

                <div className='foot-section'>
                    <div className="foot-s1">
                        <h6 style={{ color: 'white' }}>Address:</h6> <br />
                        <p>Ulysses Hellas S.A.</p>
                        <p>23 Akti Miaouli Str. 185 35,</p>
                        <p>Piraeus Greece</p> <br />
                        <div className='innerdiv'>
                            <h6 style={{ color: 'white' }}>Contact:</h6><br />
                            <p>+30 2104190800 <br />
                                info@ulysses-systems.com</p></div>

                    </div>
                    {/* <div className="foot-s1">
                        <h6 style={{ color: 'white' }}>Address:</h6> <br />
                        <p>Ulysses Systems India Pvt Ltd</p>
                        <p>Ulysses Systems,227,B-Wing, Chintamani Plaza</p>
                        <p>Andheri-Kurla Road, Mumbai-400099</p> <br />
                        <div className='innerdiv'>
                            <h6 style={{ color: 'white' }}>Contact:</h6> <br />
                            <p>+91 2249783635  <br />
                                info@ulysses-systems.com</p></div>
                    </div> */}

                    {/* <div className="foot-s1">
                        <div className='social'>
                            <h6>Social:</h6>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>

                        <div className='logo-btn'>
                            <div className="task-asst1">
                                <p style={{ textAlign: 'center' }}>TASK ASSITANT <br /><span>software that works</span></p>
                            </div>
                            <div className='btn'>
                                <button>Request A Demo</button>
                            </div>
                        </div>

                    </div> */}
                </div>

                 {/* <div style={{ color: 'rgb(19, 165, 187)', textAlign: 'center' }}>──────────────────────────────────────</div> */}

                  <div className='award-sec'>
                    <div className='award-head'>
                        <p>Awards & Certificates</p>
                    </div>

                     <div className='award-img'>       
                        <div className="img-sec">
                            <img src="./images/aw1.jpeg" alt="" />
                            <img src="./images/aw2.jpeg" alt="" />
                            <img src="./images/aw-3.jpeg" alt="" />
                            <img src="./images/aw-4.jpeg" alt="" />
                            <img src="./images/aw-5.jpeg" alt="" />
                            <img src="./images/aw-6.png" alt="" />
                            <img src="./images/aw-7.jpeg" alt="" />
                            <img src="./images/aw-7.png" alt="" />
                        </div>
                    </div>

                    <p style={{textAlign:'center', color:"white", marginTop:'30px'}}>Ulysses Copyright © 2022. All rights reserved</p>
                </div> 
            </footer>
        </div>
    )
}
