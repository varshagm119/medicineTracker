
import './App.css';
import AddMedicines from './components/AddMedicines';
import MedicineMenu from './components/MedicineMenu';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider >
      <AddMedicines />
      <MedicineMenu />
    </CartProvider>
  );
}

export default App;
