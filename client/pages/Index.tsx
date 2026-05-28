export default function Index() {
  return (
    <div className="w-full bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-12 bg-[#FAFAF8]">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium mb-8 text-[#2C2C2C] leading-tight">
            Why jumping off your couch may be quietly damaging your small dog's joints years before you notice.
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] mb-12 leading-relaxed">
            Most small dog owners only discover hidden joint stress after visible limping has already begun. By then, the damage is further along than anyone realised.
          </p>
          <div className="space-y-6 text-base sm:text-lg text-[#666666] leading-relaxed mb-12 max-w-3xl">
            <p>She still follows you from room to room. A loyal little shadow whose entire world is keeping up with your footsteps. But lately you have noticed the briefest pause at the foot of the bed. A quiet hesitation before the stairs. A soft whimper when she looks up at the sofa.</p>
            <p>You tell yourself she is just getting older.</p>
            <p>But deep down, you know something is not right. She depends on you for everything. And she cannot tell you when she is hurting.</p>
          </div>
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-[#A8B89C] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            Reserve My Jar Now
          </button>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Educational Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            The silent impact. Why your couch may be your small dog's biggest daily threat.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                To a small dog under ten kilograms, jumping off a standard sofa is the biomechanical equivalent of a human leaping from a first-storey roof. Multiple times. Every single day.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Toy breeds also carry an instinct to mask pain long before any visible sign appears. By the time limping, stiffness, or reluctance to jump becomes obvious, the damage to tiny joints is often already advanced.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                And most joint supplements make it worse. Products built for forty pound dogs, relabelled for small breeds, overwhelm sensitive digestion with oversized dosages and harsh fillers. The dog refuses to eat them. Or gets sick. The owner gives up. And the joint stress continues unaddressed for months or years longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Founder's Note Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-12 text-[#2C2C2C] leading-tight">
            A note from our founders. Dog dad Dean and Chewpie the Chihuahua.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-serif-garamond text-[#666666] leading-relaxed italic">
                I am forty years old. Every morning I take fish oil and bone broth. Not because something is wrong. Because I know what happens when you wait until it is.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                I have a six-pound Chihuahua named Chewpie. One morning I noticed her hesitating at the foot of the bed. That tiny pause before a jump she used to make without thinking.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                I started researching. What I found disturbed me. The daily impact on her tiny joints. The way small dogs mask discomfort until damage is advanced. The fact that nothing on the market was actually built for a dog her size.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                She deserves the same standard of daily care I give myself.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                So we built it. Chewpies is not a rescue product. It is a daily ritual. Preventative care, precision-dosed for small dogs, before things get serious.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Our mission is simple. Build a brand that gives back. To the small dogs who give us everything.
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
            <div className="space-y-6">
              <div className="aspect-square rounded-lg border border-[#E8C4B8] bg-[#FAFAF8] flex items-center justify-center">
                <p className="text-[#999999] text-center text-sm">Photo 1<br/>Dean and Chewpie in the sun</p>
              </div>
              <div className="aspect-square rounded-lg border border-[#E8C4B8] bg-[#FAFAF8] flex items-center justify-center">
                <p className="text-[#999999] text-center text-sm">Photo 2<br/>Dean on the bike with Chewpie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Social Proof Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-12 text-[#2C2C2C]">
            What small dog owners are saying.
          </h2>
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
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-center mb-16 text-[#2C2C2C] leading-tight">
            Introducing Chewpies Chewables. Built exclusively for Chihuahuas, Yorkies, Pomeranians, Dachshunds, French Bulldogs, Shih Tzus, and toy breeds under 10kg.
          </h2>

          {/* Product Introduction Copy */}
          <div className="mb-16 max-w-3xl mx-auto space-y-6">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Not a large dog formula cut into smaller pieces. Built from the ground up for small dogs. The ones whose joints are quietly working harder than any owner realises.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If your dog has refused every supplement you have tried, it is almost certainly the smell. Chewpies uses a natural savoury flavour with zero marine shellfish odour. Dogs treat it like a reward. Not a supplement.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              If supplements have upset your dog's stomach before, it is because tiny digestive systems were never designed for large breed dosages. Every Chewpies chew is precision-dosed for dogs under 10kg. No harsh fillers. No digestive overload.
            </p>
          </div>

          {/* Product Image Placeholder */}
          <div className="mb-16 flex justify-center">
            <div className="w-full sm:w-96 aspect-square rounded-lg border border-[#E8C4B8] bg-[#FAFAF8] flex items-center justify-center">
              <p className="text-[#999999]">Product image</p>
            </div>
          </div>

          {/* Ingredient Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
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
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-center mb-12 text-[#2C2C2C]">
            Built for small dogs. Finally.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Formulated exclusively for dogs under 10kg.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Not a generic formula with a small breed label.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">GMP, ISO, HACCP, and FDA certified.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Manufacturing standards you can trust.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Soft chew format.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Small enough for tiny mouths and toy breed jaw sizes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Zero strong fish odour.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Picky eater approved.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
                <p className="text-[#A8B89C] text-xs font-bold">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Precision-dosed for delicate digestion.</p>
                <p className="text-xs sm:text-sm text-[#666666]">Built for small breed digestive systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-[#A8B89C] flex-shrink-0 flex items-center justify-center bg-[#FAFAF8]">
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
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8 text-[#2C2C2C]">
            The Empty Jar, Happy Dog 90-Day Double Guarantee.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8">
            We are so confident your small dog will love Chewpies that we back every single jar with the most generous guarantee in the category.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8">
            If your dog turns their nose up at the very first chew, we refund you immediately. No waiting ninety days. No needing to prove you used the product consistently. No return shipping required.
          </p>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-12">
            If at any point in the first ninety days your dog's sensitive stomach reacts, or if you simply do not see the improvement in mobility and comfort you were hoping for, send us the empty jar and we will refund 100% of your purchase price. Plus we will credit an additional $10 to your account for your trouble.
          </p>
          <div className="flex justify-center">
            <div className="px-8 py-4 rounded-lg border border-[#E8C4B8] flex items-center justify-center bg-[#FAFAF8]">
              <p className="text-sm sm:text-base text-[#2C2C2C] font-medium">Zero risk. Zero friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C4B8] to-transparent mx-12"></div>

      {/* Final Opt-in Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-6">
              Chewpies is currently in pre-launch. We are accepting a limited number of founding customers for our first production batch.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Reserve your jar now and lock in your founding customer price before we open to the general public.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-center mb-12 text-[#2C2C2C]">
            Reserve My First Jar of Chewpies.
          </h2>

          <form className="space-y-6 mb-8">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-[#FAFAF8] text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#C4614A] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-4 border border-[#E8C4B8] rounded-lg bg-[#FAFAF8] text-[#2C2C2C] placeholder:text-[#999999] focus:outline-none focus:border-[#A8B89C] transition-colors"
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
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Your small dog was never built for a human-sized world. You noticed the signs. Now you can do something about it.
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
