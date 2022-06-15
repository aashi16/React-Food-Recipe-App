import Meal from "./components/Meal";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [searched, setVal] = useState(false);
  const [underlineText, setTextVal] = useState("Looking for new recipes?");
  const [text, setText] = useState("");
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
  function checkForRecipe(event) {
    event.preventDefault();
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        if (res.meals) {
          setItems(res.meals);
          setVal(true);
          setTextVal("Recipes");
        } else {
          setItems([]);
          setVal(false);
          setTextVal("Not a vaild input");
        }
      })
      .catch((error) => console.error(`error message`, error));
  }
  return (
    <main className={searched ? "" : "banner-image"}>
      <section className="menu section">
        <form onSubmit={checkForRecipe}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Find your favorite Recipes"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="title">
          <h2>
            <span className="underline-text">{underlineText}</span>
          </h2>
        </div>
        {/* {!searched && <div className="banner-image"></div>} */}
        <Meal items={items} />
      </section>
    </main>
  );
}

export default App;
