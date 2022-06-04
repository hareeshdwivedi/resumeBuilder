import React, { useState } from "react";
import { useSelector } from "react-redux";

function Resume1A() {
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

  return (
    <>
      <div className="A1container">
        <div className="A1sub-container">
          <div className="A1first-div">
            <div className="A1name">
              <p className="A1name-para">CAREYN</p>
              <h2 className="A1last-name">HARTMAN</h2>
              <hr className="A1name-hr" color="gray" />
            </div>
            <div className="A1about">
              <h3 className="A1heading-about">ABOUT ME</h3>
              <p className="A1about-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat recusandae laudantium id? Atque neque itaque accusamus
                fuga animi exercitationem aut, iusto delectus ratione quam
                placeat.
              </p>
            </div>
            <div className="A1contact">
              <div className="A1phone">
                <i className="A1 phone-i fa-solid fa-mobile" />
                <p className="A1contact-para">+01 345 332 543</p>
              </div>
              <div className="A1linkedin1">
                <i className="A1fa-brands fa-linkedin-in" />
                <p className="A1contact-para">yourlinkedin.com</p>
              </div>
              <div className="A1web">
                <i className="A1fa-solid fa-globe" />
                <p className="A1contact-para">Yourportfolio.com</p>
              </div>
              <div className="A1address">
                <i className="A1fa-solid fa-location-dot" />
                <p className="A1contact-para">your address</p>
              </div>
            </div>

          

            <div className="A1work">
              <h3 className="A1work-heading">WORK &amp; EXPERIENCE</h3>
              <div className="A1work1">
                <div className="A1work-year">
                  <p className="A1workYear">2015-2016</p>
                  <strong>Lorem, ipsum dolor.</strong>
                  <p className="A1year-para">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="A1main-work-para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  enim debitis distinctio optio iste modi possimus Lorem ipsum
                  dolor sit
                </div>
              </div>
              <div className="A1work2">
                <div className="A1work-year">
                  <p className="A1workYear">2015-2016</p>
                  <strong>Lorem, ipsum dolor.</strong>
                  <p className="A1year-para">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="A1main-work-para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  enim debitis distinctio optio iste modi possimus Lorem ipsum
                  dolor sit
                </div>
              </div>
              <div className="A1work3">
                <div className="A1work-year">
                  <p className="A1workYear">2015-2016</p>
                  <strong>Lorem, ipsum dolor.</strong>
                  <p className="A1year-para">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="A1main-work-para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  enim debitis distinctio optio iste modi possimus Lorem ipsum
                  dolor sit
                </div>
              </div>
            </div>
            {certificates[0].cert_name && (
          <div className="Rcerti">
            <div className="front-heading grid-data">
              <p className="one">02</p>
              <h3 className="heading-certi">CERTIFICATES</h3>
            </div>
            <div className="certi-data">
              <div className="certi1">
                {certificates?.map((certificate, index) => (
                  <div key={index} className="certificate1">
                    <p className="date">
                      {certificate.cert_date
                        ? certificate.cert_date
                        : "12-09-2013"}
                    </p>
                    <p className="certi-para1">
                      {certificate.cert_name
                        ? certificate.cert_name
                        : "Certificate1 Name"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
            <div className="A1references">
              <h3 className="A1heading-references">REFERENCES</h3>
              <div className="A1refer-grid">
                <div className="A1sub-references1">
                  <p className="A1company-name">Company Name Here</p>
                  <p className="A1refer-name">Your Name Here</p>
                  <p className="A1refer-post">Web Devloper</p>
                  <p className="A1refer-phone">+01 234 234 263</p>
                  <p className="A1refer-email">yourmail@gmail.com</p>
                </div>
                <div className="A1sub-references2">
                  <p className="A1company-name">Company Name Here</p>
                  <p className="A1refer-name">Your Name Here</p>
                  <p className="A1refer-post">Web Devloper</p>
                  <p className="A1refer-phone">+01 234 234 263</p>
                  <p className="A1refer-email">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="A1second-div">
            <div className="A1web-devloper">
              <p className="A1web-dev">WEB DEVLOPER</p>
              <div className="A1img">
                <img src="profile.jpg" alt="img not found" />
              </div>
              <div className="A1main-div">
                <div className="A1education">
                  <h3 className="A1heading-education">EDUCATION</h3>
                  <div className="A1education1">
                    <div className="A1icon">
                      <i className="A1fa-solid fa-graduation-cap" />
                    </div>
                    <div className="A1education-data">
                      <p className="A1year">2012-2013</p>
                      <p className="A1education-para1">
                        <strong>LOREM IPSUN DOLOR.</strong>
                      </p>
                      <p className="A1education-parA1">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                  <div className="A1education2">
                    <div className="A1icon">
                      <i className="A1fa-solid fa-graduation-cap" />
                    </div>
                    <div className="A1education-data">
                      <p className="A1year">2012-2013</p>
                      <p className="A1education-para1">
                        <strong>LOREM IPSUN DOLOR.</strong>
                      </p>
                      <p className="A1education-parA1">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                </div>
                {languages[0].language && (
          <div className="Rlang">
            <div className="front-heading grid-data">
              <p className="one">01</p>
              <h3 className="heading-lang">Languages</h3>
            </div>
            <div className="lang-data">
              {languages.map((item, index) => (
                <div key={index} className="skill">
                  <p className="skill-point">8/10</p>
                  <p className="skill-name">{item.language}</p>
                </div>
              ))}
            </div>
          </div>
        )}
                  {skills_data[0].data && (
          <div className="Rskills">
            <div className="front-heading grid-data">
              <p className="one">01</p>
              <h3 className="heading-skills">SKILLS</h3>
            </div>
            <div className="skill-data">
              <div className="skill1">
                {skills.map((item, index) => (
                  <div key={index} className="skill">
                    <p className="skill-name">{item.data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
                  <div className="A1projects">
                    <h3 className="A1heading-projects">PROJECTS</h3>
                    <div className="A1project-data">
                      <div className="A1project1">
                        <p className="A1p-name">Project Title Here</p>
                        <p className="A1p-link">www.projectwebsite.com</p>
                        <p className="A1p-discription">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          Lorem ipsum dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Resume1A;
