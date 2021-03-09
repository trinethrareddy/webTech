import React, { useEffect, useState } from 'react';

import '../styles/allcourses.css';

import AllCoursesContent from './AllCoursesContent.js';

import CourseCard from './CoursesCards.js';

import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';



const AllCourses = () => {

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

   console.log(allcourses);
    
    return(
        <div>
        <div className="allcourses__header"> 
            <ul className="allcourses__filter-item">
                <li className="allcourses__filter-category">Category:
                    {/* <button type="button" data-toggle="dropdown"> All </button> */}

                    <select className="allcourses__filter-categoryItem">
                        <option value="" >All</option>
                        <option value="">{allcourses.name}</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option3</option>
                    </select>
                </li>
                <li className="allcourses__filter-author">Author:
                    {/* <button type="button" data-toggle="dropdown"> All </button> */}
                    <select>
                        <option value="">All</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option3</option>
                    </select>
                </li>  
                <li className="allcourses__search-btn">
                    <form role="search" method="get" action="/courses">
                        <div className="input-group">
                            <label htmlFor="search-courses" className="sr-only"></label>
                            <input className="form__control-search" data-list=".list" id="search-courses" name="query" placeholder="Find a course" type="text" />
                                <button aria-label="Search Courses" id="search-course-button" className="form__control-searchbtn" type="submit">Search</button>
                        </div>
                    </form>
                </li>
            </ul>

           
            </div>
            
            <div className="allcourses__body"> hdgfjhjkl</div>
            <div className="courses__list">
                {allcourses.map(val =>  <CourseCard course={val} key={val.id} />)}
                
            </div>

            
        </div>
        
            
    )
};

export default AllCourses;