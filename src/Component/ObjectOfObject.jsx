import React, { useState } from 'react'
import { UserRecordList } from './UserRecordList';

const ObjectOfObject = () => { 
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

 const handleCheckboxChange = (ele) => {
  console.log("ele-->",ele[1]);
  const updatedSelectedObjects = { ...selectedObjects };

  if (updatedSelectedObjects[ele]) {
    delete updatedSelectedObjects[ele];
  } else {
    updatedSelectedObjects[ele] = data[ele];
  }

  setSelectedObjects(updatedSelectedObjects);
  console.log(selectedObjects);
};
  return (
    <>
        <div className="data-record">
           {data &&
                Object.entries(data).map((ele) => {
                let record =[
                <input
                  type="checkbox"
                  checked={selectedObjects[ele] ? true : false}
                  onChange={() => handleCheckboxChange(ele)}
                />,
                    ele[0],
                    ele[1].propertyA,
                    ele[1].propertyB
                ];
                  return (
                    <>
                    <UserRecordList
                      key={ele.id}
                      dataSet={record}
                      isHeader={false}
                    />
                    </>
                  );
                  
            })}
        </div>
      
        

      
    </>
  )
}

export default ObjectOfObject
