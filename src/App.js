import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Error from "./pages/Error"
import Rooms from "./pages/Rooms"
import SingleRooms from "./pages/SingleRooms"

function App() {
  return (
    <> 
     <Home />
     <Error />
     <Rooms/>
     <SingleRooms/>
    </>
  );
}

export default App;
