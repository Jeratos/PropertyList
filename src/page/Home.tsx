import { useState } from "react";
import { 
  FiFilter, FiHome, FiMapPin, FiDollarSign, 
  FiArrowRight 
} from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import SubmitForm from "../component/SubmitForm";
import { useDisplayContext } from "../context/Context";
import PropertyModal from "../component/PropertyModal";

export default function Home() {
  const { propertyList } = useDisplayContext();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProperty, setSelectedProperty] = useState<PropertyDetails | null>(null);

  // Get all unique property types for filter tabs
  const propertyTypes = ["all", ...new Set(propertyList.map(property => property.type))];

  // Filter properties based on active filter
  const filteredProperties = activeFilter === "all" 
    ? propertyList 
    : propertyList.filter(property => property.type === activeFilter);

  const openModal = (property: PropertyDetails) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SubmitForm />
      <main className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <FiFilter className="text-lg" />
            <h2 className="text-xl font-semibold">Filter Properties</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {propertyTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                  activeFilter === type
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {type === "all" ? (
                  <>
                    <FiHome />
                    All Properties
                  </>
                ) : (
                  <>
                    <IoIosArrowForward className="text-xs" />
                    {type}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <div 
                key={property.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Property Image</span>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
                  
                  <div className="space-y-3 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FiHome className="text-blue-500" />
                      <span>Type: <span className="font-medium">{property.type}</span></span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-blue-500" />
                      <span>Price: <span className="font-medium">{property.price}</span></span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-blue-500" />
                      <span>Location: <span className="font-medium">{property.location}</span></span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openModal(property)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mt-auto"
                  >
                    View More <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-sm">
            <FiFilter className="text-4xl text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No properties found</h3>
            <p className="text-gray-400">
              {activeFilter === "all" 
                ? "There are no properties listed yet" 
                : `No properties match the "${activeFilter}" filter`}
            </p>
          </div>
        )}
      </main>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

interface PropertyDetails {
  id: string;
  name: string;
  type: string;
  price: string;
  location: string;
  desc: string;
}