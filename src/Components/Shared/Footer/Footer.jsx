import React from "react";
import { FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4">
          <div className="text-white mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Subscribe Our Newsletter
            </h1>
            <p>
              Enter your details to get business inspiration, trending <br />
              solutions, and consulting tips delivered to your inbox
            </p>
          </div>
          <div className="form-control border md:ml-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Email here"
                className="input input-bordered"
              />
              <button className="btn btn-primary">
                <p>Subscribe</p>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <footer className="footer md:p-10 text-white grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="https://i.ibb.co/q0MDRzp/Logo.png" alt="" />
            <h1 className="mt-4">
              Business consultants provide management consulting to help
              businesses and organizations improve performance.
            </h1>
            <div className="mt-6 flex gap-5">
              <div className="border rounded-full p-2">
                <FaTwitter />
              </div>
              <div className="border rounded-full p-2">
                <FaLinkedin />
              </div>
              <div className="border rounded-full p-2">
                <FaPinterest />
              </div>
            </div>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">FAQ's</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Latest Posts</a>
          </div>
          <div>
            <span className="footer-title">Our Services</span>
            <a className="link link-hover">Business Planning</a>
            <a className="link link-hover">Tax Strategy</a>
            <a className="link link-hover">Financial Advices</a>
            <a className="link link-hover">Insurance Strategy</a>
            <a className="link link-hover">Manage Investments</a>
          </div>
          <div>
            <span className="footer-title">Contact Info.</span>
            <p>(303) 555-0105</p>
            <p>(303) 555-0105</p>
            <p>sara.cruz@example.com</p>
            <p>3517 W. Gray St. Utica,</p>
            <p>Pennsylvania 57867</p>
          </div>
        </footer>
        <footer
          className="p-3 md:p-5 border-t bg-zinc-900 border-base-300 text-white"
        //   style={{ backgroundColor: "#7A7A7A" }}
        >
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              © 2022 CreativePeoples. All Rights Reserved
            </div>
            <div className="grid gap-4 md:grid-flow-col">
              <p className="underline">Privacy Policy</p>
              <p className="underline">Cookie Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
