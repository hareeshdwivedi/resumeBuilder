import React from "react";
import { useSelector } from 'react-redux';

function Resume2B() {
  return (
    <div className="B2container">
        <div className="B2social">
          <div className="B2insta">
            <i className="B2fa-brands fa-instagram" />
            <p className="B2social-para">Instagram Account Here</p>
          </div>
          <div className="B2linkedin">
            <i className="B2fa-brands fa-linkedin-in" />
            <p className="B2social-para">Linkedin Account Here</p>
          </div>
          <div className="B2Twitter">
            <i className="B2fa-brands fa-twitter" />
            <p className="B2social-para">Twitter Account Here</p>
          </div>
        </div>
        <div className="B2first-div">
          <div className="B2first-one">
            <div className="B2frist-one-one">
              <h1 className="B2name">CATRIONA JACKSON</h1>
              <hr className="B2first-hr" />
              <p className="B2post-para">Graphic &amp; Web Designer</p>
            </div>
          </div>
          <div className="B2first-two">
            <h3 className="B2heading-statement">STATEMENT</h3>
            <p className="B2statement-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore explicabo quod
              adipisci sequi omnis sunt rerum ex sapiente quia, suscipit consectetur ipsum aperiam nesciunt. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ad quibusdam, sit reiciendis culpa consectetur doloremque quo
              laudantium explicabo corporis, distinctio harum libero. Voluptas, eveniet iste. </p>
          </div>
        </div>
        <div className="B2second-div">
          <div className="B2second-one">
            <div className="B2education">
              <h3 className="B2heading-education">EDUCATION</h3>
              <div className="B2education-paragraph1">
                <p className="B2year">2017-2018</p>
                <p className="B2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="B2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="B2education-paragraph2">
                <p className="B2year">2017-2018</p>
                <p className="B2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="B2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="B2education-paragraph2">
                <p className="B2year">2017-2018</p>
                <p className="B2education-name"><strong>MASTER'S IN COMPUTER</strong></p>
                <p className="B2education-para">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="B2skills">
              <h3 className="B2heading-expertise">SKILLS</h3>
              <div className="B2skill-data">
                <div className="B2skill">
                  <p className="B2skill-name">Photoshop</p>
                  <div className="B2progressbar">
                    <div className="B2fill1 fill" />
                  </div>
                </div>
                <div className="B2skill">
                  <p className="B2skill-name">Python</p>
                  <div className="B2progressbar">
                    <div className="B2fill2 fill" />
                  </div>
                </div>
                <div className="B2skill">
                  <p className="B2skill-name">Javascript</p>
                  <div className="B2progressbar">
                    <div className="B2fill3 fill" />
                  </div>
                </div>
                <div className="B2skill">
                  <p className="B2skill-name">Java</p>
                  <div className="B2progressbar">
                    <div className="B2fill4 fill" />
                  </div>
                </div>
                <div className="B2skill">
                  <p className="B2skill-name">HTML</p>
                  <div className="B2progressbar">
                    <div className="B2fill5 fill" />
                  </div>
                </div>
                <div className="B2skill">
                  <p className="B2skill-name">CSS</p>
                  <div className="B2progressbar">
                    <div className="B2fill6 fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="B2second-two">
            <div className="B2experiance">
              <h3 className="B2heading-experiance">JOB EXPERIANCE</h3>
              <div className="B2expe-data">
                <p className="B2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                <div className="B2para-locations">
                  <p className="B2para">Lorem ipsum dolor sit. Lorem, ipsum.<span>2017-2018 </span></p>
                  <p className="B2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet</p>
                  <li className="B2para-li">Lorem ipsum dolor sit amet consectetur adipisicing <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    elit.amet consectetur</li>
                </div>
                <div className="B2expe-data">
                  <p className="B2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                  <div className="B2para-locations">
                    <p className="B2para">Lorem ipsum dolor sit. Lorem, ipsum. <span>2017-2018 </span></p>
                    <p className="B2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet </p>
                    <li className="B2para-li">Lorem ipsum dolor sit amet consectetur adipisicing
                      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; elit.amet consectetur</li>
                  </div>
                  <div className="B2expe-data">
                    <p className="B2title"><strong>IT MANAGEMENT OFFICER</strong></p>
                    <div className="B2para-locations">
                      <p className="B2para">Lorem ipsum dolor sit. Lorem, ipsum.<span>2017-2018</span></p>
                      <p className="B2big-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.tate Perferendis, nihil! Lorem ipsum, dolor sit amet
                        ipsum, dolor. </p>
                      <li className="B2para-li">Lorem ipsum dolor sit amet consectetur adipisicing
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elit.amet consectetur</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="B2third-div">
          <div className="B2contact">
            <h3 className="B2heading-contact">CONTACT INFO</h3>
            <div className="B2address">
              <i className="B2fa-solid fa-location-dot" />
              <p className="B2address-para">Lorem ipsum dolor sit.</p>
            </div>
            <div className="B2phone">
              <i className="B2fa-solid fa-mobile" />
              <p className="B2address-para">+01 654 643 654</p>
            </div>
            <div className="B2email">
              <i className="B2fa-solid fa-envelope" />
              <p className="B2address-para">youremail@gmail.com</p>
            </div>
          </div>
          <div className="B2projects">
            <h3 className="B2heading-projects">PROJECTS</h3>
            <div className="B2project-data">
              <p className="B2p-name">Project Title Here</p>
              <p className="B2p-link">www.projectwebsite.com</p>
              <p className="B2p-discription">Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
        <div className="B2vr" />
        <div className="B2forth-div">
          <div className="B2forth-one">
            <div className="B2certi">
              <h3 className="B2heading-certi">CERTIFICATION</h3>
              <div className="B2certi-data">
                <div className="B2certi1">
                  <p className="B2date">2-03-2014</p>
                  <p className="B2certi-p1">Certificate1 Name</p>
                  <p className="B2date">2-03-2014</p>
                  <p className="B2certi2-p2">Certificate2 Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="B2forth-two">
            <div className="B2lang">
              <h3 className="B2heading-lang">LANGUAGES</h3>
              <div className="B2lang-data">
                <div className="B2languages">
                  <p className="B2lang-name">English</p>
                  <div className="B2progressbar">
                    <div className="B2fill1 fill" />
                  </div>
                </div>
                <div className="B2languages">
                  <p className="B2lang-name">Marathi</p>
                  <div className="B2progressbar">
                    <div className="B2fill1 fill" />
                  </div>
                </div>
                <div className="B2languages">
                  <p className="B2lang-name">Hindi</p>
                  <div className="B2progressbar">
                    <div className="B2fill1 fill" />
                  </div>
                </div>
              </div>
            </div>
            <div className="B2references">
              <h3 className="B2heading-references">REFERENCES</h3>
              <div className="B2refer-grid">
                <div className="B2sub-references1">
                  <p className="B2company-name">Company Name Here</p>
                  <p className="B2refer-name">Your Name Here</p>
                  <p className="B2refer-post">Web Devloper</p>
                  <p className="B2refer-phone">+01 234 234 263</p>
                  <p className="B2refer-email">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Resume2B;
