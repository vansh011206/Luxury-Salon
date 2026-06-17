"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Train,
  Car,
  Instagram,
  Facebook,
  Youtube,
  Pin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccess(true);
    }
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Connect with our GK1 Boutique"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS (5 Cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 block font-semibold">
                  Visit Us
                </span>
                <h2 className="text-charcoal font-playfair text-3xl md:text-4xl font-medium tracking-wide">
                  Our Boutique Sanctuary
                </h2>
                <div className="w-12 h-[1px] bg-sage/30 mt-4" />
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-charcoal font-playfair text-base font-semibold mb-1">Address</h4>
                    <p className="text-cream font-outfit text-sm leading-relaxed font-light">
                      Glossy Salon, 2nd Floor, M-Block Market, Greater Kailash Part 1, New Delhi — 110048
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-charcoal font-playfair text-base font-semibold mb-1">Call & WhatsApp</h4>
                    <p className="text-cream font-outfit text-sm font-light flex flex-col gap-1.5">
                      <a href="tel:+91-882675336" className="hover:text-sage transition-colors">
                        Phone: +91-882675336
                      </a>
                      <a href="https://wa.me/91882675336" className="hover:text-sage transition-colors flex items-center gap-1.5 text-emerald-600 font-medium">
                        <MessageCircle className="w-4 h-4 fill-emerald-600 stroke-none" />
                        WhatsApp: +91-882675336
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-charcoal font-playfair text-base font-semibold mb-1">Email</h4>
                    <a href="mailto:hello@glossysalon.in" className="text-cream hover:text-sage transition-colors font-outfit text-sm font-light">
                      hello@glossysalon.in
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-charcoal font-playfair text-base font-semibold mb-1">Working Hours</h4>
                    <p className="text-cream font-outfit text-sm font-light">
                      Tuesday — Sunday: 10:00 AM — 8:00 PM <br />
                      <span className="text-sage font-medium">Monday: Closed</span>
                    </p>
                  </div>
                </div>

                {/* Metro & Parking */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-sage/10 pt-6">
                  <div className="flex gap-3 items-start">
                    <Train className="w-4.5 h-4.5 text-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-charcoal text-xs font-semibold uppercase tracking-wider mb-1">Metro Access</h5>
                      <p className="text-cream font-outfit text-[11px] leading-relaxed font-light">
                        Greater Kailash Metro Station (Magenta Line) — 5 min walk.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Car className="w-4.5 h-4.5 text-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-charcoal text-xs font-semibold uppercase tracking-wider mb-1">Valet Parking</h5>
                      <p className="text-cream font-outfit text-[11px] leading-relaxed font-light">
                        Complimentary valet parking available at M-Block Market entrance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Interior Image */}
              <div className="relative w-full h-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-sm border border-sage/10">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                  alt="Glossy Salon Greater Kailash Boutique Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>

              {/* Socials */}
              <div className="border-t border-sage/10 pt-6">
                <span className="text-cream text-[10px] tracking-widest font-outfit block mb-4 uppercase">Follow Us</span>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-sage transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-sage transition-colors duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-sage transition-colors duration-300">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-sage transition-colors duration-300">
                    <Pin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MAP & FORM (7 Cols) */}
            <div className="lg:col-span-7 space-y-12">
                     {/* Google Maps Iframe with soft filter */}
              <div className="relative w-full h-[280px] bg-secondary border border-sage/10 overflow-hidden rounded-2xl shadow-sm">
                <iframe
                  title="Glossy Salon Greater Kailash Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606233519965!2d77.23769167625841!3d28.551578387799587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4b5742e97%3A0xd6891ebcd84638a1!2sM%20Block%20Market!5e0!3m2!1sen!2sin!4v1718610000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 contrast-[1.05]"
                />
              </div>

              {/* Contact Form */}
              <div className="bg-secondary border border-sage/10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm">
                {!success ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-charcoal font-playfair text-xl font-medium mb-4">Send a Message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="text-cream text-xs font-outfit uppercase tracking-wider block mb-2 font-medium">Name</label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full bg-primary border ${errors.name ? "border-red-500" : "border-sage/20 focus:border-sage"} px-4 py-3 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="text-cream text-xs font-outfit uppercase tracking-wider block mb-2 font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full bg-primary border ${errors.email ? "border-red-500" : "border-sage/20 focus:border-sage"} px-4 py-3 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="text-cream text-xs font-outfit uppercase tracking-wider block mb-2 font-medium">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-primary border border-sage/20 focus:border-sage px-4 py-3 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="text-cream text-xs font-outfit uppercase tracking-wider block mb-2 font-medium">Subject</label>
                        <select
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-primary border border-sage/20 focus:border-sage px-4 py-3 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Career">Career / Hiring</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="text-cream text-xs font-outfit uppercase tracking-wider block mb-2 font-medium">Message</label>
                        <textarea
                          id="message"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className={`w-full bg-primary border ${errors.message ? "border-red-500" : "border-sage/20 focus:border-sage"} px-4 py-3 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-2xl resize-none`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.message}</p>}
                      </div>
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-4 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8 flex flex-col items-center animate-fade-in">
                    <div className="w-16 h-16 bg-sage/10 border border-sage/40 rounded-full flex items-center justify-center text-sage mb-6">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-charcoal font-playfair text-xl font-semibold mb-2">Message Dispatched!</h3>
                    <p className="text-cream font-outfit text-xs max-w-sm mb-6 leading-relaxed font-light">
                      Thank you for contacting us. Our guest relations director will evaluate your message and respond within 24 hours.
                    </p>
                    <Button onClick={() => setSuccess(false)} variant="secondary">
                      Send Another Message
                    </Button>
                  </div>
                )}  </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
