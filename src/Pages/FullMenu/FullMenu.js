import React from 'react';
import './FullMenu.css';

const FullMenu = () => {
    return (
        <div className=' text-center items-center'>
            <div>
            <button className="btn btn-outline btn-accent border-0 border-b-4 mb-8">View Full Menu</button>
            </div>
            <div className='bg-black h-60'>
                <h3 className='text-center text-4xl text-white px-10 py-20 justify-content-center mt-15'>Call Us: +8801768712230 </h3>
            </div>
        </div>
    );
};

export default FullMenu;