import React from 'react'
import './DestinationTwo.css'
import destination2 from '../../assets/images/destination2.png'

const DestinationTwo = () => {
  return (
    <section id="destination2">
        <div class="container">
            <div class="destination2_wrapper">
                <div class="destination2_img">
                    <img src={destination2} alt="image"/>
                </div>
                <div class="destination2_content">
                    <h4 class="sec_subtitle">
                        FEATURED DESTINATIONS
                    </h4>
                    <h2 class="sec_title">
                        TAKE ONLY
                        MEMORIES, LEAVE
                        ONLY FOOTPRINTS.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
        <div class="destination2_shape">
            <img src="./svg/des2shape.svg" alt="destination2"/>
        </div>
    </section>
  )
}

export default DestinationTwo