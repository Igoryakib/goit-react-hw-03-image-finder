import React, { Component } from "react";
import { createPortal } from "react-dom";
const rootModal = document.querySelector('#modal_root');
class Modal extends Component {
    state = {};

    componentDidMount(){
        window.addEventListener('keydown', this.onCloseModalByKey);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.onCloseModalByKey);
    }

    onCloseModalByKey = (event) => {
        if(event.code === 'Escape') {
            this.props.onCloseFn();
        }
    };

    closeByBackdrop = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onCloseFn();
        }
    };

    render(){
        const {imageUrl, tagImage} = this.props;
       return createPortal(<div onClick={this.closeByBackdrop} className="Overlay">
       <div className="Modal">
         <img src={imageUrl} alt={tagImage} />
       </div>
     </div>, rootModal)
    }
}

export default Modal;