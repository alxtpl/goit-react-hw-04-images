import ImgGal from "./Components/ImgGal/ImgGal.jsx";
import Search from "./Components/Search/Search.jsx";
import React, { useState, useEffect } from "react";
import { getImage } from "./pixabay";
import Btn from "./Components/Btn/btn.jsx";
import { Grid } from "react-loader-spinner";
import Modal from "./Components/Modal/Modal.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [showModall, setShowModal] = useState(false);

  useEffect(() => {
    if (!search) return;
    setImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  const setImage = () => {
    setIsloading(true);
    setError(null);

    getImage(search, page)
      .then((images) =>
        setImages((prev) => (page === 1 ? images : [...prev, ...images]))
      )
      .catch((error) => setError(error.message))
      .finally(setIsloading(false));
  };
  const changeSearch = (search) => {
    setSearch(search);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const toggleModal = () => {
    setShowModal((prevModal) => !prevModal);
  };

  const handleClick = (image) => {
    toggleModal();
    setLargeImageUrl(image);
  };

  return (
    <div>
      <Search changeSearch={changeSearch} />
      {error && <p>{error}</p>}
      {!error && (
        <>
          <ImgGal images={images} onClick={handleClick} />
          {isLoading ? (
            <div className={""}>
              <Grid heigth="90" width="90" color="#3f57b3" />
            </div>
          ) : (
            search && <Btn handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
      {showModall && (
        <Modal onClose={toggleModal}>
          <img src={largeImageUrl} alt="" />
        </Modal>
      )}
    </div>
  );
};


export default App;
