import Link from "next/link";
import { ISocialLink } from "../../interfaces/contentrain";

type Props = {
  socialLinks: ISocialLink[];
};
const SocialLinks = ({ socialLinks }: Props) => {
  return (
    <ul className="social-links lg:!justify-end">
      {socialLinks.map((linkItem, i) => (
        <li key={`social-link-${i}`} className="social-links__item">
          <Link href={linkItem.link} passHref className="social-links__link">
              <span>{linkItem.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

