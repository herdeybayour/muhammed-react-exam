const Home = () => {
  return (
    <div className="p-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Your Health, Our Priority
          </h1>
          <p className="text-gray-600 mb-4">
            We provide the best healthcare services for your family.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Book Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
          className="rounded-xl"
        />
      </section>

      {/* Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Consultation", "Diagnostics", "Emergency"].map((item) => (
            <div key={item} className="p-6 shadow rounded-xl">
              <h3 className="font-bold">{item}</h3>
              <p className="text-gray-500">High quality care service</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;