import TextField from "@mui/material/TextField";
function Search({ searchKeyWord, setSearchKeyWord }) {
  return (
    <>
      <div className="search-container">
        <TextField
          id="outlined-basic"
          label="Search by Year"
          name="searchKeyWord"
          variant="outlined"
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
        />
      </div>
    </>
  );
}

export { Search };
