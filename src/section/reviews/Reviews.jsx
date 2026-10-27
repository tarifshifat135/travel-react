import React from 'react'
import './reviews.css'
import reviewsimg1 from '../../assets/images/rvw img 1.png'
import reviewsimg2 from '../../assets/images/rvw img 2.png'
import reviewsimg3 from '../../assets/images/rvw img 3.png'
import reviewsimg4 from '../../assets/images/rvw img 4.png'
import reviewsimg5 from '../../assets/images/rvw img 5.png'
import reviewsimg6 from '../../assets/images/rvw img 6.png'

const Reviews = () => {
  return (
     <section id="review">
        <div class="container">
            <h2 class="sec_title">
                CUSTOMER WORDS
            </h2>
            <p class="sec_subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br/>
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <div class="review_wrapper">
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg1} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Victoria Wotton</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg2} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Sonia Marmeladova</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg3} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Hindley Earnshaw</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg4} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Catherine Earnshaw</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg5} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Isabella Linton</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src={reviewsimg6} alt="review image"/>
                    </div>
                    <div class="review_info">
                        <h4>Jennifer Williams</h4>
                        <h5>Traveller, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews