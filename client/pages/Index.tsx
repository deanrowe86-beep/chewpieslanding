import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("g", "RxxGbg");
      params.append("email", email);

      await fetch(
        "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center px-6 sm:px-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium mb-6 text-[#2C2C2C] leading-tight">
          Why jumping off your couch may be quietly destroying your small dog's joints years before you ever notice the signs.
        </h1>

        <p className="text-lg sm:text-xl text-[#666666] mb-12 leading-relaxed">
          Join the waitlist and get 20% off when we launch.
        </p>

        {submitted ? (
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Thank you for joining the waitlist!
          </p>
        ) : (
          <>
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-[#D4827A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isLoading ? "Joining..." : "Join the Waitlist"}
              </button>
              {error && (
                <p className="text-center text-sm text-[#D4827A]">
                  {error}
                </p>
              )}
            </form>
            <div className="mt-12 flex flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F5b1334fe1e2a45ccaa000efda6ccf7ab?format=webp&width=800&height=1200"
                alt="Chewpies Chewables"
                className="w-full max-w-xs mb-6"
              />
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Formulated specifically for small dogs under 10kg.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
