const AppointmentModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

        <input className="w-full border p-2 mb-3" placeholder="Name" />
        <input className="w-full border p-2 mb-3" placeholder="Phone" />
        <input type="date" className="w-full border p-2 mb-3" />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">
          Submit
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-3 text-red-500 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;