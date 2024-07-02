import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './contact.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map"></i>
                            <h3>Adresse</h3>
                            <p>

                            <i id='epingle' className="bx bx-map-pin"></i>
                                Paris
                                
                                
                                 </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:contact@codecraft-innovations.fr">
                                    contact@codecraft-innovations.fr
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Téléphone</h3>
                            <p>
                                <a href="tel:+33638957091">+33 6 38 95 70 91</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
