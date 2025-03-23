import React from 'react';
import User from './User';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Welcome to <span className="font-semibold text-blue-500">TastyHub</span>, your go-to destination for delicious and mouth-watering food.  
        We believe in serving fresh, high-quality dishes that bring joy to every bite.  
        Experience the best flavors crafted with passion and love. 🍽️✨
      </p>

      <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
        <User />
      </div>
    </div>
  );
};

export default About;
