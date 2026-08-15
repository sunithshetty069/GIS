"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpecularButton from "@/components/effects/SpecularButton";

const SERVICE_OPTIONS = [
  "The Mark",
  "The Signal",
  "The Space",
  "The Frame",
  "The Voice",
  "The Stage",
  "The Noise",
  "The Presence",
  "One Desk",
];

const fieldClasses =
  "w-full bg-white border border-[#F1F3F1] rounded-xl px-5 py-3.5 text-sm sm:text-base text-black placeholder:text-[#5A635A]/60 focus:outline-none focus:border-[#4D6D47] transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-form" className="scroll-mt-28">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl px-8 py-14 text-center"
          >
            <p className="text-2xl sm:text-3xl tracking-tight text-black mb-3">
              Message sent.
            </p>
            <p className="text-[#5A635A] max-w-md mx-auto">
              Thank you for reaching out. Someone from Benchbox will get back to you
              shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={fieldClasses}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className={fieldClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={fieldClasses}
            />
            <input type="tel" name="phone" placeholder="Phone" className={fieldClasses} />

            <select
              name="service"
              defaultValue=""
              required
              className={`${fieldClasses} sm:col-span-2 text-[#5A635A]`}
            >
              <option value="" disabled>
                Service needed
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-black">
                  {option}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={5}
              required
              className={`${fieldClasses} sm:col-span-2 resize-none`}
            />

            <div className="sm:col-span-2">
              <SpecularButton
                type="submit"
                size="lg"
                baseColor="#1C2E1E"
                textColor="#ffffff"
                lineColor="#ffffff"
                intensity={0.9}
              >
                Send <span aria-hidden="true">→</span>
              </SpecularButton>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
