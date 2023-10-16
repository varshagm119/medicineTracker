import { useState } from 'react';
import './App.css';
import AddMedicines from './components/AddMedicines';
import MedicineMenu from './components/MedicineMenu';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const [medList, setMedList]= useState([]);
  const addMedHandler = (medId,medName,medDesc,medAmt,medQt) => {
    setMedList((prevMedList) => {
      return[
        ...prevMedList,
        {id:medId, name:medName, desc:medDesc, amt:medAmt,qt:medQt}
      ]
    })
  }
  return (
    <CartProvider >
      {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <AddMedicines onAddMed = {addMedHandler}/>
      <MedicineMenu medicines={medList}/>
    </CartProvider>
  );
}

export default App;
