import React from 'react'

const ChildComp = (props) => {
    console.log("Accesing fetch Data in Child class",props.sendDataToChild);
  return (
    <div>ChildComp</div>
  )
}

export default ChildComp