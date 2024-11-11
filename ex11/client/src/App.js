import React from 'react';
import LoginForm from './LoginForm';

function App() {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

