import React, {useState} from 'react';
import StyleList from './StyleList.jsx';

//this is the button container for specific image
const StyleThumbnail = (props) => {

  //props
  //StyleThumbnail img;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl
  var onClick = () => {
    props.setSelectedStyle(props.style);
  };


  return (

    <li>
      <img className ='style-thumbnail' id={`id${props.id}`} src={ props.style.photos[0].thumbnail_url ? props.style.photos[0].thumbnail_url : 'https://img.icons8.com/ios-glyphs/30/000000/image.png'} onClick={onClick} title={props.style.name} alt={`style thumbnail ${props.style.name}` } onError={({currentTarget}) => {
        currentTarget.onerror = null; currentTarget.src = 'https://img.icons8.com/ios-glyphs/30/000000/image.png';
      }}>
      </img>

    </li>

  );
};
// 'https://img.icons8.com/ios-glyphs/30/000000/image.png' className ='style-thumbnail'
export default StyleThumbnail;

//displays thespecific thumbnail image
// if clicked with change the selected image
// the selcted style will also have a checkmark on it
//

/*
test if clicking this changes selected thumbnail
test if when this button is clicked, if the selected thumbnail is changed'
test if class is thumbnail
test if image url does not work
Test if image is clicked if checkmark is added.


*/