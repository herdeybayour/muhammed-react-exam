const Contact = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;