import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../assets/Comment.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    const [data, setdata] = useState(Data)
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((element)=>(
            <SwiperSlide>
                    <p>{element.text}</p>
                    <h3>{element.author}</h3>
                    <img src={element.imageUrl} alt="" />
            </SwiperSlide>
          ))}

      </Swiper>
    </>
  );
}
