import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "ERP IMPLEMENTATION",
    title: "Multi-warehouse Inventory Rollout",
    description:
      "Unified stock, barcode flows, and procurement rules for a growing retail group.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "CUSTOM MODULE",
    title: "Manufacturing Costing Suite",
    description:
      "Built automated BOM costing, variance tracking, and approval workflows.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "SYSTEM INTEGRATION",
    title: "E-commerce & Odoo Sync",
    description:
      "Connected storefront orders, payments, and fulfillment with real-time sync.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "FIELD SERVICE",
    title: "Service Operations Automation",
    description:
      "Optimized technician scheduling, mobile checklists, and SLA reporting.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "DATA MIGRATION",
    title: "Legacy ERP Migration",
    description:
      "Cleaned, migrated, and validated multi-year financial and CRM data.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "ANALYTICS",
    title: "Executive KPI Dashboard",
    description:
      "Delivered role-based dashboards with live KPIs for leadership teams.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Recent Odoo projects highlighting ERP delivery, automation, and
            measurable business results.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
