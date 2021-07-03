import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Calculator",
      category: "portfolio",
      description: "A simple calculator built with CSS and Javascript",
      url: "https://unity7.github.io/calculator/",
      repo: "https://github.com/Unity7/calculator",
    },
    {
      name: "Perfect Cocktail",
      category: "portfolio",
      description:
        "An application that allows users to look up cocktail recipes built with Javascript and Fetch API",
      url: "https://unity7.github.io/cocktail/",
      repo: "https://github.com/Unity7/cocktail",
    },
    {
      name: "Run Buddy",
      category: "portfolio",
      description: "A simple landing page built with HTML and CSS",
      url: "https://unity7.github.io/run-buddy/",
      repo: "https://github.com/Unity7/run-buddy",
    },
    {
      name: "Chirp",
      category: "portfolio",
      description:
        "A social media application that allows users to share their ideas and thoughts. Built with HTML, Javascript, Materialize, and NodeJS",
      url: "https://chirp-uclabootcamp.herokuapp.com/",
      repo: "https://github.com/Unity7/chirp-app",
    },
    {
      name: "extravert",
      category: "portfolio",
      description:
        "An application that allows users to search for events and flights by city. The application is built with HTML, CSS, Javascript, and Bulma",
      url: "https://unity7.github.io/EXTRAvert/",
      repo: "https://github.com/Unity7/EXTRAvert",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
