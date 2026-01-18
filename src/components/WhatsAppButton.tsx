"use client";

import React, { useState } from "react";

type WhatsAppButtonProps = {
  /** Phone in international format WITHOUT + or spaces. Example: 4915731384994 */
  phone: string;
  /** Prefilled message to start the chat */
  message?: string;
  /** Where to place the floating button */
  position?: "bottom-right" | "bottom-left";
  /** Background style: 'light' (WhatsApp default), 'dark', 'gradient', 'funky' */
  bgStyle?: "light" | "dark" | "gradient" | "funky";
};

export default function WhatsAppButton({
  phone,
  message = "Hi! I'd like to book a physio session at Funky Physio.",
  position = "bottom-right",
  bgStyle = "light",
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState(message);

  const posClass =
    position === "bottom-left" ? "left-6 bottom-6" : "right-6 bottom-6";

  const handleSendMessage = () => {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(inputMessage)}`;
    window.open(href, "_blank");
    setIsOpen(false);
  };

  // Background styles based on selection
  const getBgStyle = () => {
    switch (bgStyle) {
      case "dark":
        return {
          backgroundColor: '#0a0a0a',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        };
      case "gradient":
        return {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        };
      case "funky":
        return {
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        };
      default: // light (WhatsApp default)
        return {
          backgroundColor: '#e5ddd5',
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        };
    }
  };

  const isDarkBg = bgStyle === "dark" || bgStyle === "gradient" || bgStyle === "funky";

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div
          className={`fixed ${posClass} mb-20 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden`}
        >
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#25D366]"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M19.11 17.46c-.27-.13-1.58-.78-1.83-.87-.25-.09-.43-.13-.62.13-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.62-1.46-.84-2.01-.22-.53-.45-.44-.62-.45-.16 0-.34 0-.52 0-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.25s.97 2.61 1.1 2.79c.13.18 1.9 2.89 4.6 4.05.64.28 1.15.45 1.54.57.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.06-.11-.25-.18-.52-.31z" />
                  <path d="M16 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.32.6 4.6 1.75 6.62L3.2 29.33l6.85-1.8A13.25 13.25 0 0 0 16 29.33c7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67zm0 24.1c-2.08 0-4.13-.56-5.93-1.63l-.42-.25-4.06 1.06 1.08-3.95-.27-.44A10.72 10.72 0 0 1 5.33 16C5.33 10.11 10.11 5.33 16 5.33S26.67 10.11 26.67 16 21.89 26.77 16 26.77z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Funky Physio</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body with Custom Background */}
          <div 
            className="relative p-4 min-h-[200px] overflow-hidden"
            style={getBgStyle()}
          >
            {/* WhatsApp-style pattern overlay (only for light mode) */}
            {bgStyle === "light" && (
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            )}
            
            {/* Messages */}
            <div className="relative z-10">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md mb-3 max-w-[85%]">
                <p className="text-sm text-gray-800 font-medium mb-1">
                  👋 Hi there! How can we help you today?
                </p>
                <p className="text-xs text-gray-600">
                  We typically reply within minutes
                </p>
                <span className="text-[10px] text-gray-500 mt-1 block text-right">
                  {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-[#f0f0f0] p-3">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent text-sm bg-white text-gray-800 placeholder-gray-500"
              rows={3}
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-[#25D366] text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
        title="Chat with us on WhatsApp"
        className={`fixed ${posClass} z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out`}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.46c-.27-.13-1.58-.78-1.83-.87-.25-.09-.43-.13-.62.13-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.62-1.46-.84-2.01-.22-.53-.45-.44-.62-.45-.16 0-.34 0-.52 0-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.25s.97 2.61 1.1 2.79c.13.18 1.9 2.89 4.6 4.05.64.28 1.15.45 1.54.57.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.06-.11-.25-.18-.52-.31z" />
          <path d="M16 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.32.6 4.6 1.75 6.62L3.2 29.33l6.85-1.8A13.25 13.25 0 0 0 16 29.33c7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67zm0 24.1c-2.08 0-4.13-.56-5.93-1.63l-.42-.25-4.06 1.06 1.08-3.95-.27-.44A10.72 10.72 0 0 1 5.33 16C5.33 10.11 10.11 5.33 16 5.33S26.67 10.11 26.67 16 21.89 26.77 16 26.77z" />
        </svg>
        <span className="text-sm font-semibold">Chat with us</span>
      </button>
    </>
  );
}
