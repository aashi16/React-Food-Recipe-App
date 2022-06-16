import { useState } from "react";
const Meal = (props) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
  } = props;
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState("+");
  function toggleBtn() {
    setToggle(toggle ? false : true);
    setIcon(toggle ? "+" : "-");
  }
  return (
    <div className="section-center">
      <article className="menu-item" id={idMeal}>
        <img src={strMealThumb} alt={strMeal} className="photo" />
        <div className="item-info">
          <header>
            <h3>{strMeal}</h3>
            <h4 className="area">
              {strArea} ({strCategory})
            </h4>
          </header>
          <button className="btn" onClick={toggleBtn}>
            {icon}
          </button>
        </div>
        {toggle && <p className="item-text">{strInstructions}</p>}
      </article>
    </div>
  );
};
export default Meal;
