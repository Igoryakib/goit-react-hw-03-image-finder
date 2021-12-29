import React from "react";
import PropTypes from 'prop-types';
const ImageGalleryItem = ({idImg, imageSrc, imageName, onClickImg}) => {
  return (
    <li name={idImg} onClick={onClickImg} className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={imageSrc} alt={imageName} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageName: PropTypes.string
};

export default ImageGalleryItem;
