export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
            Headline
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Subheadline line one
            <br />
            Subheadline line two
          </p>
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-foreground text-background font-medium rounded hover:opacity-90 transition-opacity">
            Button
          </button>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground">
            Headline
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Body text
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Body text
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Body text
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Body text
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-muted-foreground"
                    ></div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Quote
                </p>
                <p className="text-sm sm:text-base text-foreground font-medium">
                  Name
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Headline
          </h2>

          {/* Product Image Placeholder */}
          <div className="mb-16 flex justify-center">
            <div className="w-full sm:w-96 aspect-square rounded-lg border border-muted-foreground bg-white flex items-center justify-center">
              <p className="text-muted-foreground">Product image</p>
            </div>
          </div>

          {/* Ingredient Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-muted-foreground flex-shrink-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    Ingredient
                  </p>
                  <p className="text-sm text-muted-foreground">Description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 place-items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-muted-foreground flex items-center justify-center">
                  <p className="text-muted-foreground text-xs sm:text-sm">Icon</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Label</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Headline
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Body text
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Body text
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
            Body text
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-12 rounded-lg border border-muted-foreground flex items-center justify-center">
              <p className="text-muted-foreground text-xs">Badge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Opt-in Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            Headline
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-4 border border-muted-foreground rounded bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 border border-muted-foreground rounded bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-foreground text-background font-medium rounded hover:opacity-90 transition-opacity"
            >
              Button
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
