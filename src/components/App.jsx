import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24727962-734988bb0b03b5b4e85a70964';

class App extends Component {
  state = {
    imagesSearch: '',
    loading: false,
    btnshow: false,
    imagesData: [],
    showModal: false,
    page: 1,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    error: null,
    largeImageURL: '',
    alt: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, per_page, imagesSearch, image_type, orientation } =
      this.state;

    const searchApi = Object.entries({
      page,
      per_page,
      q: imagesSearch,
      image_type,
      orientation,
    })
      .join('&')
      .replace(/,/g, '=');

    if (prevState.imagesSearch !== imagesSearch || prevState.page !== page) {
      if (prevState.imagesSearch !== imagesSearch) {
        this.reset();
      }

      this.setState({ loading: true });
      const fullPath = `${BASE_URL}?key=${KEY}&${searchApi}`;

      await axios
        .get(fullPath)
        .then(({ data }) => {
          return data;
        })
        .then(({ hits }) => {
          if (hits.length === 0) {
            toast('No images show');
            return;
          }

          this.setState(({ imagesData }) => ({
            btnshow: hits.length === 12 ? true : false,

            imagesData: [
              ...imagesData,
              ...hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
                id: id,
                webformatURL: webformatURL,
                tags: tags,
                largeImageURL: largeImageURL,
              })),
            ],
          }));
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  reset() {
    this.setState({ page: 1 });
    this.setState({ imagesData: [] });
    this.setState({ btnshow: false });
  }

  addImg = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = e => {
    const imgURL = e.currentTarget.getAttribute('largeimageurl');
    const altImg = e.currentTarget.getAttribute('alt');
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imgURL,
      alt: altImg,
    }));
  };

  onSubmit = searchImg => {
    this.setState({ imagesSearch: searchImg });
  };

  render() {
    const { showModal, loading, imagesData, largeImageURL, alt, btnshow } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {showModal && (
          <Modal
            alt={alt}
            largeImageURL={largeImageURL}
            showModal={this.toggleModal}
          />
        )}
        {loading && <Loader />}
        {<ImageGallery imagesData={imagesData} showModal={this.toggleModal} />}
        {btnshow && <Button addImg={this.addImg} />}
        <ToastContainer
          position="top-center"
          autoClose={1200}
          closeOnClick
          rtl={false}
          transition={Zoom}
        />
      </>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
