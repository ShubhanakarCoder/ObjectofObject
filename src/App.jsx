import React, { useState } from 'react';
import ObjectOfObject from './Component/ObjectOfObject';

const App = () => {
  const initialData = {
    "Object1": {
      "propertyA": "Value A",
      "propertyB": 42
    },
    "Object2": {
      "propertyA": "Value B",
      "propertyB": 17
    },
    "Object3": {
      "propertyA": "Value C",
      "propertyB": 99
    },
    "Object4": {
      "propertyA": "Value D",
      "propertyB": 31
    },
    "Object5": {
      "propertyA": "Value E",
      "propertyB": 56
    }
  };

  const [data, setData] = useState(initialData);
  const [selectedObjects, setSelectedObjects] = useState({});

  const handleCheckboxChange = (objectKey) => {
    const updatedSelectedObjects = { ...selectedObjects };

    if (updatedSelectedObjects[objectKey]) {
      delete updatedSelectedObjects[objectKey];
    } else {
      updatedSelectedObjects[objectKey] = data[objectKey];
    }

    setSelectedObjects(updatedSelectedObjects);
  };

  return (
    <>
     {/* <div>
      {Object.entries(data).map(([objectKey, innerObject]) => (
        <div key={objectKey}>
          <label>
            <input
              type="checkbox"
              checked={selectedObjects[objectKey] ? true : false}
              onChange={() => handleCheckboxChange(objectKey)}
            />
            {objectKey}
          </label>
          
          <ul>
            {Object.entries(innerObject).map(([propertyKey, propertyValue]) => (
              <li key={propertyKey}>
                {propertyKey}: {propertyValue}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Selected Objects:</h2>
      <ul>
        {Object.entries(selectedObjects).map(([objectKey, innerObject]) => (
          <li key={objectKey}>
            {objectKey} - {innerObject.propertyA}, {innerObject.propertyB}
          </li>
        ))}
      </ul>
    </div> */}
    <ObjectOfObject/>
    </>
   
  );
};

export default App;
