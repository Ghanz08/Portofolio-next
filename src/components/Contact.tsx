"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });

    // Initialize map when component mounts
    const initMap = async () => {
      const L = await import("leaflet");

      // Fix for default markers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      // Initialize map
      const map = L.map("map").setView(
        [-7.801122762699335, 110.36600287622167],
        12
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const marker = L.marker([-7.801122762699335, 110.36600287622167]).addTo(
        map
      );
      marker.bindPopup("<b>I'm here</b><br>I live in Yogyakarta.").openPopup();
    };

    // Add a small delay to ensure the DOM element exists
    setTimeout(initMap, 100);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration dari environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "ghanizulhusnibahri@gmail.com", // Email Anda
        user_name: formData.name, // Alternative parameter name
        user_email: formData.email, // Alternative parameter name
        reply_to: formData.email, // For reply functionality
        time: new Date().toLocaleString("id-ID", {
          timeZone: "Asia/Jakarta",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        date: new Date().toLocaleDateString("id-ID", {
          timeZone: "Asia/Jakarta",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        timestamp: new Date().toISOString(),
      };

      // Debug: Log data yang dikirim
      console.log("Sending email with data:", templateParams);

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
    // Reset status after toast closes
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 300);
  };

  const testErrorToast = () => {
    setSubmitStatus("error");
    setShowToast(true);
  };

  return (
    <div id="contact-me" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-white text-4xl font-bold mb-12 font-['Poppins'] contact-mobile-center">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="text-white">
            <div
              className="bg-gradient-to-br bg-[#b69b43] to-[#2a2a2a] p-8 rounded-2xl shadow-[0px_0px_30px_15px_#b69b4350] h-[500px] flex flex-col "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-[#ffffff]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#ffffff] border border-gray-600 rounded-lg focus:outline-none focus:border-[#b69b43] text-[#b69b43] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-[#ffffff]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#ffffff] border border-gray-600 rounded-lg focus:outline-none focus:border-[#b69b43] text-[#b69b43] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-[#ffffff]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#ffffff] border border-gray-600 rounded-lg focus:outline-none focus:border-[#b69b43] text-[#b69b43] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Status Messages - Removed inline messages, using toast instead */}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 transform hover:-translate-y-1 font-['Poppins'] mt-auto ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#b69b43] hover:bg-[#a08539] text-white"
                  }`}
                >
                  {isLoading ? "⏳ Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="text-white">
            <div
              className="h-[500px] rounded-2xl overflow-hidden shadow-[0px_0px_30px_15px_#b69b4350]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div id="map" className="w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        type={submitStatus === "success" ? "success" : "error"}
        message={
          submitStatus === "success"
            ? "Pesan berhasil dikirim! Terima kasih."
            : "Gagal mengirim pesan. Silakan coba lagi."
        }
        isVisible={showToast && submitStatus !== "idle"}
        onClose={handleCloseToast}
        duration={5000}
      />
    </div>
  );
}
