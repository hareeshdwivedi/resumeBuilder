import React, { forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Resume = forwardRef((props, ref, rating2, inputValue2) => {
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
    skills_data
  } = useSelector(state => state)
  const rating = useSelector(state => state.sampleData.rating)
  const inputValue = useSelector(state => state.sampleData.value)

  return (
    <main ref={ref} className='Rcontainer'>
    
      <div className='frist-div'>
        <div className='header-data grid-data'>
          <div className='front-data grid-data'>
            <p className='cv-para'>
              <span className='cv'>CV</span> <br /> 2015
            </p>
          </div>
          <div className='back-data'>
            <p className='fname'>{inputs.fname ? inputs.fname : 'ELON'}</p>
            <p className='lname'>{inputs.lname ? inputs.lname : 'MUSK'}</p>
            <p className='post'>
              {inputs.profession ? inputs.profession : 'SOFTWARE DEVELOPER'}
            </p>
          </div>
        </div>

        <div className='Rskills'>
          <div className='front-heading grid-data'>
            <p className='one'>01</p>
            <h3 className='heading-skills'>SKILLS</h3>
          </div>
          <div className='skill-data'>
            <div className='skill1'>
              {skills.map((item, index) => (
                <div key={index} className='skill'>
                  <p className='skill-name'>{item.data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='Rlang'>
          <div className='front-heading grid-data'>
            <p className='one'>01</p>
            <h3 className='heading-lang'>Languages</h3>
          </div>
          <div className='lang-data'>
            {languages.map((item, index) => (
              <div key={index} className='skill'>
                <p className='skill-point'>8/10</p>
                <p className='skill-name'>{item.language}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='Rcerti'>
          <div className='front-heading grid-data'>
            <p className='one'>02</p>
            <h3 className='heading-certi'>CERTIFICATES</h3>
          </div>
          <div className='certi-data'>
            <div className='certi1'>
              {certificates.map((certificate, index) => (
                <div key={index} className='certificate1'>
                  <p className='date'>
                    {certificate.cert_date
                      ? certificate.cert_date
                      : '12-09-2013'}
                  </p>
                  <p className='certi-para1'>
                    {certificate.cert_name
                      ? certificate.cert_name
                      : 'Certificate1 Name'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})

export default Resume
