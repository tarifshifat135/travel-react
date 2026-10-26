import React from 'react'
import './Gallery.css'
import galimg from '../../assets/images/galimg.png'
import galimg2 from '../../assets/images/2ndrowbig.png'
import galimg3 from '../../assets/images/2ndrowsmall.png'
import galimg4 from '../../assets/images/3rdrowbig.png'
import galimg5 from '../../assets/images/3rdrowsmall.png'
import galimg6 from '../../assets/images/4throwbig.png'
import galimg7 from '../../assets/images/4throwsmall.png'



const Gallery = () => {
  return (
     <section id="gallery">
        <div class="gal_shape">
            <img src="./images/Path 144.png" alt="shape"/>
        </div>
        <div class="container">
            <div class="gal_title">
                <h2 class="sec_title">
                    Most Destinations
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br/>
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div class="gal_wrapper">
                <div class="gal_item">
                    <div class="gal_item_inner large">
                        <img src={galimg} alt="image"/>
                        <div class="overlay">
                            <h3>North America</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                    <div class="gal_item_inner small">
                        <img src="./svg/galimg.svg" alt="image"/>
                        <div class="overlay">
                            <h3>Gambodia</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                </div>
                <div class="gal_item">
                    <div class="gal_item_inner small">
                        <img src={galimg2} alt="image"/>
                        <div class="overlay">
                            <h3>South America</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                    <div class="gal_item_inner large">
                        <img src={galimg3} alt="image"/>
                        <div class="overlay">
                            <h3>Cape Town</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                </div>
                <div class="gal_item">
                    <div class="gal_item_inner large">
                        <img src={galimg4} alt="image"/>
                        <div class="overlay">
                            <h3>Europe</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                    <div class="gal_item_inner small">
                        <img src={galimg5} alt="image"/>
                        <div class="overlay">
                            <h3>South Africa</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                </div>
                <div class="gal_item">
                    <div class="gal_item_inner small">
                        <img src={galimg6} alt="image"/>
                        <div class="overlay">
                            <h3>New York</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                    <div class="gal_item_inner large">
                        <img src={galimg7} alt="image"/>
                        <div class="overlay">
                            <h3>Australia</h3>
                            <h6>Nice Place</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery