import React, { useState, useEffect } from 'react';

import '../styles/coursecards.css';

const CourseCard = (props) => {

    // const [courses, setCourses] = useState({ course: '', description: '', price: '' });
    // const { state: list, setState: setList } = useState([]);
    return (
       
            <div className="coursecards">
                <div className="row">
                    <a href="" autoFocus="autofocus">
                        <div className="coursecards__outer">
                            <div className="coursecards__img-">
                                <img className="coursecards__img-box" src={props.course.imgPath} role="presentation" />
                            </div>
                            <div className ="coursecards__content-wrapper">
                                <div className="coursecards__title" role="heading" aria-level="2" title="The Creative React and Redux Course">
                                    {props.course.name}
                            </div>
                                <p className="coursecards__desc">
                                    {props.course.desc}
                                </p>
                                <div className="coursecards__info">
                                    <div>hi</div>
                                    <div>$29.99</div>
                                </div>
                            </div>

                        </div>


                    </a>
                </div>


            </div>
        
    );
}

export default CourseCard;