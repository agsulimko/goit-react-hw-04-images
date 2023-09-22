import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import css from "./Searchbar.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";

const Searchbar = (props) => {
  const [inputQuery, setInputQuery] = useState("");

  const handleInputQuery = (e) => {
    setInputQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputQuery.trim() === "") {
      Notify.failure("Enter your request");
      return;
    }
    props.onSubmit(inputQuery.trim());
    setInputQuery("");
  };

  console.log(inputQuery);

  return (
    <header className={css.searchbar}>
      <form className="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <YoutubeSearchedForIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            //  className="input"
            type="text"
            //  autocomplete="off"
            //  autofocus
            //  placeholder="Search images and photos"
            name="title"
            size="small"
            sx={{ m: 1, width: "35ch" }}
            style={{ backgroundColor: "white" }}
            className="form-control"
            onChange={handleInputQuery}
            value={inputQuery}
            id="input-with-sx"
            label="Search images and photos"
            variant="outlined"
            margin="dense"
          />
        </Box>
      </form>
    </header>
  );
};
export default Searchbar;
