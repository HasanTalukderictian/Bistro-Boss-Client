import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';
import './Features.css';

const Features = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
            heading="Featured Items"
            Subheading="check it Out">

            </SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                 <div>
                 <img src={featuredImg} alt="" />
                 </div>
                 <div className='md:ml-10'>
                    <p> 20 Aug, 2028</p>
                    <p className='uppercase'> Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. 
                         Eaque repellat recusandae ad laudantium tempore consequatur consequuntur 
                         omnis ullam maxime tenetur.</p>
                         <button className="btn btn-outline btn-accent">Oerder Now</button>
                 </div>
            </div>
        </div>
    );
};

export default Features;