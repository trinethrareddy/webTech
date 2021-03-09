import React from 'react';

import '../styles/allcourses.css';

const AllCoursesContent = () => {
    return(
        <div>
           <div className="col-xs-12 col-sm-6 col-md-4">
  <div className="course-listing">
    <div className="row">
      <a href="/p/the-creative-react-and-redux-course" data-role="course-box-link">
        <div className="col-lg-12">
          {/* <!-- Course Image, Name & Subtitle (everyone) --> */}
          <div className="course-box-image-container">
            <img className="course-box-image" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW" role="presentation" /> 
          </div>
          <div className="course-listing-title" role="heading" aria-level="2" title="The Creative React and Redux Course">
            The Creative React and Redux Course
          </div>
          {/* <!-- Progress bar (enrolled users) --> */}
          <div className="col-xs-12 hidden course-listing-enrolled" aria-hidden="true">
            <div className="progressbar">
              <div className="progressbar-fill" role="progressbar" aria-labelledby="percent-complete-1203573"></div>
            </div>
            <p className="course-access-limit hidden">Available until <span></span></p>
          </div>
          {/* <!-- Subtitle (unenrolled users) --> */}
          <div className="course-listing-subtitle" title="Build 3 Awesome Web Applications With React!" role="heading" aria-level="3">
            Build 3 Awesome Web Applications With React!
          </div>
        </div>
      </a>
    </div>
    <div className="course-listing-extra-info">
      <div>
        {/* <!-- Bundle Info (everyone) -->
        
          <!-- Author Image and Name (everyone) --> */}
          <img className="img-circle" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/0LuCQmJSIOawpiicZcxQ" alt="Dev Ed" />
          <span className="small course-author-name">
            Dev Ed
          </span>
        
      </div>
      {/* <!-- Progress percentage (enrolled users) --> */}
      <div className="hidden" aria-hidden="true">
        <div className="small course-progress">
          <span className="percentage" id="percent-complete-1203573" data-course-id="1203573">
            %
          </span>
          <br />
          COMPLETE
        </div>
      </div>
      {/* <!-- Price (unenrolled users) --> */}
      <div>
        <div className="small course-price" id="course-box-price-product-2592704">
          $29.99
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default AllCoursesContent;