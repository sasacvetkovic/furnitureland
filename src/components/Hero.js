import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import furniture from "../assets/furniture.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          dream space
        </h1>
        <p>
          Make way for fall with rich, layered interiors. This season is about
          creating your dream space your way with tailored-to-you upholstery,
          customizable beds and more. We’re here to help everyone, anywhere
          create their feeling of home.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={furniture} alt="nice table" className="main-img" />
        {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 90%;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`;

export default Hero;
