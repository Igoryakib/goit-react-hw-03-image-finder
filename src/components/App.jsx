import React, { Component } from "react";
import getImageApi from "../utility/getImageApi";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    queryForm: "",
    imageArray: [],
    haveLoadMoreBtn: false,
    currentPage: 1,
    isLoading: false,
    showModal: false,
    imageItem: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryForm !== this.state.queryForm) {
      this.onSubmitForm();
    }
  }

  handleChange = (query) => {
    this.setState({
      queryForm: query,
      currentPage: 1,
      imageArray: [],
      haveLoadMoreBtn: false,
    });
  };

  onSubmitForm = () => {
    this.setState({
      isLoading: true,
    });
    getImageApi(this.state.queryForm, this.state.currentPage)
      .then((data) => {
        this.setState((prevState) => {
          return {
            currentPage: prevState.currentPage + 1,
            imageArray: [...prevState.imageArray, ...data.hits],
            haveLoadMoreBtn: true,
          };
        });
        const element = document.querySelector('.Button');
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  toggleModal = (itemId) => {
    this.setState((prevState) => {
      return {
        imageItem: this.state.imageArray.find(item => itemId === item.id),
        showModal: !prevState.showModal
      }
    });
  };

  render() {
    const {imageItem, imageArray, haveLoadMoreBtn, isLoading, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChange} />
        <section className="Gallery__section">
          {showModal && <Modal tagImage={imageItem.tags} imageUrl={imageItem.largeImageURL} onCloseFn={this.toggleModal} />}
          <ImageGallery imageArray={imageArray} showModal={showModal} openModal={this.toggleModal} />
          {isLoading && <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />}
          {haveLoadMoreBtn &&
              <Button loadMoreFn={this.onSubmitForm} />
          }
        </section>
      </>
    );
  }
}

export default App;
