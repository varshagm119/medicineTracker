import { useState } from "react";
import "./App.css";
import AddMedicines from "./components/AddMedicines";
import MedicineMenu from "./components/MedicineMenu";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import axios from "axios";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const [medList, setMedList] = useState([]);
  const addMedHandler = (medId, medName, medDesc, medAmt, medQt) => {
    setMedList((prevMedList) => {
      return [
        ...prevMedList,
        { id: medId, name: medName, desc: medDesc, amt: medAmt, qt: medQt },
      ];
    });
  };

  if (!medList) {
    axios
      .get("https://crudcrud.com/api/5a1c3c3cab49462781d72eb8d2ac8c26/Products")
      .then((res) => {
        const medDataDb = res.data;
        setMedList(medDataDb);
        console.log(medList);
      });
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AddMedicines onAddMed={addMedHandler} />
      <MedicineMenu medicines={medList} />
    </CartProvider>
  );
}

export default App;
