import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary flex justify-around px-16 py-16 text-gray-white">
      <div className="flex flex-col">
        <h2 className="text-secondary font-extrabold text-[32px] leading-[46px] mb-8">
          LENS<span className="font-normal">LOVE</span>
        </h2>
        <Link to="/about" className="mb-2">
          About us
        </Link>
        <Link to="contact" className="mb-8">
          Contact
        </Link>
        <div className="flex gap-x-4 mb-8">
          <span>
            <img src="/Instagram.png" alt="" />
          </span>
          <span>
            <img src="/Instagram.png" alt="" />
          </span>
          <span>
            <img src="/Instagram.png" alt="" />
          </span>
          <span>
            <img src="/Instagram.png" alt="" />
          </span>
        </div>
        <p className="text-[14px] leading-[24px]">
          LensLove 2022.We love glasses!
        </p>
      </div>
      <div className="flex gap-x-10">
        <div>
          <h3 className="font-medium text-xl mb-6">Info</h3>
          <div className="flex flex-col gap-y-2">
            <p>Delivery</p>
            <p>Warrantly</p>
            <p>Support</p>
            <p>Sitemap</p>
            <p>Privacy Policy</p>
            <p>Terms&Conditions</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-xl mb-6">Helps</h3>
          <div className="flex flex-col gap-y-2">
            <p>Email: hi@lenslove.com</p>
            <p>Client Support:</p>
            <p>support@lenslove.com</p>
            <p>0371 525 777</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-xl mb-6">Shops</h3>
          <div className="flex flex-col gap-y-2">
            <p>Berlin</p>
            <p>Frankfurt</p>
            <p>Hamburg</p>
            <p>Stuttgart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
