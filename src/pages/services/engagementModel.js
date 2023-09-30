import React from 'react'
import Headline from "../components/headline"

const engagementModel = () => {
    const title ="Engagement Model"
    const desc ="Approach to project success that is adaptable, collaborative, and results-oriented."
  return (
    <div>
        <Headline title={title} desc={desc}/>
        <div className="bg-l_black text-white rounded-3xl p-10 flex mt-14 flex-col sm:flex-row">
        <div className="mt-5 mb-5 pr-5 mx-auto">
          <p className=" text-blue text-3xl font-bold">Hourly</p>
          <div className="mt-5 text-md font-semibold">
            <ul className='list-disc'>
                <li>Scalable resource allocation</li>
                <li>Pay for real hours worked</li>
                <li>Ideal for fast-paced tasks</li>
                <li>Commitment of work</li>
                <li>Long Team Projects</li>
                <li>Dynamic Requirements</li>
            </ul>
            </div>
        </div>
        <div className="mt-5 border-white border-[0.1px] before:absolute sm:h-48"/>
        <div className="mt-5 mb-5 px-5 mx-auto">
          <p className=" text-blue text-3xl font-bold">Fixed Cost</p>
          <div className="mt-5 text-md font-semibold">
            <ul className='list-disc'>
                <li>Budget stability</li>
                <li>Clearly defined scope and deliverables</li>
                <li>Ideal for well-defined projects</li>
                <li>One time Projects</li>
                <li>Optimal Flexible and Fixed Cost</li>
                <li>Pre-defined milestones Payments</li>
            </ul>
            </div>
        </div>
        <div className="mt-5 border-white border-[0.1px] before:absolute sm:h-48"/>
        <div className="mt-5 mb-5 pl-5 mx-auto">
          <p className=" text-blue text-3xl font-bold">AdHoc</p>
          <div className="mt-5 text-md font-semibold">
            <ul className='list-disc'>
                <li>On-demand assistance</li>
                <li>There is no long-term commitment</li>
                <li>Excellent for little chores and emergencies</li>
                <li>Uncertain Requirement</li>
                <li>No Work Commitment</li>
                <li>Projects of varying lengths</li>
                <li>Increased Control and Flexibility</li>
                <li>Payments Based on Requirements</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default engagementModel