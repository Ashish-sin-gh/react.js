import React from 'react';

export default function List({layout, item}){
  let listStyle = "disc";
  if(layout === "number"){
    listStyle = 'decimal';
  } else if(layout === "alphabet"){
    listStyle = "lower-alpha";
  }

  return(
    <>
      <li style={{listStyleType: listStyle}}>{item}</li>
    </>
  )
};