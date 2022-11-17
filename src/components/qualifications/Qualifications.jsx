import React, {useState} from 'react'
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1? "qualification__button button__flex qualification__active" : "qualification__button button__flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap
                        qualification__icon"></i>Education{" "}
                    </div>
                    {/* <div className={
                        toggleState === 2? "qualification__button button__flex qualification__active" : "qualification__button button__flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt
                        qualification__icon"></i>Experience{" "}
                    </div> */}
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Codecademy Full-Stack</h3>
                                <span className="qualification__subtitle">Codecademy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 -present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Systems Engineering</h3>
                                <span className="qualification__subtitle">UNAH</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - present
                                </div>
                            </div> 
                        </div>
                        <div className="qualification__data">
                        
                            <div>
                                <h3 className="qualification__title">Udemy NodeJS, PostgreeSQL</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - 2020
                                </div>
                            </div> 
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Udemy HTML, CSS, JS</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2019
                                </div>
                            </div> 
                        </div>
                    </div>
                    {/* <div className={toggleState === 2? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">In progress...</h3>
                                <span className="qualification__subtitle">- - -</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>- - - 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Qualifications