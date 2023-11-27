import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const LogoDF = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dealsfavdotcom.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <image fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default LogoDF;
