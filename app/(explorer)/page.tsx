import Link from "next/link";

import CtaLink from "../../components/CtaLink";
import GalleryPreview from "../../components/GalleryPreview";
import Intro from "../../components/Intro";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-between space-y-6 p-6">
      {/* Intro Section */}
      <div className="mx-auto max-w-2xl space-y-10">
        {/* todo: wrap in motion */}
        <Intro />
        <div>
          <SearchBar />
          <Link
            href="/explore"
            className="mt-8 flex justify-center text-neutral-300"
          >
            or explore all
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full">
        <p className="mt-20 text-center text-sm uppercase">
          Latest Inscriptions
        </p>
        <div className="mx-auto mb-4 mt-3 h-12 w-0 border border-dashed border-l-black" />
        <GalleryPreview />

        <div className="mt-16 flex justify-around">
          <CtaLink href="/explore">
            Explore all, sort, and filter &rarr;
          </CtaLink>
        </div>
      </div>

      <div className="w-full py-8">
        <hr className="border-dashed border-neutral-200" />
      </div>

      <div className="grid w-full gap-5 md:grid-cols-2">
        <div className="rounded-[6px] border border-neutral-0 p-8">
          <div className="flex h-16 w-16 items-center overflow-hidden rounded bg-neutral-0 pl-2 text-xl">
            <span className="pointer-events-none select-none bg-gradient-to-r from-neutral-300 to-neutral-0 bg-clip-text text-transparent">
              #8030
            </span>
          </div>
          <h4 className="mt-7 text-2xl">Looking to make an inscription?</h4>
          <p className="mt-4">
            Visit {" "}
            <a
              href="https://sator.luvnft.com/"
              target="_blank"
              className="text-neutral-300"
            >
              LUV NFT Sator
            </a>{" "}
            and {" "}
            <a
              href="https://bitcoin.luvnft.com"
              target="_blank"
              className="text-neutral-300"
            >
              LUV NFT Bitcoin marketplace
            </a>
          </p>
        </div>
        <div className="rounded-[6px] border border-neutral-0 p-8">
          <div className="pointer-events-none flex h-16 w-16 items-center justify-center rounded bg-neutral-0">
            <img src="/b-illustration.svg" alt="Bitcoin Icon" />
          </div>
          <h4 className="mt-7 text-2xl">BTCSATS Web5 social media platform</h4>
          <p className="mt-4">
            LUV NFT BTCSATS is a twitter-like platform where everyone in the world 
            unites to talk about Bitcoin, Sats and Ordinal Inscriptions digital assets.{" "}
            <a
              href="https://btcsats.luvnft.com"
              target="_blank"
              className="text-neutral-300"
            >
            Join us.
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
