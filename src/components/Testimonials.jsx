import React from 'react'
import '../styles/testimonials.css'
import AVTR1 from '../assets/avatar1.jpg'
import AVTR2 from '../assets/avatar2.jpg'
import AVTR3 from '../assets/avatar3.jpg'
import AVTR4 from '../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Britney Spears',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque minima expedita dolores, aut, unde iure minus perspiciatis accusantium libero ad. Quam molestias veniam error, sunt distinctio consequuntur quaerat nihil! Praesentium incidunt voluptas at tempora eligendi similique facilis, in illo provident aliquam nisi nam. Molestiae deleniti veniam amet quia commodi? Animi beatae iure amet libero iusto voluptatem excepturi vitae. Iure.'
  },
  {
    avatar: AVTR2,
    name: 'Jhon Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque minima expedita dolores, aut, unde iure minus perspiciatis accusantium libero ad. Quam molestias veniam error, sunt distinctio consequuntur quaerat nihil! Praesentium incidunt voluptas at tempora eligendi similique facilis, in illo provident aliquam nisi nam. Molestiae deleniti veniam amet quia commodi? Animi beatae iure amet libero iusto voluptatem excepturi vitae. Iure.'
  },
  {
    avatar: AVTR3,
    name: 'Carlos Alberto',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque minima expedita dolores, aut, unde iure minus perspiciatis accusantium libero ad. Quam molestias veniam error, sunt distinctio consequuntur quaerat nihil! Praesentium incidunt voluptas at tempora eligendi similique facilis, in illo provident aliquam nisi nam. Molestiae deleniti veniam amet quia commodi? Animi beatae iure amet libero iusto voluptatem excepturi vitae. Iure.'
  },
  {
    avatar: AVTR4,
    name: 'Larissa Manoela',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque minima expedita dolores, aut, unde iure minus perspiciatis accusantium libero ad. Quam molestias veniam error, sunt distinctio consequuntur quaerat nihil! Praesentium incidunt voluptas at tempora eligendi similique facilis, in illo provident aliquam nisi nam. Molestiae deleniti veniam amet quia commodi? Animi beatae iure amet libero iusto voluptatem excepturi vitae. Iure.'
  },
]


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 clasName='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
