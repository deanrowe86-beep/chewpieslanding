export default function Index() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Headline
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">Subheadline</p>
        </div>
      </section>

      {/* Educational Text Block */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-base sm:text-lg">Educational text</p>
            <p className="text-base sm:text-lg">Educational text</p>
            <p className="text-base sm:text-lg">Educational text</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-6 sm:p-8">
                <p className="mb-4">Review content</p>
                <p className="font-semibold">Customer name</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Product Introduction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square border rounded-lg flex items-center justify-center">
                Product image
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Product name</h3>
              <p className="text-base sm:text-lg">Product description</p>
              <p className="text-base sm:text-lg">Product features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Credibility Icons */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  Icon {item}
                </div>
                <p className="text-sm sm:text-base">Trust element</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Guarantee</h2>
          <p className="text-base sm:text-lg mb-6">Guarantee description</p>
          <div className="border rounded-lg p-8 sm:p-12">
            <p className="text-base sm:text-lg">Guarantee details</p>
          </div>
        </div>
      </section>

      {/* Opt-in Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Get Started
          </h2>
          <form className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-colors"
            >
              Call to Action
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
