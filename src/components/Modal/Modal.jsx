import { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import PropTypes from 'prop-types';


const Modal = ({ image }) => {
  useEffect(() => {
    const instance = basicLightbox.create(`
      <img src="${image}" alt="Large view" />
    `);
    instance.show();

    return () => {
      if (instance.visible()) {
        instance.close();
      }
    };
  }, [image]); // Dependency array should include `image`

  return null;
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Modal;