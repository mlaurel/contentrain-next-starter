// components/Logo.tsx

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  logoSrc?: string;
  logoAlt?: string;
}

const Logo: React.FC<LogoProps> = ({
  logoSrc = "/images/logo.svg",
  logoAlt = "Contentrain",
}) => {
  return (
    <>
      <Link
        href="/"
        passHref
        title="Contentrain"
        className="logo py-3 lg:py-6 inline-block"
      >
        <Image src={logoSrc.split('public')[1]} alt={logoAlt} width="189" height="38" />
      </Link>
    </>
  );
};

export default Logo;

