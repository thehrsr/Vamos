import React from 'react'
import logo1 from '../assets/logo1.png'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName:'fadeInLeft'}}>
                                        <div className="logo"><a routerLink="/home"> <img src={logo1}/></a></div>
                                <h3 className="f-title f_600 t_color f_size_18">Explore Freely</h3>
                                <p>Join us for Free!!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                    <a routerLink="/signup"><button className="btn btn_get btn_get_two" type="submit">Sign Up</button></a>
                                    <p className="mchimp-errmessage" style={{display: 'none'}}></p>
                                    <p className="mchimp-sucmessage" style={{display: 'none'}}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animatioName: 'fadeInLeft'}}>
                                {/* <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>  */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Connect</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a routerLink="home">Home</a></li>
                                    <li><a routerLink="ride">Sevices</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animatioName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Social</h3>
                                <div className="f_social_icon">
                                    <a href="#" className="fab fa-facebook"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© Vamos 2023 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Developed and Created By <i className="icon_heart"></i> Harsh Raj Singh Rathore </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
