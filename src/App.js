import ImgGal from "./Components/ImgGal/ImgGal.jsx";
import Search from "./Components/Search/Search.jsx";
import React, { Component } from "react";
import { getImage } from "./pixabay";
import Btn from "./Components/Btn/btn.jsx";
import { Grid } from "react-loader-spinner";
import Modal from "./Components/Modal/Modal.jsx";

class App extends Component {
  state = {
    images: [],
    search: "",
    page: 1,
    isLoading: false,
    error: null,
    largeImageURL: "",
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.search !== this.state.search && this.state.search) ||
      (prevState.page !== this.state.page && this.state.page !== 1)
    ) {
      this.setImage();
    }
  }

  setImage = () => {
    this.setState({ isLoading: true, error: null });
    getImage(this.state.search, this.state.page)
      .then((images) =>
        this.setState((prev) => ({
          images: this.state.page === 1 ? images : [...prev.images, ...images],
        }))
      )
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  changeSearch = (search) => {
    this.setState({ search, page: 1 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleClick = (image) => {
    this.toggleModal();
    this.setState({ largeImageURL: image });
  };
  render() {
    const { images, isLoading, search, error, showModal, largeImageURL } =
      this.state;
    return (
      <div>
        <Search changeSearch={this.changeSearch} />
        {error && <p>{error}</p>}
        {!error && (
          <>
            <ImgGal images={images} onClick={this.handleClick} />
            {isLoading ? (
              <div className={""}>
                <Grid heigth="90" width="90" color="#3f57b3" />
              </div>
            ) : (
              search && <Btn handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
