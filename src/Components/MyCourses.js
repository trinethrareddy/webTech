import React, { useEffect, useState } from 'react';

import '../styles/allcourses.css';

import AllCoursesContent from './AllCoursesContent.js';

import CourseCard from './CoursesCards.js';

import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';



const MyCourses = () => {

    const[allcourses,setAllCourses] = useState([]);

    useEffect(() =>{
        console.log('Courses');
        const data =[
            {
                name:'The Creative React and Redux Course',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW",
                desc:'Build 3 Awesome Web Applications With React!',
                price:'$29.99',
                id:1,
                isMyCourse: true
            },
            {
                name:'The Creative Angular Course',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW",
                desc:'Build 3 Awesome Web Applications With Angular!',
                price:'$19.99',
                id:2,
                isMyCourse: true
            },
            {
                name:'SpringBoot Tutorials',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW",
                
                desc:'Easy Spring Applications',
                price:'$29.99',
                id:3,
                isMyCourse: false
            },
            {
                name:'The Front End Vue JS',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW",
                
                desc:'Build 3 Awesome Web Applications With Vue.js!',
                price:'$10.99',
                id:4,
                isMyCourse: false
            },
            {
                name:'SpringBoot Easy Tutorial',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4Q0byV2QfCLbgoDS7djA",
                
                desc:'Easy Spring Applications',
                price:'$29.99',
                id:5,
                isMyCourse: false
            },
            {
                name:'The Front End Application Development',
                imgPath:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW",
                
                desc:'Build Awesome Web Applications',
                price:'$10.99',
                id:6,
                isMyCourse: false
            }
        ]
        setAllCourses(data);
    }, []);
    
    return(
        <div>
        <div className="allcourses__header"> 
            <ul className="allcourses__filter-item">
                <li className="allcourses__filter-category">Category:
                    <button type="button" data-toggle="dropdown"> All </button>
                </li>
                <li className="allcourses__filter-author">Author:
                    <button type="button" data-toggle="dropdown"> All </button>
                </li>  
                <li className="allcourses__search-btn">
                    <form role="search" method="get" action="/courses">
                        <div className="input-group">
                            <label htmlFor="search-courses" className="sr-only">Find a course</label>
                            <input className="form-control search input-lg" data-list=".list" id="search-courses" name="query" placeholder="Find a course" type="text" />
                                <button aria-label="Search Courses" id="search-course-button" className="btn search btn-default btn-lg" type="submit">Search</button>
                        </div>
                    </form>
                </li>
            </ul>
            </div>
            
            <div className="allcourses__body"> hdgfjhjkl</div>
            <div className="courses__list">
                {allcourses.filter(val=>val.isMyCourse).map(val =>  <CourseCard course={val} key={val.id} />)}
                
            </div>

            
        </div>
        
            
    )
};

export default MyCourses;