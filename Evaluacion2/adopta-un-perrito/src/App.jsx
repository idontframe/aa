/* src/App.jsx */
import React from 'react';
import MyCard from './assets/components/MyCard';
import Footer from './assets/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="custom-title">Guerra Santa</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
        <MyCard tagText="1119, 1191" tagColor="black" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
