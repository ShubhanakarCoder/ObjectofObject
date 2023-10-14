import React from "react";

// import Mousetrap from 'mousetrap'


export function UserRecordList({ dataSet, toBlink }) {
    return (
      <div
        className={`record-set data-record ${toBlink ? "highlight-record" : ""}`}>
        {dataSet.map((ele, index) => {
          if (ele === true) {
            return (
              <div key={index} className="each-record buy-record">
                
              </div>
            );
          } else if (ele === false) {
            return (
              <div key={index} className="each-record sell-record">
               
              </div>
            );
          } else {
            return (
              <div key={index} className="each-record">
                {ele}
              </div>
            );
          }
        })}
      </div>
    );
  }