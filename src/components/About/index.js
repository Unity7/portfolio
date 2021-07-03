import React from "react";
import coverImage from "../../assets/cover/bay.jfif";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="cover"
      ></img>
      <h2 id="about-info">
        My name is Bay Bui. I graduated from the University of California, Los
        Angeles. I am a full-stack web developer that can easily adapt to new
        technologies. I am a highly motivated, ambitious, and detail-oriented
        individual who is dedicated to continual growth and improvement. I
        thrive in fast-paced, results-oriented environments.
      </h2>
    </section>
  );
}

export default About;
