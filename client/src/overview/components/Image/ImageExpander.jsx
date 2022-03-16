import React, {useState} from 'react';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageNavigator from './ImageNavigator.jsx';
import $ from 'jquery';
var ImageExpander = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [cursor, setCursor] = useState('pointer');
  //this component displays the main gallery image
  var scaled = false;
  //set the arrow status here so that it carries over when I zoom in or out.
  var rightArrow1 = $('#rightArrow1').css('display');
  var leftArrow1 = $('#leftArrow1').css('display');





  var onModalClick = (e) => {

    var container = $('#main-image-modal');
    // console.log('modal', e);

    if (!scaled) {
      //-make arrows disappear when zoomed in then rest arrow status
      rightArrow1 = $('#rightArrow1').css('display');
      leftArrow1 = $('#leftArrow1').css('display');
      $('#rightExpanded').css('display', 'none');
      $('#leftExpanded').css('display', 'none');
      $('#miniCarousel').hide();
      
      $('#main-image-modal').css('cursor', 'zoom-out');

      var image = new Image();
      image.src = props.selectedPhoto.url;
      image.onload = function () {
        var width = image.width;
        var height = image.height;
        let ratio = height / width;
        let percentage = ratio * 100 + '%';

        $('#main-image-modal').mousemove(function(e) {
          let rect = e.target.getBoundingClientRect();
          let xPos = e.clientX;
          let yPos = e.clientY - 70;
          console .log('xPos', xPos);
          console .log('yPos', yPos);
          let xPercent = xPos / (container.innerWidth() / 80);
          let yPercent = yPos / ((container.innerWidth() * ratio) / 190);
          console .log('yPos', yPercent);

          container.css('backgroundSize', 250 + '%');
          yPercent > 105 ? yPercent = 105 : '';
          $('#main-image-modal').css('backgroundPosition', xPercent + '% ' + yPercent + '%');
          // backgroundSize: img.naturalWidth + 'px';
          // $('#main-image-modal').css('transform', 'scale(2.5)');
          container.mouseout = (e) => {
            $('#main-image-modal').css('backgroundPosition', 'center');
            container.css('backgroundSize', 'contain');
          };
        });
      };
    } else {
      $('#main-image-modal').unbind();
      $('#main-image-modal').css('cursor', 'zoom-in');
      $('#main-image-modal').css('backgroundPosition', 'center');
      $('#main-image-modal').css('backgroundSize', 'contain');
      $('#rightExpanded').css('display', rightArrow1);
      $('#leftExpanded').css('display', leftArrow1);
      $('#miniCarousel').show();
    }

    scaled = !scaled;
  };

  var onImageClick = (e) => {
    setIsClicked(!isClicked);
    var imageModal = $('#image-modal-frame');
    // var wrapperWidth = $('.overview-wrapper').width();

    var wrapperHeight = $('.overview-wrapper').height();
    imageModal.css('width', `${props.width}px`);
    imageModal.css('height', `${props.height}px`);
    var image = $('#main-image-modal');
    image.css('width', 'auto');
    image.css('height', `${wrapperHeight - 50}px`);
    imageModal.toggle();
  };
  return (

    props.selectedPhoto ? props.modal ? <div style={{backgroundImage: `url(${props.selectedPhoto.url})`}} id='main-image-modal' alt='gallery image modal' onClick={onModalClick} ></div> : <img id = 'main-image' alt='main gallery image' src={props.selectedPhoto.url ? props.selectedPhoto.url : 'https://img.icons8.com/ios-glyphs/30/000000/image.png'} onClick={
      onImageClick} ></img>
      : <div className ='image-container'>
        ...loading
      </div>

  );


};
export default ImageExpander;

/* props.selectedPhoto ? props.modal ? <div></div> : <img id = { props.modal ? 'main-image-modal' : 'main-image'} src={props.selectedPhoto.url} onClick={props.modal ? onModalClick : onImageClick}></img>
      : <div className ='image-container'>
        ...loading
      </div>*/