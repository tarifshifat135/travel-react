import React from 'react'
import './msgus.css'


const MsgUs = () => {
  return (
    <section id="msg">
        <div class="container">
            <div class="msg_mainbox">
                <div class="msg_wrapper">
                    <h2>How can we help?</h2>
                    <p class="sec_subtitle">
                        Our service team is available every day 24/7
                        Free diagnostics for all types of work.
                    </p>
                    <div class="msg_btn">
                        <button>Message Us!</button>
                    </div>
                </div>
                <img class="msg_img" src="./svg/msg us shape.svg" alt="message us"/>
            </div>
        </div>
    </section>
  )
}

export default MsgUs