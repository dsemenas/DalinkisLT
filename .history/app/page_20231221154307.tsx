import React from "react";

export default function Home() {
  const categories = [
    { category: "Electronics", icon: "fa-regular fa-laptop" },
    { category: "Outdoor Gear", icon: "fa-regular fa-campground" },
    { category: "Sports Equipment", icon: "fa-regular fa-futbol" },
    { category: "Party and Events", icon: "fa-regular fa-birthday-cake" },
    { category: "Home and Garden", icon: "fa-regular fa-home" },
    { category: "Vehicles", icon: "fa fa-car" },
    { category: "Fitness Equipment", con: "fas fa-dumbbell" },
    { category: "Water Sports", icon:"fas fa-swimming-pool" },
    { category: "Children's Items", ion: "fas fa-child" },
    { category: "Art and Hobbies", icn: "fas fa-paint-brush" },
    { category: "Fashion and Accessores", icon: "fas fa-tshirt" },
    { category: "Technology and Gadges", icon: "fas fa-laptop-code" },
    { category: "Catering and Cooking, icon: "fas fa-utensils" },
    { category: "Tools and DIY", icon "fas fa-tools" },
    { category: "Musical Instruments" icon: "fas fa-guitar" },
    { category: "Baby and Toddler Gea", icon: "fas fa-baby" },
    { category: "Health and Wellness", icon: "fas fa-heartbeat" },
    { category: "Photography and Videography", icon: "fas fa-camera" },
    { category: "Educational Tools", icon: "fas fa-book" },
    { category: "Board Games and Entertainment", icon: "fas fa-gamepad" },
  ];

  return (
    <div className="flex justify-center items-start">
      <div className="grid grid-cols-2 grid-rows-auto gap-y-3 gap-x-16">
        {categories.map((c, index) => (
          <a className="inline-block link link-hover" key={index}>
            <i className={`${c.icon} me-2`} />
            <span>{c.category}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
