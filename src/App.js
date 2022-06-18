import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <ItemListContainer greeting='Bienvenvenido a tu tienda fitness favorita' />     
    </div>
  );
}

export default App;