import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Highlights from Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Analyst at Astellas Pharma US <span>Jul 2023 - p; Jun 2022 - September 2022</span></h2>
                        <p>I am about to return to Astellas Pharma US, a company I interned for during Summer 2022, as a full-time senior analyst on the Global Brand and Market Analytics teams. During my internship, I directed and completed an exploratory Network Analysis to identify the most influential Hospital Medicine Groups (HMGs) throughout gastric cancer patient’s journey using Python, R and Gephi. My project helped inform key market decisions to prepare for product launch in the US market.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer at IPPH (Institute for Population and Precision Health)<span> Sep 2021 - Jun 2023</span></h2>
                        <p>I assisted the developer's team in building next-generation research participant management system using Python, Django, SQL, and AWS. I wrote front-end tests for React components using Cypress and worked on autosuggested address field feature using ArcGis.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Scientist Intern at University of California San Diego Information Technology Services <span> Jun 2020 - Sep 2020</span></h2>
                        <p> My teammates and I followed Model-View-Controller (MVC) design pattern and developed data science administration tools in Python. In four months, we designed several analytic views that queried, organized, and aggregated data in an in-memory data platform SAP HANA that automates back-end data processes to facilitate data-driven decisions by policy makers across the UC system</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
