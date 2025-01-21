import React from "react";
import "./Quality.css";
import layer from './layer.png';

const Quality = () => {
  const features = [
    {
      title: "Layered Security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
      icon: "🔒",
    },
    {
      title: "Quality Control",
      description: "Every unit is checked carefully for every detail.",
      icon: "✔️",
    },
    {
      title: "Reliable Service",
      description:
        "Our customer service is available 24/7 with qualified professionals.",
      icon: "📞",
    },
    {
      title: "Maintenance Manual",
      description:
        "We provide a guidebook that can be used to ensure maximum care.",
      icon: "📖",
    },
    {
      title: "Delivered Safely",
      description:
        "Every unit is delivered quickly and safely, without any obstacles or damage.",
      icon: "🚚",
    },
    {
      title: "AI-Based Features",
      description:
        "You can control and view each unit from your phone, making it easy to use.",
      icon: "🤖",
    },
  ];

  return (
    <div className="quality-section">
      <h1 className="quality-title">
        We offer quality, <span>with the best materials and service</span>
      </h1>
      <div className="quality-grid">
              {features.map((feature, index) => (
            
          <div className="quality-card" key={index}>
            <div className="quality-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
                      </div>
                      
        ))}
      </div>
    </div>
  );
};

export default Quality;
