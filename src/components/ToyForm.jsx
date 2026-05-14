import React from "react";

function ToyForm({ onAddToy }) {
  function handleSubmit(e) {
    e.preventDefault();

    // Collects all the form text data safely
    const dataCollector = new FormData(e.target);
    
    const newToyData = {
      name: dataCollector.get("name"),
      image: dataCollector.get("image"),
      likes: 0,
    };

    fetch("http://localhost:6001/toys", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(newToyData),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        onAddToy(data);
        e.target.reset(); // Empties the input text boxes
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter a toy's name..." 
          className="input-text" 
        />
        <br />
        <input 
          type="text" 
          name="image" 
          placeholder="Enter a toy's image URL..." 
          className="input-text" 
        />
        <br />
        <input 
          type="submit" 
          name="submit" 
          value="Create New Toy" 
          className="submit" 
        />
      </form>
    </div>
  );
}

export default ToyForm;
