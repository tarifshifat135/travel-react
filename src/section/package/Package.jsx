import React from 'react'
import './Package.css'
import { FaCircleCheck } from "react-icons/fa6";

const Package = () => {
    return (
        <section id="package">
        <div class="package_shape">
            <img src="./images/Path 144.png" alt="package"/>
        </div>
        <div class="container">
            <div class="package_title">
                <h2 class="sec_title">
                    Special Package
                </h2>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br/>
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div class="package_wrapper">
                <div class="package_item">
                    <div class="package_item_inner">
                        <h3 class="sec_title">STARTER</h3>
                        <h3 class="sec_title price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <FaCircleCheck />
                                <span>International Air Ticket</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>Daily Continental Breakfast.</span>
                            </li>
                            <li>
                               <FaCircleCheck />
                                <span>Lunch And Dinner</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>City Tour with Guide</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>09 Nights Hotel</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a href="#" class="package_btn">GET STARTED</a>
                    </div>
                    <p class="trail">
                        4 Days Trail Available
                    </p>
                </div>
                <div class="package_item">
                    <div class="package_item_inner">
                        <h3 class="sec_title">STANDARD</h3>
                        <h3 class="sec_title price">$199</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <FaCircleCheck />
                                <span>International Air Ticket</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>Daily Continental Breakfast.</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>Lunch And Dinner</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>City Tour with Guide</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>09 Nights Hotel</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a href="#" class="package_btn">GET STARTED</a>
                    </div>
                    <p class="trail">
                        4 Days Trail Available
                    </p>
                </div>
                <div class="package_item">
                    <div class="package_item_inner">
                        <h3 class="sec_title">PREMIUM</h3>
                        <h3 class="sec_title price">$499</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <FaCircleCheck />
                                <span>International Air Ticket</span>
                            </li>
                            <li>
                           <FaCircleCheck />
                                <span>Daily Continental Breakfast.</span>
                            </li>
                            <li>
                             <FaCircleCheck />
                                <span>Lunch And Dinner</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>City Tour with Guide</span>
                            </li>
                            <li>
                                <FaCircleCheck />
                                <span>09 Nights Hotel</span>
                            </li>
                            <li>
                              <FaCircleCheck />
                                <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a href="#" class="package_btn">GET STARTED</a>
                    </div>
                    <p class="trail">
                        4 Days Trail Available
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Package