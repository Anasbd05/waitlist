import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png"

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
                    <p className="mt-4">Made by <Link href={"/https://x.com/Anas_bd01"} className="tag">Anas_bd</Link> </p>

                </div>
                <nav className="flex flex-col">
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Links</h6>
                    <Link href={"/login"} className="link link-hover">Login</Link>
                    <Link href={"/support"} className="link link-hover">Support</Link>
                    <Link href={"#features"} className="link link-hover">Features</Link>
                    <Link href={"#reviews"} className="link link-hover">Reviews</Link>
                    <Link href={"#pricing"} className="link link-hover">Pricing</Link>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Legal</h6>
                    <Link href={"/tos"} className="link link-hover">Terms of use</Link>
                    <Link href={"/privacy_policy"} className="link link-hover">Privacy policy</Link>
                </nav>
                <form>
                    <h6 className="font-semibold tracking-wide mb-4 text-lg text-neutral-900">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered border join-item" />
                            <button className="btn btn-primary join-item border-primary hover:opacity-85 text-white bg-primary">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className="bg-black w-full h-[.5px]" />
            <p className="text-center sm:text-sm sm:p-4 p-8">Copyright &copy; 2025 - All right reserved by <span className="tag">AdsFast</span></p>
        </div>
    );
};

export default Footer;
