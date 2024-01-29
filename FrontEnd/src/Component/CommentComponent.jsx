import React, { useRef,useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    const [data, setdata] = useState()
    const [loading, setLoading] = useState(true); // État de chargement


    useEffect(() => {
      axios.get('http://localhost:4000/comment')
          .then(response => {
              setdata(response.data);
              setLoading(false); // Mise à jour de l'état de chargement
          })
          .catch(error => {
              console.log(error);
              setLoading(false); // Mise à jour de l'état de chargement
          });
  }, []);

    return (
        <>
        {loading ? (
                <p>Chargement en cours...</p> // Affichage pendant le chargement
            ) : (
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
            <SwiperSlide >
                    <p >{element.text}</p>
                    <h3>{element.author}</h3>
                    <img src={element.imageUrl} alt="" />
            </SwiperSlide>
          ))}

      </Swiper>
            )}
    </>
  );
}
