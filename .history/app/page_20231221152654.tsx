import React from "react";

export default function Home() {
  const categories = [
    { category: "Electronics", icon: "fas fa-laptop" },
    { category: "Outdoor Gear", icon: "fas fa-campground" },
    { category: "Sports Equipment", icon: "fas fa-futbol" },
    { category: "Party and Events", icon: "fas fa-birthday-cake" },
    { category: "Home and Garden", icon: "fas fa-home" },
    { category: "Vehicles", icon: "fas fa-car" },
    { category: "Fitness Equipment", icon: "fas fa-dumbbell" },
    { category: "Water Sports", icon: "fas fa-swimming-pool" },
    { category: "Children's Items", icon: "fas fa-child" },
    { category: "Art and Hobbies", icon: "fas fa-paint-brush" },
    { category: "Fashion and Accessories", icon: "fas fa-tshirt" },
    { category: "Technology and Gadgets", icon: "fas fa-laptop-code" },
    { category: "Catering and Cooking", icon: "fas fa-utensils" },
    { category: "Tools and DIY", icon: "fas fa-tools" },
    { category: "Musical Instruments", icon: "fas fa-guitar" },
    { category: "Baby and Toddler Gear", icon: "fas fa-baby" },
    { category: "Health and Wellness", icon: "fas fa-heartbeat" },
    { category: "Photography and Videography", icon: "fas fa-camera" },
    { category: "Educational Tools", icon: "fas fa-book" },
    { category: "Board Games and Entertainment", icon: "fas fa-gamepad" },
  ];

  return (
    <div className="flex justify-center items-start">
      <div className="grid grid-cols-2 grid gap-y-3 gap-x-16">
        {categories.map((c, index) => (
          <div className="block w-full">
            <a key={index} className="link link-hover">
              <i className={} />
              <span>{c.category}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
