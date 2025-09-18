"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace this with API call or email service
  };

  return (
    <section className="py-[70px] pt-[200px] px-[15px]  md:px-[30px] space-y-[70px] md:space-y-[100px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[60px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Be among the First 50,000 people to Try Vulcan
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          We’re putting the final touches on the platform. Join the waitlist
          today and get early access, product updates, and exclusive perks when
          we launch.
        </p>
      </div>
      <div className="max-w-xl mx-auto p-7 md:p-12 rounded-2xl shadow-lg bg-[#0F0F0F] text-white">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          Fill out the form below and our team will get back to you as soon as
          possible. Let’s create something amazing together!
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Name */}
          <div>
            <label className="block mb-3 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block mb-3 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Message */}
          <div>
            <label className="block mb-3 text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Say something"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-t from-[#F50000] to-[#FF9452] hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
