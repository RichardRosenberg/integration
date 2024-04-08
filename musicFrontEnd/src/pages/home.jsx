import React from 'react';
import Hero from "../components/Hero";

function Home() {
  // Change the title on the internet tab
  document.title = "Home";

  return (
    <div className='container'>
      {/* Hero component only on the Home page */}
      <Hero />
      
      {/* Main content */}
      <h1 className='h1-home'>Welcome to Music Academy!</h1>
    </div>
  );
}

export default Home;
