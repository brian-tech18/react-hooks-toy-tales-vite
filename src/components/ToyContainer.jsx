import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {toys.map(function (toy) {
        return (
          <ToyCard 
            key={toy.id} 
            toy={toy} 
            onDeleteToy={onDeleteToy} 
            onUpdateToy={onUpdateToy} 
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
