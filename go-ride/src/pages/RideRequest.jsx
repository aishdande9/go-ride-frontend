
import { useState } from "react";
import { useEffect, useState } from "react";


function RideRequest() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [message, setMessage] = useState("");
  const [rideData, setRideData] = useState(null);

  const handlePickUpChange = (event) => {
    setPickup(event.target.value);
  };

  const handleDropChange = (event) => {
    setDrop(event.target.value);
  };

  const handleMessageChange = (event) =>{
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations");
      return;
    }

  const data = {pickup,drop,message};
  console.log("formdata :",data);
  setRideData(data);

    // Clear form after submit
    setPickup("");
    setDrop("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">
          🚕 UBER RIDE REQUEST
        </h1>

        {/* Map placeholder */}
        <div className="bg-gray-300 h-40 rounded-xl mb-5 flex items-center justify-center">
          <p className="text-gray-600">Map Preview</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Pickup */}
          <div>
            <label className="block mb-1 font-semibold">
              📍 Pickup Location
            </label>
            <input
              type="text"
              value={pickup}
              onChange={handlePickUpChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Drop */}
          <div>
            <label className="block mb-1 font-semibold">
              🏁 Drop Location
            </label>
            <input
              type="text"
              value={drop}
              onChange={handleDropChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter drop location"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">
              💬 Message (optional)
            </label>
            <textarea
              rows="3"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Any special instructions?"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-200 text-lg font-semibold"
          >
            Request Ride 🚗
          </button>
        </form>
        {rideData && (
  <div className="mt-6 bg-gray-100 p-4 rounded-xl">
    <h2 className="text-lg font-bold mb-2">✅ Ride Requested</h2>
    <p><b>Pickup:</b> {rideData.pickup}</p>
    <p><b>Drop:</b> {rideData.drop}</p>
    {rideData.message && (
      <p><b>Message:</b> {rideData.message}</p>
    )}
  </div>
)}

      </div>
    </div>
  );
}

export default RideRequest;
