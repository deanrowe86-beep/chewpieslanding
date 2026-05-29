export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* SECTION 1 & 2: HEADLINE + DOGS IMAGE + SUBHEADLINE */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            Why jumping off your couch may be quietly destroying your small dog's joints years before you ever notice the signs.
          </h1>

          {/* Hero Dogs Image */}
          <div className="mb-12 flex justify-center bg-transparent">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F74b79f55b7d5429795192604d6764eed?format=webp&width=800&height=1200"
              alt="Small dog breeds"
              className="w-full max-h-screen h-auto object-contain bg-transparent"
              style={{ maxHeight: "450px" }}
            />
          </div>

          <p className="text-lg sm:text-xl text-[#666666] mb-12 leading-relaxed">
            Most small dog owners only discover hidden joint damage after visible limping has already begun. By then, the wear is further along than anyone realised.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 3: OPENING PARAGRAPH */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            She still follows you from room to room. A loyal little shadow whose entire world is built around keeping up with your footsteps.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            But lately you have noticed something. The briefest pause at the foot of the bed. A quiet hesitation before the stairs. The way she stands at the edge of the sofa, looks up at you, and waits.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            You tell yourself she is just getting older.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            But deep down, you know. She depends on you for everything. And she cannot tell you when she is hurting.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 4: BELIEF INTERRUPTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Most owners assume the hesitation at the stairs is just age. It is not.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Age is the timeline. Daily impact is the cause.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            To a five-pound Chihuahua, jumping off a standard sofa is the physical equivalent of a human leaping from a first-storey roof. Multiple times. Every single day. And toy breeds are wired by instinct to mask that discomfort long before any visible sign appears.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            By the time limping shows up, the damage is often already advanced. The hesitation you are noticing right now is not your dog slowing down. It is your dog asking for help in the only language she has.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 5: FIRST CALL TO ACTION BUTTON */}
      <section className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <button className="px-8 sm:px-12 py-4 bg-[#A8B89C] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            Reserve My First Jar of Chewpies
          </button>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 9: PRODUCT DESCRIPTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            Introducing Chewpies Chewables.
          </h2>

          <div className="my-12 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F1c52e8f2303046989e22c3f2b3a04072?format=webp&width=800&height=1200"
              alt="Chewpies Chewables jar"
              className="h-auto object-contain"
              style={{ maxWidth: "490px" }}
            />
          </div>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8">
            Chewpies Chewables is a hip and joint soft chew formulated exclusively for dogs under 10kg. Not a large dog formula cut into smaller pieces. Not a generic supplement with a small breed label on the front. Precision-dosed from the ground up for the physical reality of tiny dogs navigating a human-sized world.
          </p>

          <p className="text-lg sm:text-xl font-serif font-medium text-[#2C2C2C]">
            Formulated for small dogs. By a small dog.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 6: FOUNDER NOTE */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            A note from our founders.
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              I have a seven-pound Chihuahua named Chewpie.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              One morning she stood at the foot of the bed and paused. Just for a second. A hesitation so small most people would have walked straight past it.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              I did not walk past it.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              What I found when I started researching disturbed me. The daily impact on her tiny joints from nothing more than living in my home. The way every supplement on the market was built for a forty-pound dog and simply relabelled for small breeds.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              She gives me everything. The least I could do was give her something built specifically for her.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If you are reading this, you are the kind of owner who noticed the signs before anyone else did. That is exactly who Chewpies was built for.
            </p>

            <div className="pt-6 border-t border-[#E8C4B8]">
              <p className="text-sm sm:text-base font-medium text-[#2C2C2C] pt-4">
                Dean Rowe. Co-founder. Chewpies Chewables.
              </p>
              <p className="text-sm text-[#666666]">
                Dog dad to Chewpie. The original co-founder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 8: SOCIAL PROOF */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            What small dog owners are saying.
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Michelle had stopped expecting her Pomeranian to jump up beside her on the couch. She had quietly accepted it as the new normal. Until the morning everything changed.
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#A8B89C]"></div>
              ))}
            </div>

            <p className="text-base sm:text-lg font-serif-garamond text-[#666666] leading-relaxed italic">
              "I feel like I have my young dog back. She is doing zoomies around the backyard. I cried the first time she jumped up next to me on the couch because I had forgotten what that felt like."
            </p>

            <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">
              Michelle R.
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">
              Pomeranian owner
            </p>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 10: GUARANTEE */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-8 text-[#2C2C2C]">
            The Empty Jar, Happy Dog Guarantee.
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            If your dog turns their nose up at the very first chew, we refund you immediately. Not after 90 days. Immediately. No return shipping. No questions asked. Zero risk. Zero friction.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 11: PRE-CTA DESCENT */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Every day that passes without the right support is a day of cumulative wear your dog cannot get back.
          </p>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            The hesitation at the stairs does not disappear on its own.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 12: FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-12">
            You noticed the signs when most owners would have looked away. Now do something about it.
          </p>

          <form className="space-y-6 mb-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#A8B89C] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Reserve My First Jar of Chewpies
            </button>
          </form>

          <p className="text-center text-xs sm:text-sm text-[#666666]">
            No payment required today. We will contact you directly when your order is ready to ship with your exclusive founding customer pricing.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* SECTION 13: CLOSING TAGLINE */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl font-serif font-medium text-[#2C2C2C]">
            Formulated for small dogs. By a small dog.
          </p>
        </div>
      </section>
    </div>
  );
}
