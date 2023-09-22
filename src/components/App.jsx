import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ButtonLoad from "./ButtonLoad/ButtonLoad";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import getAllPhotos from "../api/api";
import { Container } from "@mui/material";
import Loader from "./Loader/Loader";

const App = (prev) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPage, setQuantityPage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // componentDidMount;

  useEffect(() => {
    searchQuery && fetchGallery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  //   if (!currentPage || searchQuery) {
  //     fetchGallery();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentPage, searchQuery]);

  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const { hits, totalHits } = await getAllPhotos(searchQuery, currentPage);

      if (!hits.length) {
        Notify.failure(
          "Sorry, there are no images matching your search query. Please try again."
        );
        return;
      }

      if (hits.length === 0) {
        setError("Not data found");
      }

      if (hits.length > 0) {
        setGallery((prevGallery) => [...prevGallery, ...hits]);
        setQuantityPage(Math.ceil(totalHits / 12));
      }
    } catch (err) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const hendleFormSubmit = (searchQuery) => {
    setCurrentPage(1);
    setQuantityPage(null);
    setGallery([]);
    setError(null);
    setSearchQuery(searchQuery);
  };

  const handleBtnLoad = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth="xl">
      <Searchbar onSubmit={hendleFormSubmit} />

      {isLoading && <Loader />}
      <ImageGallery hits={gallery} />
      {currentPage < quantityPage && (
        <ButtonLoad handleBtnLoad={handleBtnLoad} />
      )}
    </Container>
  );
};

export default App;
