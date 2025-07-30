import { createContext, useContext, useEffect, useState } from "react";

interface PropertyDetails {
  id: string;
  name: string;
  type: string;
  price: string;
  location: string;
  desc: string;
}

interface DisplayContextType {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  propertyList: PropertyDetails[];
  setPropertyList: React.Dispatch<React.SetStateAction<PropertyDetails[]>>;
  addProperty: (property: Omit<PropertyDetails, "id">) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DisplayContext = createContext<DisplayContextType | null>(null);

interface ContextProviderProps {
  children: React.ReactNode;
}

export const DisplayContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [display, setDisplay] = useState(false);
  const [propertyList, setPropertyList] = useState<PropertyDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://688a08fe4c55d5c73954b2fc.mockapi.io/api/properties/list"
        );
        if (response.ok) {
          const preData = await response.json();
          setPropertyList(preData); // Set initial value from API
        }
      } catch (error) {
        console.error("Something went wrong fetching properties:", error);
      }
    }
    fetchData();
  }, []);

  const addProperty = (property: Omit<PropertyDetails, "id">) => {
    const now = new Date();
    const timestamp = now.toISOString();
    setPropertyList((prev) => [
      ...prev,
      {
        ...property,
        id: timestamp,
      },
    ]);
  };

  return (
    <DisplayContext.Provider
      value={{
        display,
        setDisplay,
        propertyList,
        setPropertyList,
        addProperty,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDisplayContext = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error(
      "useDisplayContext must be used within a DisplayContextProvider"
    );
  }
  return context;
};
