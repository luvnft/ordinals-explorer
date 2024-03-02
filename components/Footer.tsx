"use client";

import { Discord } from 'react-icons/io5';
import { motion } from "framer-motion";
import Link from "next/link";
import IconTwitter from "./icons/IconTwitter";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[88rem] p-3 sm:p-5 md:p-6 lg:p-10"
    >
      <div className="w-full rounded-md bg-black">
        <div className="flex flex-col p-4 pb-8 sm:p-6 md:p-8 lg:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="flex gap-4 md:flex-col">
              <a href="https://luvnft.com" aria-label="Hiro Systems">
                <div className="hiro h-[54px] w-[54px]" />
              </a>
              {/* todo: link chainhooks */}
              <p className="text-sm text-neutral-0">
                This Ordinals Explorer is powered by {" "}
                <a className="underline" href="https://luvnft.com">
                  LUV NFT.
                </a>{" "}
                Shill your Ordinals on{" "}
                <a
                  className="underline"
                  href="https://btcsats.luvnft"
                >
                LUV NFT BTCSATS{" "}
                </a>{" "}
                Web5 social media platform.
              </p>
            </div>
            {/* Newsletter form */}
            <div
              className="digioh-form"
              id="lightbox-inline-form-8b0bbe84-51ac-4bfc-8af0-101231368a57"
            />
          </div>
          <div className="mt-10 flex flex-col justify-between space-y-4 text-center text-xs text-neutral-300 md:flex-row md:space-y-0">
            <div>
              {/* todo: links */}
              <a href="https://tiktok.com/@luvnft">TikTok</a>{" "}
              &mdash;{" "}
              <a href="https://instagram.com/luvnft">Instagram</a>
            </div>
            <div className="flex justify-center space-x-3">
              <Link href="https://twitter.com/luvnft" target="_blank">
                {/* todo: find filled twitter icon */}
                <IconTwitter className="inline-block h-3.5 text-neutral-0" />
              </Link>
              <Link href="https://discord.gg/RqKUB7Rxz5" target="_blank">
              <Discord className="inline-block h-[18px] w-[18px] text-neutral-0" />
              </Link>
              <Link
                href="https://luvnft.com"
                className="inline-block"
                target="_blank"
              >
                &copy; {new Date().getFullYear()} LUV NFT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
