import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch all toys when the page loads
  useEffect(() => {
    fetch("http://localhost:6001/toys")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setToys(data);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add a new toy to our list
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Delete a toy from our list
  function handleDeleteToy(idToDelete) {
    const updatedToys = toys.filter(function (toy) {
      return toy.id !== idToDelete;
    });
    setToys(updatedToys);
  }

  // Update likes for a specific toy
  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map(function (toy) {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onDeleteToy={handleDeleteToy} 
        onUpdateToy={handleUpdateToy} 
      />
    </>
  );
}

export default App;
