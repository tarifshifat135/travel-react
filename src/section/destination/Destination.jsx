import React from 'react'
import './Destination.css'
import destinationImg from '../../assets/images/fd image.png'
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Destination = () => {
    return (
        <section id="destination">
            <div class="container">
                <div class="destination_wrapper">
                    <div class="destination_content">
                        <h4 class="sec_subtitle">
                            FEATURED DESTINATION
                        </h4>
                        <h2 class="sec_title">
                            CHOOSE <br/>
                                THE PERFECT
                                ACCOMMODATION.
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit,<br/> sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore<br/> magna aliquam erat volutpat.
                                </p>
                            </div>
                            <div class="destination_video">
                                <img src={destinationImg} alt="destination image"/>
                                    <div class="destination_video_icon">
                                        <FaPlay />
                                    </div>
                            </div>
                    </div>
                    <div class="book_now">
                        <div class="location_price">
                            <div class="location">
                                <h4>travel location</h4>
                                <div class="star_wrapper">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div class="price">
                                <p class="tour_price">Tour Price</p>
                                <span>$125,99 </span>
                            </div>
                        </div>
                        <a class="book_now_btn" href="#">BOOK NOW</a>
                    </div>
                </div>
        </section>
    )
}

export default Destination