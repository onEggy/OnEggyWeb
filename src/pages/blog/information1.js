import React from 'react';
import Compo from './compo';
import ConsultationButton from '../components/consultButton';

const Information1 = ({ blog }) => {
  const showButton = true;
  const buttonPlaceholder = 'Get your free consultation';

  return (
    <div className="flex flex-col md:flex-row sm:p-12 mt-8 px-6">
        <div className='sm:pr-10 text-lg text-justify sm:text-left'>
          <p>
            {blog.content}
          </p>
        </div>
        <div>
          <div>
            <Compo/>  
          </div>
          <div className="mt-16">
            <div className="bg-l_grey rounded-3xl p-10">
              <h1 className="text-4xl font-semibold">Looking for any personalized service</h1>
              <p className="mt-4">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
              {showButton && <ConsultationButton buttonPlaceholder={buttonPlaceholder} />}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Information1;
