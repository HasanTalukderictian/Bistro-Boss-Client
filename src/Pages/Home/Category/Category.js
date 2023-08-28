import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/pagination';

import sild1 from '../../../assets/home/slide1.jpg';
import sild2 from '../../../assets/home/slide2.jpg';
import sild3 from '../../../assets/home/slide3.jpg';
import sild4 from '../../../assets/home/slide4.jpg';
import sild5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {


    return (
        <section>

            <SectionTitle
            heading={"Order Online"}
            Subheading={"From 11.00 am to 10.00pm"}
            ></SectionTitle>
            <Swiper
      
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
    pagination={{
      clickable:true
    }}
    modules={[Pagination]}
      className='mySwiper mb-24'
    >
      <SwiperSlide>
          <img src={sild1} alt="" />
          <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salads</h3>
          </SwiperSlide>
      <SwiperSlide>
          <img src={sild2} alt="" />
          <h3 className='text-4xl uppercase text-white text-center -mt-16'>Pizza</h3>
          </SwiperSlide>
      <SwiperSlide>
          <img src={sild3} alt="" />
          <h3 className='text-4xl uppercase text-white text-center -mt-16'>Sups</h3>
          </SwiperSlide>
      <SwiperSlide>
          <img src={sild4} alt="" />
          <h3 className='text-4xl uppercase text-white text-center -mt-16'>Desserts</h3>
          </SwiperSlide>
      <SwiperSlide>
          <img src={sild5} alt="" />
          <h3 className='text-4xl uppercase text-white text-center -mt-16'>Salads</h3></SwiperSlide>
      ...
    </Swiper>
        </section>
    );
};

export default Category;