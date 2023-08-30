import React from 'react';
import './Bisto.css';

const BistroBoss = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../../../assets/home/chef-service.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        
                </div>
            </div>
        </div>

    );
};

export default BistroBoss;