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
    <div className="w-full bg-white min-h-screen px-4 sm:px-8 py-8 sm:py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium mb-6 text-[#2C2C2C] leading-tight">
          Your small dog isn't slowing down because they're getting old. They're slowing down because it hurts.
        </h1>

        <p className="text-xs sm:text-sm text-[#888888] mb-6 leading-relaxed">
          Small dogs absorb up to 6x their body weight every time they jump off a couch. They live longer. And they hide pain until the damage is done.
        </p>

        <p className="text-base sm:text-lg font-bold mb-6 text-[#D4827A] leading-snug">
          We've formulated something special for your small dog. Join the waitlist and get 20% off when we launch.
        </p>


        {submitted ? (
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Thank you for joining the waitlist!
          </p>
        ) : (
          <>
            <form className="space-y-3 w-full" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 text-base bg-[#D4827A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isLoading ? "Joining..." : "Protect their joints"}
              </button>
              <p className="text-xs text-[#888888] leading-tight">
                Join the waitlist. Get 20% off when we launch.
              </p>
              {error && (
                <p className="text-center text-sm text-[#D4827A]">
                  {error}
                </p>
              )}
            </form>

            <div className="mt-3 flex flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F6d86fa4f01a44ca0883c51281c777216?format=webp&width=800&height=1200"
                alt="Chewpies Chewables"
                className="w-64 sm:w-80"
              />
              <p className="text-xs sm:text-sm text-[#666666] leading-snug mt-2">
                Scientifically formulated for small dogs under 10kg. <i>Finally.</i>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
