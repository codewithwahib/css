import React from 'react';
import Heading from './Heading';
import Card from './Card'; // Keep this import, but remove the redefined Card // Import the CSS file
  // Ensure that heading.css exists in the same folder
import "@/app/styles/projects.css"
const data = [
  {
    id: "0",
    title: "E-commerce Website",
    desc: "Online store with user-friendly design, fast loading times, and real-time inventory updates.",
    img: "/ecom.jpg",
  },
  {
    id: "1",
    title: "Food Website",
    desc: "Built a modern food site with interactive recipes and easy navigation.",
    img: "/food.jpg",
  },
  {
    id: "2",
    title: "Music Player",
    desc: "Created an interactive music player with album art display and custom playlists.",
    img: "/volna.jpg",
  },
  {
    id: "3",
    title: "Resume Builder",
    desc: "Designed a user-friendly resume builder featuring guided prompts and formatting options.",
    img: "/resume.jpg",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            className="card-hover" // Hover outline effect on the card
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
