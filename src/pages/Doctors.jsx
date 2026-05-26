const Doctors = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((doc) => (
          <div key={doc} className="shadow p-4 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold">Dr. John Doe</h3>
            <p className="text-gray-500">Cardiologist</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;