import { doctorProfiles } from "../data/doctors";
import Footer from "./Footer";

const Doctors = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctorProfiles.map(({ id, name, specialty, image }) => (
          <div key={id} className="shadow p-4 rounded-xl">
            <img src={image} className="rounded-lg mb-4" />
            <h3 className="font-bold">{name}</h3>
            <p className="text-gray-500">{specialty}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Doctors;