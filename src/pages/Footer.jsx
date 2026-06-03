const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Digit care Clinic</h3>
            <p className="text-slate-300">
              Providing quality healthcare with modern technology,
              experienced doctors, and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/doctors">Doctors</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>General Consultation</li>
              <li>Laboratory Tests</li>
              <li>Pediatrics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-300">
              <li>📍 kwara, Nigeria</li>
              <li>📞 07069486185</li>
              <li>✉️ info@digitcare.com</li>
              <li>🕒 Open 24/7</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          © {new Date().getFullYear()} digitcare. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;