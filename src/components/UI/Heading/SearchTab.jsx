import classes from "../Heading/SearchTab.module.css";
import Overlay from "./Overlay";
import UpperHeading from "./UpperHeading";

export default function SearchTab(props) {
  const carPrices = [
    { id: 1, make: "Toyota", model: "Camry", price: 25000 },
    { id: 2, make: "Honda", model: "Civic", price: 22000 },
    { id: 3, make: "Ford", model: "Fusion", price: 27000 },
    { id: 4, make: "Chevrolet", model: "Malibu", price: 26000 },
    { id: 5, make: "Nissan", model: "Altima", price: 24000 },
  ];

  const brands = Array.from(new Set(carPrices.map((item) => item.make)));
  const makes = Array.from(new Set(carPrices.map((item) => item.model)));
  const prices = Array.from(new Set(carPrices.map((item) => item.price)));

  const brandOptions = brands.map((brand) => (
    <option key={brand} value={brand}>
      {brand}
    </option>
  ));

  const makeOptions = makes.map((make) => (
    <option key={make} value={make}>
      {make}
    </option>
  ));

  const priceOptions = prices.map((price) => (
    <option key={price} value={price}>
      {price}
    </option>
  ));

  return (
    <div className={classes.component}>
      <UpperHeading />
      <div className={classes.tab}>
        <form>
          <div className={classes["select-dropdown"]}>
            <select>{brandOptions}</select>
          </div>
          <div className={classes["select-dropdown"]}>
            <select>{makeOptions}</select>
          </div>
          <div className={classes["select-dropdown"]}>
            <select>{priceOptions}</select>
          </div>
          <button className={classes.button}>
            <span>Find</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="13"
              viewBox="0 0 24 13"
              fill="none"
            >
              <path
                d="M23.725 5.7579C23.7247 5.75758 23.7245 5.75722 23.7242 5.7569L18.8256 0.305287C18.4586 -0.103112 17.865 -0.101593 17.4997 0.308851C17.1344 0.719243 17.1359 1.38303 17.5028 1.79148L20.7918 5.45161H0.9375C0.419719 5.45161 0 5.92098 0 6.5C0 7.07902 0.419719 7.54839 0.9375 7.54839H20.7917L17.5029 11.2085C17.1359 11.617 17.1345 12.2808 17.4997 12.6911C17.865 13.1016 18.4587 13.1031 18.8256 12.6947L23.7242 7.2431C23.7245 7.24278 23.7247 7.24242 23.7251 7.2421C24.0922 6.83229 24.0911 6.16635 23.725 5.7579Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
      <Overlay />
    </div>
  );
}
