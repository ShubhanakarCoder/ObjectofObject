
import React, { useState } from 'react';

function Render16times() {
    const [renderCount, setRenderCount] = useState(0);
    const [btn,setBtn]=useState(false)

    const handleButtonClick = () => {
      setRenderCount(renderCount + 1); // Increment by 10 on each click
      if(renderCount==4){
            setBtn(true)
      }
    };

  return (
    <div>
      <button disabled={btn}onClick={handleButtonClick}>Render 1 tags till 5</button>
      <div>
        {Array.from({ length: renderCount }).map((_, index) => (
          <p key={index}>This is an h1 tag #{index + 1}</p>
        ))}
       
      </div>
    </div>
  );
}

export default Render16times;
