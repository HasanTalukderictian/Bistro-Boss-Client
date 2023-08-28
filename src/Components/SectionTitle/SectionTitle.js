import React from 'react';

const SectionTitle = ({heading, Subheading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2'>---{Subheading}---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;