import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testinomial.css';

const testimonials = [
    { name: "John Doe", text: "Amazing service. Highly recommend!" },
    { name: "Jane Smith", text: "Fantastic support and experience." },
    { name: "Alice Brown", text: "Loved the process. Very smooth!" },
    { name: "Mark Lee", text: "Efficient and reliable." },
];

function TestimonialSlider() {
    return (
        <div className="testimonial-section">
            <h2>What Our Clients Say</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                speed={600} // smooth transition
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                {/* slides here */}
            

            


            {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="testimonial-card">
                        <p>"{item.text}"</p>
                        <h4>- {item.name}</h4>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div >
    );
}

export default TestimonialSlider;
