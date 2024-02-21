import React from 'react'
import Headline from "../components/headline"

const engagementModel = () => {
  const title = "Engagement Model"
  const desc = "Approach to project success that is adaptable, collaborative, and results-oriented."
  const list1 = [
    'Scalable resource allocation',
    'Pay for real hours worked',
    'Ideal for fast-paced tasks',
    'Commitment of work',
    'Long Team Projects',
    'Dynamic Requirements'

  ];

  const list2 = [
    'Budget stability',
    'Clearly defined scope and deliverables',
    'Ideal for well-defined projects',
    'One time Projects',
    'Optimal Flexible and Fixed Cost',
    'Pre-defined milestones Payments'
  ]
  const list3 = [
    'On-demand assistance',
    'There is no long-term commitment',
    'Excellent for little chores and emergencies',
    'Uncertain Requirement',
    'No Work Commitment',
    'Projects of varying lengths',
    'Increased Control and Flexibility',
    'Payments Based on Requirements'
  ]

  return (
    <div>
      <Headline
        title={title}
        desc={desc}
        titleCss={'md:font-bold md:text-4xl'}
        descCss={'md:w-[28rem] mt-7 md:ml-12 font-normal leading-5'} />


      <div className="bg-l_black text-white rounded-3xl p-10 flex mt-14 flex-col sm:flex-row">
        <div className="mt-5 mb-5 pr-5 mx-auto">
          <p className="hidden md:block text-blue text-3xl font-bold">Hourly</p>
          <div className="mt-5 text-md font-semibold px-8">
            <ul className='list-disc'>
              {list1?.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
            <p className="md:hidden mt-3 text-blue text-3xl font-bold">Hourly</p>
        </div>
        <div className="my-5 border-white border-[0.1px] before:absolute sm:h-48" />
        <div className="mt-5 mb-5 px-5 mx-auto">
          <p className="hidden md:block text-blue text-3xl font-bold">Fixed Cost</p>
          <div className="mt-5 text-md font-semibold px-8">
            <ul className='list-disc'>
              {list2?.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <p className="md:hidden mt-3 text-blue text-3xl font-bold">Fixed Cost</p>

        </div>
        <div className="mt-5 border-white border-[0.1px] before:absolute sm:h-48" />
        <div className="mt-5 mb-5 pl-5 mx-auto">
          <p className="hidden md:block text-blue text-3xl font-bold">AdHoc</p>
          <div className="mt-5 text-md font-semibold px-8">
            <ul className='list-disc'>
              {list3?.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <p className="md:hidden mt-3 text-blue text-3xl font-bold">AdHoc</p>

        </div>
      </div>
    </div>
  )
}

export default engagementModel