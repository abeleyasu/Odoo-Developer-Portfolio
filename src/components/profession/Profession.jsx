import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Odoo Implementation",
    description:
      "I configure Odoo modules, workflows, and access rules so teams can work efficiently from day one.",
  },
  {
    id: 2,
    title: "Custom Module Development",
    description:
      "I build bespoke modules, automations, and reports that align Odoo with unique business processes.",
  },
  {
    id: 3,
    title: "Integrations & Support",
    description:
      "I connect Odoo with external services and provide ongoing optimization, training, and support.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in Odoo implementations that streamline operations,
            unify data, and improve decision-making across teams.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach blends technical depth with clear communication, so
            every rollout stays aligned with business goals.
          </p>
        </div>
        <a
          href="mailto:hello@abeleyasu.dev"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
