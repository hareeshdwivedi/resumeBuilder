import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { RWebShare } from "react-web-share";

function Brands() {
  const router = useRouter();
  const facebookUrl = "https://www.facebook.com/";
  const telegram = "https://web.telegram.org/k/";
  const Copied = () => {
    alert("copied!");
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-y-6 justify-center items-center p-10 gap-x-10 px-8 max-w-[1400px] mx-auto">
        <div className="brand border-4 h-60 w-full hover:scale-100">
          <Image
            onClick={() => router.push("/template")}
            loading="lazy"
            src="/images/pixar.png"
            layout="fill"
            objectFit="cover"
            alt="resume template"
          />
        </div>

        <div className="brand border-4 h-60 w-full hover:scale-100">
          <Image
            onClick={() => router.push("/cv")}
            loading="lazy"
            src="/images/pixar.png"
            layout="fill"
            objectFit="cover"
            alt="cv"

          />
        </div>
      </section>
    </>
  );
}

export default Brands;

{
  /* <ul className="z-10 menu bottomRight h-10 w-full left-12 bottom-0 group-hover:left-0 ease duration-300">
<li className="share top absolute right-3 bottom-0">
  <i style={{ color: "black" }} className="fa fa-share-alt"></i>
  <ul className="submenu">
    <li>
      <a href={facebookUrl} className="facebook h-6 w-6">
        <i className="fa-brands fa-facebook-f fa"></i>
      </a>
    </li>
    <li>
      <a href={telegram} className="telegram">
        <i className="fa-brands fa-telegram fa"></i>
      </a>
    </li>
    <li>
      <a href="#" className="googlePlus">
        <i onClick={Copied} className="fa-light fa-copy fa"></i>
      </a>
    </li>
  </ul>
</li>
</ul> */
}
