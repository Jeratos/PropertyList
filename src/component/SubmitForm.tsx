import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDisplayContext } from "../context/Context";



export default function SubmitForm() {
  const { display, setDisplay, addProperty } = useDisplayContext();

  // Local state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    desc: "",
  });

  // Handle input changes locally
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // On submit, update context state with local state
   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProperty(formData); // Use the helper function
    setDisplay(false);
    setFormData({
      name: "",
      type: "",
      price: "",
      location: "",
      desc: "",
    });
  };

  return (
    <div className={`${display ? 'backdrop-blur-xs absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center' : 'hidden'}`}>
      <div className="bg-blue-400 flex flex-col justify-center items-center w-100 rounded-2xl h-170 backdrop-blur-sm shadow-xl relative">
        <button
          onClick={() => setDisplay(!display)}
          className="absolute top-4 right-4 text-white border-2 rounded-full p-1 hover:bg-blue-500"
          aria-label="Close"
        >
          <RxCross2 className="h-5 w-5" />
        </button>
        <h1 className="text-3xl font-bold mt-6">Add property</h1>
        <form className="w-full p-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="py-2 px-1" htmlFor="name">Property Name:</label>
            <input
              className="bg-blue-100 rounded-xl py-1 px-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 px-1" htmlFor="type">Property Type:</label>
            <select
              className="bg-blue-100 rounded-xl py-1 px-2"
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="plot">Plot</option>
              <option value="retail store">Retail Store</option>
              <option value="shed">Shed</option>
              <option value="plot store">Plot Store</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="py-2 px-1" htmlFor="price">Price:</label>
            <input
              className="bg-blue-100 rounded-xl py-1 px-2 "
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 px-1" htmlFor="location">Property Location:</label>
            <input
              className="bg-blue-100 rounded-xl py-1 px-2"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 px-1" htmlFor="desc">Description:</label>
            <textarea
              name="desc"
              id="desc"
              className="bg-blue-100 rounded-xl py-1 px-2 h-40"
              value={formData.desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            className="bg-blue-300 rounded-xl shadow-sm hover:shadow-xl duration-300 py-2 px-3 my-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}