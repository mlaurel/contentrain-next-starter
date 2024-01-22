// components/ShareButtons.tsx

import { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import getConfig from "next/config";
import { RiLink } from "react-icons/ri";
interface ShareLinkItem {
  name: string;
  icon: string;
  link: string;
}

interface ShareButtonsProps {
  url: string;
  text: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, text }) => {
  const { publicRuntimeConfig } = getConfig();
  const baseUrl = publicRuntimeConfig.baseUrl;
  const shareUrl = `${baseUrl}${url}`;
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const ShareButtons: ShareLinkItem[] = [
    {
      name: "Twitter",
      icon: "twitter",
      link: `https://twitter.com/intent/tweet?text=${text} ${url}`,
    },
    {
      name: "LinkedIn",
      icon: "linkedin-gray",
      link: `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${url}`,
    },
    {
      name: "Copy Link",
      icon: "links",
      link: url,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying link to clipboard:", error);
    }
  };

  return (
    <div>
      <ul className="share-links pb-2">
        {ShareButtons.map((linkItem, i) => (
          <li key={`share-link-${i}`} className="share-links__item">
            {linkItem.icon !== "links" ? (
              <Link
                href={linkItem.link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                title={linkItem.name}
                aria-label={linkItem.name}
                className="share-links__link shadow-sm bg-white bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9]"
              >
                <span>
                  <RiLink size={24} />
                </span>
              </Link>
            ) : (
              <button
                title={linkItem.name}
                aria-label={linkItem.name}
                className="share-links__link shadow-sm bg-white bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9] hover:bg-primary-50"
                onClick={copyLink}
              >
                <span>
                  <RiLink size={24} />
                </span>
              </button>
            )}
          </li>
        ))}
      </ul>
      <span className="font-medium text-sm text-slate-600">
        {copied ? "Link Copied!" : "Share this article"}
      </span>
    </div>
  );
};

export default ShareButtons;

