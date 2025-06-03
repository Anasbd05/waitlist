import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png"
import {Instagram,Linkedin,Twitter} from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full bg-white pt-14 ">
            <footer className="footer w-full sm:flex sm:flex-row flex-col justify-center sm:justify-around  text-base-content mb-6 ">
                <div className="flex flex-col gap-2">
                    <Link href={"/"} className='flex gap-0.5 items-center'>
                        <Image src={logo} alt='Ads fast logo' width={45} height={45} />
                        <h1 className='font-bold font-noto-head text-xl'>AdsFast</h1>
                    </Link>
                    <p className="text-sm text-neutral-600 ">Generate high-converting ads in seconds</p>
                    <div className="flex  gap-4">
                        <Linkedin className="p-1.5 hover:bg-gray-200 rounded-md h-8 w-8" />
                        <Twitter className="p-1.5 hover:bg-gray-200 rounded-md h-8 w-8" />
                        <Instagram className="p-1.5 hover:bg-gray-200 rounded-md h-8 w-8" />
                    </div>
                    <p>Made by <Link href={"/"} className="text-primary">Anas_bd</Link> </p>

                </div>
                <nav className="flex flex-col">
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Links</h6>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Reviews</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <form>
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item text-white bg-indigo-600 hover:bg-indigo-400">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className="bg-black w-full h-[.5px]" />
            <p className="text-center sm:text-sm sm:p-4 p-8">Copyright &copy; 2024 - All right reserved by <span className="text-gradient">AdsFast</span></p>
        </div>
    );
};

export default Footer;
