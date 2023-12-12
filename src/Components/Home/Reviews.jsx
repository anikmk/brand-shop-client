
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <>
        <div className='w-1/2 mx-auto text-center py-8'>
            <h2>User FeedBack</h2>

        </div>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper text-center m-8"
        >
            {reviews.map(review=><SwiperSlide key={review._id}>
                <h2> {review.user} </h2>
                <p> {review.comment} </p>
                
            </SwiperSlide>)}
          
          
        </Swiper>
      </>
    );
};

export default Reviews;