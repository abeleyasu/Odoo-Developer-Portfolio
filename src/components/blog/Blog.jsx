import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "15 Jan, 2026",
    comments: 12,
    title: "Planning an Odoo rollout that sticks with every team",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "04 Jan, 2026",
    comments: 8,
    title: "Odoo inventory best practices for multi-warehouse growth",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "18 Dec, 2025",
    comments: 15,
    title: "Building executive dashboards that keep KPIs aligned",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "06 Dec, 2025",
    comments: 19,
    title: "Migrating legacy data into Odoo without downtime",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "22 Nov, 2025",
    comments: 10,
    title: "Automation wins: workflows that reduce manual effort",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "05 Nov, 2025",
    comments: 7,
    title: "Keeping Odoo upgrades stable with smart testing",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Insights</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Short reads on Odoo delivery, automation, and ERP strategy.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
