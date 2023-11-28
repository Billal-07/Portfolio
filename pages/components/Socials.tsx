import Image from "next/image";
import React from "react";
import wa from "../../public/Images/Socials/whatsapp.png";
import git from "../../public/Images/Socials/github.png";
import insta from "../../public/Images/Socials/instagram.png";
import fb from "../../public/Images/Socials/facebook.png";
import linkdin from "../../public/Images/Socials/linkedin.png";
import twitter from "../../public/Images/Socials/twitter.png";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-center gap-10 space-y-10 items-center ">
<h1 className="hidden"></h1>

<button>
<Link target="_blank" href="https://github.com/Billal-07">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={git} alt="Git logo" />
        </div>
        <p className="flex justify-center ">GITHUB</p>
      </div>
</Link>
</button>

<button>
  <Link target="_blank" href="https://www.linkedin.com/in/bilal-hashmi-625056268">
      <div className="space-y-4 hover:shadow-lg  rounded-3xl">
        <div className="flex justify-center">
          <Image src={linkdin} alt="Linkdin logo" />
        </div>
        <p className="flex justify-center">LINKDIN</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://twitter.com/BiLL_07_hashmi">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={twitter} alt="Twitter logo" />
        </div>
        <p className="flex justify-center">TWITTER</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://www.facebook.com/Billhashmi9">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={fb} alt="Fb logo" />
        </div>
        <p className="flex justify-center">FACEBOOK</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://instagram.com/billal_hashmi_09?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"> 
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={insta} alt="Insta logo" />
        </div>
        <p className="flex justify-center">INSTAGRAM</p>
      </div>
  </Link>
</button>

<button>
  <Link target="_blank" href="https://wa.me/+923238225665">
      <div className="space-y-4 hover:shadow-lg rounded-3xl">
        <div className="flex justify-center">
          <Image src={wa} alt="whatsaap logo" />
        </div>
        <p className="flex justify-center">WHATSAPP</p>
      </div>
  </Link>
</button>

    </div>
  );
};

export default Socials;
