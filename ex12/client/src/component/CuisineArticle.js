import React from 'react';
import './CuisineArticle.css';

function CuisineArticle({ title, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default CuisineArticle;
