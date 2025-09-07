// ApiContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ properties, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

// ✅ Custom Hook
export const useApi = () => useContext(ApiContext);
