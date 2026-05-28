export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-12 bg-white">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            Why jumping off your couch may be quietly damaging your small dog's joints years before you notice.
          </h1>

          {/* Hero Dogs Image */}
          <div className="mb-16 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2Faa1116df7e944d43bd271198b3603488?format=webp&width=800&height=1200"
              alt="Five small dog breeds"
              className="w-full max-h-screen h-auto object-contain"
              style={{ maxHeight: "450px" }}
            />
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#666666] leading-relaxed mb-12">
            <p>Most small dog owners only discover hidden joint stress after visible limping has already begun.
            <br />
            By then, the damage is further along than anyone realised.</p>
            <p>She still follows you from room to room. A loyal little shadow whose entire world is keeping up with your footsteps.
            <br />
            But lately you have noticed the briefest pause at the foot of the bed. A quiet hesitation before the stairs. A soft whimper when she looks up at the sofa.</p>
            <p>You tell yourself she is just getting older.
            <br />
            But deep down, you know something is not right. She depends on you for everything. And she cannot tell you when she is hurting.</p>
          </div>
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-[#A8B89C] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            Reserve My Jar Now
          </button>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Educational Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            The Silent Impact.
            <br />
            Why Your Couch May Be Your Small Dog's Biggest Daily Threat.
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              To a small dog under ten kilograms, jumping off a standard sofa is the biomechanical equivalent of a human leaping from a first-storey roof.
              <br />
              Multiple times. Every single day.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Toy breeds also carry an instinct to mask pain long before any visible sign appears. By the time limping, stiffness, or reluctance to jump becomes obvious, the damage to tiny joints is often already advanced.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              And most joint supplements make it worse. Products built for forty pound dogs, relabelled for small breeds, overwhelm sensitive digestion with oversized dosages and harsh fillers.
              <br />
              The dog refuses to eat them. Or gets sick. The owner gives up. And the joint stress continues unaddressed for months or years longer.
            </p>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Founder's Note Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            A note from our founders.
            <br />
            Dog dad Dean and Chewpie the Chihuahua.
          </h2>
          <div className="space-y-12">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                I have a seven-pound Chihuahua named Chewpie.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                She follows me from room to room. She has claimed the left side of the couch as permanently hers.
                <br />
                Her entire world is built around keeping up with me.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                One morning she stood at the foot of the bed and paused. Just for a second.
                <br />
                A hesitation so small most people would miss it.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                I did not miss it.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                I started researching. What I found disturbed me. The daily impact forces on her tiny joints from nothing more than jumping off the couch.
                <br />
                The way small dogs are wired to mask discomfort long before any visible sign appears. The fact that every supplement on the market was built around a forty pound dog and simply relabelled for small breeds.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                She gives me everything. The least I could do was give her something built specifically for her.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                So we built Chewpies. Preventative daily care, precision-dosed for small dogs, before things get serious.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Our mission is simple. Give back to the small dogs who give us everything.
              </p>
              <div className="pt-4 border-t border-[#E8C4B8]">
                <p className="text-sm sm:text-base font-medium text-[#2C2C2C] pt-4">
                  Dean Rowe
                </p>
                <p className="text-sm text-[#666666]">
                  Co-founder. Chewpies Chewables.
                </p>
                <p className="text-sm text-[#666666]">
                  Dog dad to Chewpie. The original Chewpie.
                </p>
              </div>
            </div>

            {/* Photos Section */}
            <div className="pt-8 flex justify-center gap-6">
              <div className="space-y-3">
                <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2Fc828c90c535e4b79a0c894b9a5cad79e?format=webp&width=800&height=1200"
                  alt="Dean and Chewpie in the sun"
                  className="w-80 h-auto bg-white"
                  style={{ maxWidth: "300px" }}
                />
              </div>
                <p className="font-sans text-sm text-[#A8B89C] text-center italic">
                  Chewpie getting her morning sun
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F3ccd499b69b24a6abd03f9f724da7239?format=webp&width=800&height=1200"
                  alt="Dean on the bike with Chewpie"
                  className="w-80 h-auto bg-white"
                  style={{ maxWidth: "300px" }}
                />
              </div>
                <p className="font-sans text-sm text-[#A8B89C] text-center italic">
                  Chewpie on a day out on the Brisbane River
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Social Proof Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-6 text-[#2C2C2C]">
            What small dog owners are saying.
          </h2>
          <p className="text-sm text-[#A8B89C] italic mb-12">
            Based on independent product testing conducted with small dog owners in our local community prior to launch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-[#A8B89C]"
                  ></div>
                ))}
              </div>
              <p className="text-base sm:text-lg font-serif-garamond text-[#666666] leading-relaxed italic">
                "I spent $50 on chews from another brand and my Chihuahua wouldn't even touch them. With Chewpies she actually runs to get her chew. Within three weeks she was jumping on the couch again."
              </p>
              <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">
                Sarah M.
              </p>
              <p className="text-xs sm:text-sm text-[#666666]">
                Chihuahua owner
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-[#A8B89C]"
                  ></div>
                ))}
              </div>
              <p className="text-base sm:text-lg font-serif-garamond text-[#666666] leading-relaxed italic">
                "My Dachshund started showing back stiffness at age four. Chewpies is the first supplement he eats willingly and his morning stiffness has visibly improved."
              </p>
              <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">
                James T.
              </p>
              <p className="text-xs sm:text-sm text-[#666666]">
                Miniature Dachshund owner
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-[#A8B89C]"
                  ></div>
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
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Product Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            Introducing Chewpies Chewables.
            <br />
            Built exclusively for Chihuahuas, Yorkies, Pomeranians, Dachshunds, French Bulldogs, Shih Tzus, and toy breeds under 10kg.
          </h2>

          {/* Product Introduction Copy */}
          <div className="mb-16 space-y-6">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Not a large dog formula cut into smaller pieces. Built from the ground up for small dogs.
              <br />
              The ones whose joints are quietly working harder than any owner realises.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If your dog has refused every supplement you have tried, it is almost certainly the smell. Chewpies uses a natural savoury flavour with zero marine shellfish odour.
              <br />
              Dogs treat it like a reward. Not a supplement.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If supplements have upset your dog's stomach before, it is because tiny digestive systems were never designed for large breed dosages.
              <br />
              Every Chewpies chew is precision-dosed for dogs under 10kg. No harsh fillers. No digestive overload.
            </p>
          </div>

          {/* Product Image */}
          <div className="my-16 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70e54e2e4db4a77ba2ec462c6022187%2F1c52e8f2303046989e22c3f2b3a04072?format=webp&width=800&height=1200"
              alt="Chewpies Chewables jar"
              className="h-auto object-contain"
              style={{ maxWidth: "490px" }}
            />
          </div>

          {/* Ingredient Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <span className="text-[#A8B89C] text-sm font-medium">1</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  Glucosamine
                </p>
                <p className="text-sm text-[#666666]">360mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <span className="text-[#A8B89C] text-sm font-medium">2</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  MSM
                </p>
                <p className="text-sm text-[#666666]">300mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <span className="text-[#A8B89C] text-sm font-medium">3</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  Chondroitin
                </p>
                <p className="text-sm text-[#666666]">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <span className="text-[#A8B89C] text-sm font-medium">4</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  Turmeric
                </p>
                <p className="text-sm text-[#666666]">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <span className="text-[#A8B89C] text-sm font-medium">5</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  Green Lipped Mussels
                </p>
                <p className="text-sm text-[#666666]">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <span className="text-[#A8B89C] text-sm font-medium">6</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-serif-garamond font-medium text-[#2C2C2C]">
                  Type II Collagen
                </p>
                <p className="text-sm text-[#666666]">60mg</p>
              </div>
            </div>
          </div>

          {/* Manufacturing Note */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Manufactured in GMP, ISO, HACCP, and FDA certified facilities. Formulated for dogs under 10kg. Not adapted. Not approximated. Built specifically for them.
            </p>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Trust Badges Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C]">
            Built for small dogs. Finally.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Formulated exclusively for dogs under 10kg.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Not a generic formula with a small breed label.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">GMP, ISO, HACCP, and FDA certified.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Manufacturing standards you can trust.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Soft chew format.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Small enough for tiny mouths and toy breed jaw sizes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Zero strong fish odour.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Picky eater approved.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Precision-dosed for delicate digestion.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Built for small breed digestive systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-white">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">24-month shelf life.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Stock up on your pup's favorite chew.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Guarantee Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-8 text-[#2C2C2C]">
            The Empty Jar, Happy Dog 90-Day Double Guarantee.
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              We are so confident your small dog will love Chewpies that we back every single jar with the most generous guarantee in the category.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If your dog turns their nose up at the very first chew, we refund you immediately. No waiting ninety days.
              <br />
              No needing to prove you used the product consistently. No return shipping required.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If at any point in the first ninety days your dog's sensitive stomach reacts, or if you simply do not see the improvement in mobility and comfort you were hoping for, send us the empty jar and we will refund 100% of your purchase price.
              <br />
              Plus we will credit an additional $10 to your account for your trouble.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-lg bg-[#A8B89C] text-white font-medium hover:opacity-90 transition-opacity">
              Zero risk. Zero friction.
            </button>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Final Opt-in Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-6">
              Chewpies is currently in pre-launch. We are accepting a limited number of founding customers for our first production batch.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Reserve your jar now and lock in your founding customer price before we open to the general public.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C]">
            Reserve My First Jar of Chewpies.
          </h2>

          <form className="space-y-6 mb-8">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-white text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#A8B89C] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Reserve My Jar Now
            </button>
          </form>

          <p className="text-center text-xs sm:text-sm text-[#666666]">
            No payment required today. We will contact you directly when your order is ready to ship with your exclusive founding customer pricing.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Your small dog was never built for a human-sized world. You noticed the signs.
            <br />
            Now you can do something about it.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Reserve your jar. Give your tiny dog the protection they have always deserved.
          </p>
          <p className="text-lg sm:text-xl font-serif font-normal text-[#2C2C2C] pt-4">
            Built for small dogs. Finally.
          </p>
        </div>
      </section>
    </div>
  );
}
