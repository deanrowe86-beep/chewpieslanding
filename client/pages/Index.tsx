export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-12">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
            Why jumping off your couch may be quietly damaging your small dog's joints years before you notice.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
            Most small dog owners only discover hidden joint stress after visible limping has already begun. By then, the damage is often further along than anyone realised.
          </p>
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            <p>She still follows you from room to room. A loyal little shadow whose entire world is keeping up with your footsteps. But lately you have noticed the briefest pause at the foot of the bed. A quiet, anxious hesitation before the stairs. Or a soft whimper when she looks up at the sofa, hoping you will reach down and lift her up.</p>
            <p>You tell yourself she is just slowing down. That it is just what happens as they get older.</p>
            <p>But deep down, a heavy guilt sets in as you watch your baby struggle. She depends on you for everything, yet she is quietly enduring a hidden discomfort, giving you that heartbreaking look that begs for relief from a silent suffering she cannot voice.</p>
          </div>
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-foreground text-background font-medium rounded hover:opacity-90 transition-opacity">
            Reserve My Jar Now
          </button>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground leading-tight">
            The silent impact. Why a standard living room couch is one of the greatest daily threats to a small dog's joints.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                To a human, a standard eighteen-inch sofa represents a familiar place of rest. To a small dog under ten kilograms, descending from that same sofa is the biomechanical equivalent of a human jumping from a first-storey roof. Multiple times. Every single day.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Emerging veterinary orthopedic research reveals that upon landing on standard household flooring, a small dog's forelimbs must absorb impact forces of up to six times their total body weight, depending on landing velocity and flooring traction. On timber floors, that force increases further still.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                What makes this particularly difficult for small dog owners to detect is the second factor at play. Toy breeds carry an ancient survival instinct to mask pain and vulnerability. A Chihuahua experiencing early-stage medial patellar luxation. A Dachshund with early intervertebral disc compression. A French Bulldog with developing spinal arthritis. All of them continue acting energetic, affectionate, and apparently well long after internal joint stress has quietly begun.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                By the time visible limping, stiffness after naps, or reluctance to jump appears consistently, the cumulative wear on articular cartilage and stabilising joint tissue is often already advanced.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                There is a third factor most owners never consider.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Small dogs live significantly longer than large breeds. A Chihuahua can live fourteen to eighteen years. A Pomeranian, twelve to sixteen. A Yorkshire Terrier, thirteen to sixteen. That means more years of couch jumps. More years of stair climbing. More years of hardwood landings. More years of repetitive impact on joints and cartilage that were never designed for a human-sized world.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Most joint supplements on the market were designed around medium and large breed assumptions. A chew formulated for a thirty-five pound dog contains the same dosage of active ingredients and binders as one given to a five pound Chihuahua. For tiny, sensitive digestive systems, this regularly leads to stomach upset, diarrhea, or outright refusal to eat the product at all.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The owner tries one supplement. The dog refuses it or gets sick. They try another. Same result. The owner concludes supplements simply do not work for their dog. And the joint stress continues, unaddressed, for months or years longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground">
            What small dog owners are saying.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-foreground"
                  ></div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "I spent $50 on chews from another brand and my Chihuahua wouldn't even touch them. The smell was terrible. With Chewpies she actually runs to get her chew. Within three weeks I noticed her jumping on the couch again without hesitating."
              </p>
              <p className="text-sm sm:text-base text-foreground font-medium">
                Sarah M.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Chihuahua owner
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-foreground"
                  ></div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "My Dachshund started showing signs of back stiffness at age four. I didn't want to wait until it got serious. Chewpies is the first supplement he actually eats willingly and his morning stiffness has visibly improved."
              </p>
              <p className="text-sm sm:text-base text-foreground font-medium">
                James T.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Miniature Dachshund owner
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-foreground"
                  ></div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "I feel like I have my young dog back again. She's doing zoomies around the backyard. I cried the first time she jumped up next to me on the couch because I'd forgotten what that felt like."
              </p>
              <p className="text-sm sm:text-base text-foreground font-medium">
                Michelle R.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pomeranian owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground leading-tight">
            Introducing Chewpies Chewables. The only daily mobility chew built exclusively for Chihuahuas, Yorkies, Pomeranians, Dachshunds, French Bulldogs, Shih Tzus, and toy breeds under 10kg.
          </h2>

          {/* Product Introduction Copy */}
          <div className="mb-16 max-w-3xl mx-auto space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Not a large dog formula cut into smaller pieces. Not a generic supplement that groups your five pound Chihuahua into the same dosing category as a thirty-five pound Spaniel.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Chewpies was formulated from the ground up for one specific type of dog. The small ones. The ones absorbing six times their body weight in impact forces every time they launch themselves off a sofa. The ones whose joints are quietly working harder than any owner realises.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Address objection 1:</span> If your small dog has refused every supplement you have tried, it is almost certainly because of the smell. Most joint chews rely on marine shellfish sources for glucosamine and green-lipped mussel extract. These ingredients produce a strong, pungent fish odour that toy breeds, particularly Chihuahuas and Yorkies, find deeply repellent. Chewpies uses a natural savoury flavour profile with zero marine shellfish odour. Dogs treat it like a reward. Not a supplement.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Address objection 2:</span> If previous supplements have upset your dog's stomach, it is because tiny digestive systems were never designed to process the binder loads and ingredient concentrations built for medium and large dogs. Every Chewpies chew is precision-dosed specifically for dogs under 10kg. No harsh fillers. No cheap binders. No digestive overload.
            </p>
          </div>

          {/* Product Image Placeholder */}
          <div className="mb-16 flex justify-center">
            <div className="w-full sm:w-96 aspect-square rounded-lg border border-muted-foreground bg-white flex items-center justify-center">
              <p className="text-muted-foreground">Product image</p>
            </div>
          </div>

          {/* Ingredient Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">1</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  Glucosamine
                </p>
                <p className="text-sm text-muted-foreground">360mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">2</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  MSM
                </p>
                <p className="text-sm text-muted-foreground">300mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">3</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  Chondroitin
                </p>
                <p className="text-sm text-muted-foreground">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">4</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  Turmeric
                </p>
                <p className="text-sm text-muted-foreground">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">5</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  Green Lipped Mussels
                </p>
                <p className="text-sm text-muted-foreground">90mg</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">6</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  Type II Collagen
                </p>
                <p className="text-sm text-muted-foreground">60mg</p>
              </div>
            </div>
          </div>

          {/* Manufacturing Note */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Manufactured in GMP, ISO, HACCP, and FDA certified facilities. Formulated for dogs under 10kg. Not adapted. Not approximated. Built specifically for them.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            Built for small dogs. Finally.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">Formulated exclusively for dogs under 10kg.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Not a generic formula with a small breed label.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">GMP, ISO, HACCP, and FDA certified.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Manufacturing standards you can trust.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">Soft chew format.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Small enough for tiny mouths and toy breed jaw sizes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">Zero strong fish odour.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Picky eater approved.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">Precision-dosed for delicate digestion.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Built for small breed digestive systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                <p className="text-muted-foreground text-xs">✓</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium">24-month shelf life.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Stock up on your pup's favorite chew.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            The Empty Jar, Happy Dog 90-Day Double Guarantee.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            We are so confident your small dog will love Chewpies that we back every single jar with the most generous guarantee in the category.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            If your dog turns their nose up at the very first chew, we refund you immediately. No waiting ninety days. No needing to prove you used the product consistently. No return shipping required.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
            If at any point in the first ninety days your dog's sensitive stomach reacts, or if you simply do not see the improvement in mobility and comfort you were hoping for, send us the empty jar and we will refund 100% of your purchase price. Plus we will credit an additional $10 to your account for your trouble.
          </p>
          <div className="flex justify-center">
            <div className="px-8 py-4 rounded-lg border border-muted-foreground flex items-center justify-center">
              <p className="text-sm sm:text-base text-foreground font-medium">Zero risk. Zero friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Opt-in Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Chewpies is currently in pre-launch. We are accepting a limited number of founding customers for our first production batch.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Reserve your jar now and lock in your founding customer price before we open to the general public.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            Reserve My First Jar of Chewpies.
          </h2>

          <form className="space-y-6 mb-8">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 border border-muted-foreground rounded bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-4 border border-muted-foreground rounded bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-foreground text-background font-medium rounded hover:opacity-90 transition-opacity"
            >
              Reserve My Jar Now
            </button>
          </form>

          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            No payment required today. We will contact you directly when your order is ready to ship with your exclusive founding customer pricing.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Your small dog lives in a world that was never built for their body. Every couch. Every staircase. Every hardwood floor. Every jump. Their joints are absorbing forces that accumulate quietly over years, long before any visible sign appears.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            You noticed the signs. That is why you are here.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Chewpies exists for exactly this moment. Before it gets worse. Before the hesitation becomes a limp. Before the limp becomes a vet bill. Before the quiet suffering becomes impossible to ignore.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Reserve your jar. Give your tiny dog the protection they have always deserved.
          </p>
          <p className="text-lg sm:text-xl font-medium text-foreground pt-4">
            Built for small dogs. Finally.
          </p>
        </div>
      </section>
    </div>
  );
}
