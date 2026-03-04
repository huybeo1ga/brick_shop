"use client";

import { useState } from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div>

      {/* ===== HERO ===== */}
      <section className="bg-[#0b1a3a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Contact us
          </h1>

          <div className="w-16 h-[2px] bg-white mx-auto mb-4" />

          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Please contact us directly via the showroom address or fill
            out all information in the form below, the customer care
            department will contact you in a moment.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* ===== LEFT ===== */}
          <div>
            <h2 className="text-lg font-semibold mb-6">
              Contact Info
            </h2>

            <ul className="space-y-4 text-sm text-gray-700">

              <li>
                <strong>Hotline:</strong> 0344953314
              </li>

              <li>
                <strong>Showroom 1:</strong> 129A / 297 Tran Cung Street,
                Bac Tu Liem District, Hanoi, Vietnam
              </li>

              <li>
                <strong>Showroom 2:</strong> Dong Song Hamlet,
                Dong Hop Commune, Quy Hop District,
                Nghe An Province, Vietnam
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>phuongha.hoanggia@gmail.com</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a className="p-2 border hover:bg-[#0b1a3a] hover:text-white transition">
                <Facebook size={16} />
              </a>
              <a className="p-2 border hover:bg-[#0b1a3a] hover:text-white transition">
                <Instagram size={16} />
              </a>
            </div>

            {/* MAP */}
            <div className="mt-8 h-64">
              <iframe
                src="https://www.google.com/maps?q=Nghe+An+Vietnam&output=embed"
                className="w-full h-full border"
                loading="lazy"
              />
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div>
            <h2 className="text-lg font-semibold mb-6">
              Leave a message for me
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Please fill in all information, we will contact you immediately
              after receiving the information.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#0b1a3a]"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#0b1a3a]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#0b1a3a]"
                required
              />

              <textarea
                name="message"
                placeholder="Information for support..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#0b1a3a]"
                required
              />

              <button
                type="submit"
                className="bg-[#0b1a3a] text-white px-6 py-3 hover:bg-[#142a5f] transition"
              >
                SEND
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}