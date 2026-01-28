import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://facebook.com/" },
  { icon: faDribbble, link: "https://dribbble.com/" },
  { icon: faInstagram, link: "https://instagram.com/" },
  { icon: faLinkedin, link: "https://linkedin.com/in/abeleyasu" },
  { icon: faBehance, link: "https://behance.net/" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
