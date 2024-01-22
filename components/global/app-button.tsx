import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type CommonProps = {
  type?: "primary" | "ghost";
  size?: string;
  label?: string;
  children?: ReactNode;
};

type AppButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AppButton = ({
  type = "primary",
  size = "lg",
  label,
  children,
  ...props
}: AppButtonProps | AnchorProps) => {
  const isGhostType = type === "ghost";

  const buttonClass = `outline-none focus-visible:ring-4 transition-colors active:translate-y-0.5 disabled:translate-y-0 cursor-pointer disabled:cursor-not-allowed border ${
    isGhostType
      ? "bg-white hover:bg-secondary-50 ring-secondary-500/40 text-secondary-500  border-secondary-100"
      : "bg-primary-500 hover:bg-primary-400 ring-primary-500/40 text-white border-primary-500"
  } disabled:bg-secondary-500 disabled:text-secondary-300 border-solid rounded-lg ${
    size === "lg" ? "text-base  py-2 px-5" : "text-sm py-1.5 px-4"
  }`;

  if ("href" in props) {
    // Anchor elementi için
    const { href, ...anchorProps } = props;
    return <Link className={buttonClass} href={href} {...anchorProps}>


      {children ? children : label}
    </Link>;
  } else {
    // Button elementi için
    return (
      <button
        className={buttonClass}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children ? children : label}
      </button>
    );
  }
};

export default AppButton;
