import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const Resume1B = forwardRef((props, ref, rating2, inputValue2) => {
  const {
    inputs,
    refs,
    skills,
    education,
    jobs,
    socials,
    languages,
    certificates,
    projects,
    skills_data,
    r_color,
  } = useSelector((state) => state);
  const rating = useSelector((state) => state.sampleData.rating);
  const inputValue = useSelector((state) => state.sampleData.value);

  return (
    <main
      ref={ref}
      
      className="B1container"
    >
      <div className="B1social">
        <div className="B1insta">
          <i className="B1fa-brands fa-instagram" />
          <p className="B1social-para">Instagram Account Here</p>
        </div>
        <div className="B1linkedin">
          <i className="B1fa-brands fa-linkedin-in" />
          <p className="B1social-para">Linkedin Account Here</p>
        </div>
        <div className="B1Twitter">
          <i className="B1fa-brands fa-twitter" />
          <p className="B1social-para">Twitter Account Here</p>
        </div>
      </div>
      <div className="B1sub-container">
        <div className="B1first-div">
          <div className="B1name">
            <p className="B1name-para">CAREYN</p>
            <h2 className="B1last-name">HARTMAN</h2>
            <hr className="B1name-hr" color="gray" />
          </div>
          <div className="B1about">
            <h3 className="B1heading-about">ABOUT ME</h3>
            <p className="B1about-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              recusandae laudantium id? Atque neque itaque accusamus fuga animi
              exercitationem aut, iusto delectus ratione quam placeat.
            </p>
          </div>
          <div className="B1contact">
            <div className="B1phone">
              <i className="B1 phone-i fa-solid fa-mobile" />
              <p className="B1contact-para">+01 345 332 543</p>
            </div>
            <div className="B1linkedin1">
              <i className="B1fa-brands fa-linkedin-in" />
              <p className="B1contact-para">yourlinkedin.com</p>
            </div>
            <div className="B1web">
              <i className="B1fa-solid fa-globe" />
              <p className="B1contact-para">Yourportfolio.com</p>
            </div>
            <div className="B1address">
              <i className="B1fa-solid fa-location-dot" />
              <p className="B1contact-para">your address</p>
            </div>
          </div>
          <div className="B1work">
            <h3 className="B1work-heading">WORK &amp; EXPERIENCE</h3>
            <div className="B1work1">
              <div className="B1work-year">
                <p className="B1workYear">2015-2016</p>
                <strong>Lorem, ipsum dolor.</strong>
                <p className="B1year-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="B1main-work-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                enim debitis distinctio optio iste modi possimus
              </div>
            </div>
            <div className="B1work2">
              <div className="B1work-year">
                <p className="B1workYear">2015-2016</p>
                <strong>Lorem, ipsum dolor.</strong>
                <p className="B1year-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="B1main-work-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                enim debitis distinctio optio iste modi possimus
              </div>
            </div>
            <div className="B1work3">
              <div className="B1work-year">
                <p className="B1workYear">2015-2016</p>
                <strong>Lorem, ipsum dolor.</strong>
                <p className="B1year-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="B1main-work-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                enim debitis distinctio optio iste modi possimus
              </div>
            </div>
          </div>
          <div className="B1certi">
            <h3 className="B1heading-certi">CERTIFICATES</h3>
            <div className="B1certi-data">
              <div className="B1certi1">
                <div className="B1certificate1">
                  <p className="B1date">12-09-2013</p>
                  <p className="B1certi-para1">Certificate1 Name</p>
                  <p className="B1date">12-09-2013</p>
                  <p className="B1certi-para">Certificate2 Name</p>
                </div>
                <div className="B1certificate2">
                  <p className="B1date">12-09-2013</p>
                  <p className="B1certi-para3">Certificate3 Name</p>
                  <p className="B1date">12-09-2013</p>
                  <p className="B1certi-para">Certificate4 Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="B1references">
            <h3 className="B1heading-references">REFERENCES</h3>
            <div className="B1refer-grid">
              <div className="B1sub-references1">
                <p className="B1company-name">Company Name Here</p>
                <p className="B1refer-name">Your Name Here</p>
                <p className="B1refer-post">Web Devloper</p>
                <p className="B1refer-phone">+01 234 234 263</p>
                <p className="B1refer-email">yourmail@gmail.com</p>
              </div>
              <div className="B1sub-references2">
                <p className="B1company-name">Company Name Here</p>
                <p className="B1refer-name">Your Name Here</p>
                <p className="B1refer-post">Web Devloper</p>
                <p className="B1refer-phone">+01 234 234 263</p>
                <p className="B1refer-email">yourmail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="B1second-div">
          <div className="B1web-devloper">
            <p className="B1web-dev">WEB DEVLOPER</p>
            {/* <div class="B1img">
        <img src="profile.jpg" alt="img not found">
      </div> */}
            <div className="B1main-div">
              <div className="B1education">
                <h3 className="B1heading-education">EDUCATION</h3>
                <div className="B1education1">
                  <div className="B1icon">
                    <i className="B1fa-solid fa-graduation-cap" />
                  </div>
                  <div className="B1education-data">
                    <p className="B1year">2012-2013</p>
                    <p className="B1education-para1">
                      <strong>LOREM IPSUN DOLOR.</strong>
                    </p>
                    <p className="B1education-para2">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="B1education2">
                  <div className="B1icon">
                    <i className="B1fa-solid fa-graduation-cap" />
                  </div>
                  <div className="B1education-data">
                    <p className="B1year">2012-2013</p>
                    <p className="B1education-para1">
                      <strong>LOREM IPSUN DOLOR.</strong>
                    </p>
                    <p className="B1education-para2">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
              <div className="B1languages">
                <h3 className="B1heading-languages">LANGUAGES</h3>
                <div className="B1lang-grid2">
                  <p className="B1skill1-name name1">English</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess1" />
                  </div>
                  <p className="B1skill1-name">Marathi</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess2" />
                  </div>
                  <p className="B1skill1-name">Hindi</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess3" />
                  </div>
                </div>
                <div className="B1skills">
                  <h3 className="B1heading-skills">SKILLS</h3>
                  <p className="B1skill1-name name1">Photoshop</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess1" />
                  </div>
                  <p className="B1skill1-name">HTML</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess2" />
                  </div>
                  <p className="B1skill1-name">CSS</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess3" />
                  </div>
                  <p className="B1skill1-name">Javascript</p>
                  <div className="B1progessbar1">
                    <div className="B1fillprogess4" />
                  </div>
                </div>
                <div className="B1projects">
                  <h3 className="B1heading-projects">PROJECTS</h3>
                  <div className="B1project-data">
                    <div className="B1project1">
                      <p className="B1p-name">Project Title Here</p>
                      <p className="B1p-link">www.projectwebsite.com</p>
                      <p className="B1p-discription">
                        Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                        ipsum dolor
                      </p>
                    </div>
                    <div className="B1project2">
                      <p className="B1p-name">Project Title Here</p>
                      <p className="B1p-link">www.projectwebsite.com</p>
                      <p className="B1p-discription">
                        Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                        ipsum dolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default Resume1B;
