import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Browse the Docs",
    bannerImage: "./img/hero_banner_book.png",
    actionableLink: "Table of Contents ➤",
    actionableLinkTarget: "./contents/",
    description: (
      <>
        Read about file formats and other topics to learn more about the inner
        workings of the game.
      </>
    ),
  },
  {
    title: "Contribute to the Project",
    bannerImage: "./img/hero_banner_collaboration.png",
    actionableLink: "Get Involved ➤",
    actionableLinkTarget: "./contributing/",
    description: (
      <>
        Every bit helps! Let&apos;s create a shared body of knowledge that
        anyone can understand.
      </>
    ),
  },
  {
    title: "Discover New Tools",
    bannerImage: "./img/hero_banner_tools.png",
    actionableLink: "Explore RO Tools ➤",
    actionableLinkTarget: "./tools/",
    description: (
      <>
        Various utilities for working with RO-related data, made available under
        a free software license.
      </>
    ),
  },
];

function Feature({
  bannerImage,
  title,
  description,
  actionableLink,
  actionableLinkTarget,
}) {
  return (
    <div className={clsx("col col--4")}>
      <div className="feature-card">
        <div className="text--center feature-card-image">
          <img src={bannerImage} className="hero-banner-image" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="banner-action-container">
            <a href={actionableLinkTarget} className="banner-action-link">
              {actionableLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// See https://reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from "prop-types";

Feature.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  actionableLink: PropTypes.string.isRequired,
  actionableLinkTarget: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
