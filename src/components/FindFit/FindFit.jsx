import React from 'react';

const FindFit = () => {
  return (
    <section className='bg-light'>
      <div className='container py-16 text-center'>
        <h2 className='text-5xl font-bold mb-4'>Find Your Perfect Fit</h2>
        <p className='text-lg text-dark2 max-w-[800px] mx-auto mb-8'>To better assist you, tell us a bit about your needs. Are you looking for a lower entry-point or a premium, comprehensive service?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto'>
          <div className='p-6 bg-white rounded-2xl border border-[#eee]'>
            <div className='font-semibold mb-2 text-lg'>Solo Developer / Startup</div>
            <p className='text-base text-dark2'>Seeking cost-effective solutions to launch quickly or for individual projects.</p>
          </div>
          <div className='p-6 bg-white rounded-2xl border border-[#eee]'>
            <div className='font-semibold mb-2 text-lg'>Growing Team / Enterprise</div>
            <p className='text-base text-dark2'>Requires robust, scalable, and premium solutions for complex team or business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindFit;
