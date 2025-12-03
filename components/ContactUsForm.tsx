"use client";

import React from "react";
import { Send } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactUsForm() {
  const services = [
    "Social Media Marketing",
    "Website Development",
    "Video Production",
    "Branding Solution",
    "SEO",
    "Performance Marketing",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission here (e.g., send to API)
    alert("Form submitted successfully! (Check console for data)");
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/start_project.webp")' }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start a New Project
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to take your brand to the next level?{" "}
            <br className="hidden md:block" />
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs ml-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="brandomedia@gmail.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs ml-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 7548880026"
                {...register("phone")}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  errors.phone ? "border-red-500" : "border-white/10"
                } text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs ml-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-300 ml-1">
                I'm interested in...
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <label key={index} className="cursor-pointer group">
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                      className="hidden peer"
                    />
                    <span className="inline-block px-4 py-2 rounded-full text-sm border border-white/20 text-gray-300 bg-white/5 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/10 select-none">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-white/20"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
