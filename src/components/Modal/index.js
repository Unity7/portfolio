import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, url, category, repo, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
          <br></br>
          <a href={repo} target="_blank" rel="noreferrer">
            {repo}
          </a>
        </p>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
