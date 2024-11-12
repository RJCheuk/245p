import React from 'react';
import Nav from './Nav';
import CuisineArticle from './CuisineArticle';
import './Home.css';

function Home() {
  return (
    <section>
      <Nav />
      <div className="articles">
        <CuisineArticle title="Italian Cuisine" content="Italian food is known for its pasta, pizzas, and a variety of desserts." />
        <CuisineArticle title="Japanese Cuisine" content="Japanese food is famous for sushi, ramen, and unique seafood dishes." />
        <CuisineArticle title="Mexican Cuisine" content="Mexican cuisine features tacos, burritos, and delicious salsas." />
      </div>
    </section>
  );
}

export default Home;
