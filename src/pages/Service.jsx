import Footer from "./Footer";

const Service = () => {
  const services = [
    "General Consultation",
    "Lab Tests",
    "Surgery",
    "Pediatrics",
  ];

  return (
    <>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service} className="p-6 shadow rounded-xl">
            {service}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Service;