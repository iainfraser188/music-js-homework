import React from 'react';


const ListItem = ({song}) => {
//   const handleClick = function(){
//     console.log(`clicked on ${song}`)
//     onMunroClick(munro);
//   }
  console.log({song})
  return <li >{song.entry.name}</li>
}

export default ListItem;