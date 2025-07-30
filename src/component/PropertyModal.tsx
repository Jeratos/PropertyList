import { FiHome, FiMapPin, FiDollarSign, FiFileText, FiX } from "react-icons/fi";

interface PropertyDetails {
  id: string;
  name: string;
  type: string;
  price: string;
  location: string;
  desc: string;
}

interface PropertyModalProps {
  property: PropertyDetails;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white shadow-2xl rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold">{property.name}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        
        <div className="md:flex">
          {/* Image Section - Replace with your actual image */}
          <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Property Image</span>
          </div>
          
          <div className="md:w-1/2 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiHome className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-500">Type</h4>
                  <p className="text-gray-800">{property.type}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiDollarSign className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-500">Price</h4>
                  <p className="text-gray-800">{property.price}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiMapPin className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-500">Location</h4>
                  <p className="text-gray-800">{property.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiFileText className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-500">Description</h4>
                  <p className="text-gray-800">{property.desc}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}