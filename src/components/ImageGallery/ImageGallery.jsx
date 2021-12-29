import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

const ImageGallery = ({ imageArray, openModal}) => {
  return (
    <>
    <ul className="ImageGallery">
      {imageArray.map((item) => {
        return (
          <ImageGalleryItem
            key={item.id}
            imageSrc={item.webformatURL}
            imageName={item.tags}
            onClickImg={()=>{openModal(item.id)}}
          />
        );
      })}
    </ul>
    </>
  );
};

ImageGallery.propTypes = {
  imageArray: PropTypes.array.isRequired,
};
export default ImageGallery;
