import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (data) => {
    setAppointments([...appointments, data]);
  };

  return (
    <AppContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppContext.Provider>
  );
};

