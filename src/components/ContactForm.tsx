import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 my-12">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#f5efe4] mb-1.5 ml-1">
            Your Name
          </label>
          <input
            className="w-full bg-white text-stone-900 border border-stone-200 rounded-md px-4 py-3"
            placeholder="Your name"
            name="name"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#f5efe4] mb-1.5 ml-1">
            Email
          </label>
          <input
            className="w-full bg-white text-stone-900 border border-stone-200 rounded-md px-4 py-3"
            placeholder="Your email"
            name="email"
            type="email"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#f5efe4] mb-1.5 ml-1">
            Phone Number
          </label>
          <input
            className="w-full bg-white text-stone-900 border border-stone-200 rounded-md px-4 py-3"
            placeholder="Your phone number"
            name="phone"
            type="tel"
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#f5efe4] mb-1.5 ml-1">
            Your Idea
          </label>
          <textarea
            className="w-full bg-white text-stone-900 border border-stone-200 rounded-md px-4 py-3"
            placeholder="Tell us about your idea"
            name="message"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#C8622A] text-white py-3 rounded-md font-medium tracking-wide hover:bg-[#E8905A] transition-colors cursor-pointer"
        >
          Submit Idea
        </button>

        {result && (
          <p className={`text-center text-sm ${result === "Success!" ? "text-green-400" : "text-red-400"}`}>
            {result === "Success!" ? "Message sent successfully!" : "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}