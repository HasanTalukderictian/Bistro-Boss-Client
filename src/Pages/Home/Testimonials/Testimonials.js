import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Testimonials = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                Subheading="What Our Clients Say"
                heading="TESTIMONIALS">

            </SectionTitle>
            <Swiper cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation]}
                className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        review={review}>
                        <div className=' flex flex-col items-center mx-24 my-16'>

                            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                           <p> <FontAwesomeIcon className='bg-orange-800 ' icon="fa-solid fa-quote-left" /></p>
                            <p className='mt-4'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 mb-2'> {review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>
        </section>
    );
};

export default Testimonials;