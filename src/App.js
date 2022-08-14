import React from "react";
import './style.css';
import Urun from "./Urun";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [q, setQ] = React.useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = React.useState(["category", "title"]);

  const [filterParam, setFilterParam] = React.useState(["Hepsi"]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function search(items) {
    return items.filter((item) => {
      
      if (item.category == filterParam) {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    } else if (filterParam == "Hepsi") {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    }

    });
  }


  if (error) {
    return <>HATA: <p style={{ color: "red" }}>{error.message}</p></>;
  } else if (!isLoaded) {
    return <>Yükleniyor...</>;
  } else {
    return (
      /* here we map over the element and display each item as a card  */
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Arayın..."
              value={q}
              /*
              // set the value of our useState q
              //  anytime the user types in the search box
              */
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Ürünlerde arayın</span>
          </label>

          <select
            /* 
//                         here we create a basic select input
//                     we set the value to the selected value 
//                     and update the setC() state every time onChange is called
    */
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select"
            aria-label="Filter Countries By Countries"
          >
            <option value="Hepsi">Filter By Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
          </select>
        </div>


        <ul className="card-grid">
          {search(items).map((item) => (
            <Urun item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
