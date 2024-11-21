import React from 'react';
import Image from 'next/image';
import "@/app/styles/card.css"


interface PropsType {
  title: string;
  desc: string;
  img: string;
  className?: string; // Allow custom styles
}

const Card: React.FC<PropsType> = ({ title, desc, img, className }) => {
  return (
    <div className={`card ${className}`} data-aos="zoom-in-left">
      <div>
        <Image 
          className="card-img"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{desc}</div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// ok
// allah hafiz allah hafiz

