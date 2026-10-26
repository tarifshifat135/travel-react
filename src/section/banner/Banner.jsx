import React from 'react'
import searchIcon from '../../assets/images/search icon.png'
import bannerImg from '../../assets/images/banner img.jpg'
import { IoSearchSharp } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import './Banner.css'

const Banner = () => {
    return (
        <section id="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="container">
                <div className="banner_wrapper">
                    <h1>CHOOSE THE PERFECT DESTINATIONS.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation.
                    </p>
                    <form>
                        <div className="form_inner">
                            <div className="banner_search">
                                <input type="text" placeholder="Enter your location" />
                                <IoSearchSharp />
                            </div>
                            <div className="map_circle">
                                <FiMapPin />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Banner