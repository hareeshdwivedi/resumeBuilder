import React, { useState } from "react";
import { useSelector } from "react-redux";

function Resume2A() {
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
       <div className="A2container">
        <div className="A2social">
          <div className="A2insta">
            <i className="A2fa-brands fa-instagram" />
            <p className="A2social-para">Instagram Account Here</p>
          </div>
          <div className="A2linkedin">
            <i className="A2fa-brands fa-linkedin-in" />
            <p className="A2social-para">Linkedin Account Here</p>
          </div>
          <div className="A2Twitter">
            <i className="A2fa-brands fa-twitter" />
            <p className="A2social-para">Twitter Account Here</p>
          </div>
        </div>
        <div className="A2first-div">
          <div className="A2first-one">
            <div className="A2frist-one-one">
              <div className="A2img">
                <img src="./profile.jpg" alt="error" />
              </div>
              <div className="A2name-data">
                <h1 className="A2name">CATRIONA JACKSON</h1>
                <hr className="A2first-hr" />
                <p className="A2post-para">Graphic &amp; Web Designer</p>
              </div>
            </div>
          </div>
          <div className="A2first-two">
            <h3 className="A2heading-statement">STATEMENT</h3>
            <p className="A2statement-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore explicabo quod
              adipisci sequi omnis sunt rerum ex sapiente quia, suscipit consectetur ipsum aperiam nesciunt. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ad quibusdam, sit reiciendis culpa consectetur doloremque quo
              laudantium explicabo corporis, distinctio harum libero. Voluptas, eveniet iste. </p>
          </div>
        </div>
        <div className="A2second-div">
          <div className="A2second-one">
            <div className="A2education">
              <h3 className="A2heading-education">EDUCATION</h3>
              <div className="A2education-paragraph1">
                <p className="A2year">2017-2018</p>
                <p className="A2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="A2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="A2education-paragraph2">
                <p className="A2year">2017-2018</p>
                <p className="A2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="A2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="A2education-paragraph2">
                <p className="A2year">2017-2018</p>
                <p className="A2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="A2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
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
            </div>
          </div>
          <div className="A2second-two">
            <div className="A2experiance">
              <h3 className="A2heading-experiance">JOB EXPERIENCE</h3>
              <div className="A2expe-data">
                <p className="A2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                <div className="A2para-locations">
                  <p className="A2para">Lorem ipsum dolor sit. Lorem, ipsum.<span>2017-2018</span></p>
                  <p className="A2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet</p>
                  <li className="A2para-li">Lorem ipsum dolor sit amet consectetur adipisicing <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    elit.amet consectetur</li>
                </div>
                <div className="A2expe-data">
                  <p className="A2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                  <div className="A2para-locations">
                    <p className="A2para">Lorem ipsum dolor sit. Lorem, ipsum. <span>2017-2018</span></p>
                    <p className="A2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet </p>
                    <li className="A2para-li">Lorem ipsum dolor sit amet consectetur adipisicing
                      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; elit.amet consectetur</li>
                  </div>
                  <div className="A2expe-data">
                    <p className="A2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                    <div className="A2para-locations">
                      <p className="A2para">Lorem ipsum dolor sit. Lorem, ipsum.<span>2017-2018</span></p>
                      <p className="A2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet
                        ipsum, dolor. </p>
                      <li className="A2para-li">Lorem ipsum dolor sit amet consectetur adipisicing
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elit.amet consectetur</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="A2third-div">
          <div className="A2contact">
            <h3 className="A2heading-contact">CONTACT INFO</h3>
            <div className="A2address">
              <i className="A2fa-solid fa-location-dot" />
              <p className="A2address-para">Lorem ipsum dolor sit.</p>
            </div>
            <div className="A2phone">
              <i className="A2fa-solid fa-mobile" />
              <p className="A2address-para">+01 654 643 654</p>
            </div>
            <div className="A2email">
              <i className="A2fa-solid fa-envelope" />
              <p className="A2address-para">youremail@gmail.com</p>
            </div>
          </div>
          <div className="A2projects">
            <h3 className="A2heading-projects">PROJECTS</h3>
            <div className="A2project-data">
              <p className="A2p-name">Project Title Here</p>
              <p className="A2p-link">www.projectwebsite.com</p>
              <p className="A2p-discription">Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        </div>
        <div className="A2vr" />
        <div className="A2forth-div">
          <div className="A2forth-one">
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
          </div>
          <div className="A2forth-two">
            <div className="A2lang">
              <h3 className="A2heading-lang">LANGUAGES</h3>
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
              </div>
            </div>
            <div className="A2references">
              <h3 className="A2heading-references">REFERENCES</h3>
              <div className="A2refer-grid">
                <div className="A2sub-references1">
                  <p className="A2company-name">Company Name Here</p>
                  <p className="A2refer-name">Your Name Here</p>
                  <p className="A2refer-post">Web Devloper</p>
                  <p className="A2refer-phone">+01 234 234 263</p>
                  <p className="A2refer-email">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
     
   
    </>
  );
}

export default Resume2A;
