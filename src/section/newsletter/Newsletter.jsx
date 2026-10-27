import React from 'react'
import './newsletter.css'
import newsletterSmall from '../../assets/images/newsletter small.png'
import newsletterBig from '../../assets/images/newsletter big.png'
import newsletterAnotherImg from '../../assets/images/newsletter another img.png'

const Newsletter = () => {
    return (
        <section id="newsletter">
            <div class="container">
                <div class="newsletter_gal">
                    <div class="newsletter_gal_item">
                        <img src={newsletterSmall} alt="newsletter"/>
                    </div>
                    <div class="newsletter_gal_item">
                        <img src={newsletterBig} alt="newsletter"/>
                    </div>
                </div>
                <div class="newsletter_box">
                    <div class="newsletter_box_img">
                        <img src={newsletterAnotherImg} alt="newsletter"/>
                    </div>
                    <div class="newsletter_box_form">
                        <h4 class="sec_subtitle">
                            SUBSCRIBE FOR OFFERS
                        </h4>
                        <h2 class="sec_title">
                            TO GET ALL NEWS,
                            SUBSCRIBE OUR
                            NEWSLETTER
                        </h2>
                        <form class="newsletter_form">
                            <div class="form_group">
                                <input type="email" placeholder="Enter your email"/>
                                    <i class="fa-regular fa-envelope"></i>
                            </div>
                            <button>Let's Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter