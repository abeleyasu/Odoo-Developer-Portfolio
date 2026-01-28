import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Abel guided our Odoo rollout with clarity and professionalism from day one.",
    quote: `Every phase was documented, and the migration was seamless. We gained real-time visibility into inventory and finance.`,
    name: "Esther Howard",
    designation: "Operations Director, ABC Retail",
  },
  {
    message:
      "The custom modules Abel delivered removed hours of manual work each week.",
    quote: `He understood our manufacturing workflow and built tools that our team adopted immediately.`,
    name: "Ali Haider",
    designation: "COO, Nova Manufacturing",
  },
  {
    message:
      "Reliable, strategic, and deeply technical—exactly what we needed in an Odoo partner.",
    quote: `Our integrations now run smoothly and reporting is finally accurate across departments.`,
    name: "Elon Max",
    designation: "Managing Director, KFC Logistics",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
