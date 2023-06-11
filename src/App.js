import "./App.css";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Table } from "./Table";
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  async function getMoviesData() {
    const response = await fetch(
      "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
    );
    if (response.status === 200) {
      const fetchedData = await response.json();
      setData(fetchedData);
      setFilteredData(fetchedData);
      toast.success("fetched");
    } else {
      toast.error(response.statusText);
    }
  }
  useEffect(() => {
    getMoviesData();
  }, []);

  useEffect(() => {
    if (searchKeyWord) {
      const filteredArray = data.filter(
        (obj) => obj.year === parseInt(searchKeyWord)
      );
      // console.log("filtered data", filteredArray);
      setFilteredData(filteredArray);
    } else {
      setFilteredData(data);
    }
  }, [searchKeyWord]);

  return (
    <div className="App">
      <header className="App-header section">
        <h1 className="page-title">Search Movies API Task </h1>
        <Search
          searchKeyWord={searchKeyWord}
          setSearchKeyWord={setSearchKeyWord}
        />
      </header>
      <main className="section">
        <Table filteredData={filteredData} />
      </main>
    </div>
  );
}

export default App;
