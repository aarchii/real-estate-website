import React, { useState } from "react";

const PropertySubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    propertyDetails: "",
    location: "",
    images: [],
    address: "",
  });
     
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: images,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server for verification
    console.log("Form Data:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      phoneNumber: "",
      propertyDetails: "",
      location: "",
      images: [],
      address: "",
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-4">Submit Your Property</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name" className="text-2xl font-normal">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <label htmlFor="phoneNumber" className="text-2xl font-normal">Contact Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <label htmlFor="propertyDetails" className="text-2xl font-normal">Property Details:</label>
        <textarea
          id="propertyDetails"
          name="propertyDetails"
          value={formData.propertyDetails}
          onChange={handleChange}
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <label htmlFor="location" className="text-2xl font-normal">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <label htmlFor="images" className="text-2xl font-normal">Images:</label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleImageChange}
          multiple
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <label htmlFor="address" className="text-2xl font-normal">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border border-gray-400 rounded-md px-4 py-2"
        />
        <button 
        className="bg-violet-700 hover:bg-violet-800 text-white font-bold mt-4 py-5 px-6 rounded focus:outline-none focus:shadow-outline"
        type="submit">Submit Property</button>
      </form>
    </div>
  );
};

export default PropertySubmissionForm;
