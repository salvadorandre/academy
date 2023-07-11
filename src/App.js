import './App.css';
import Encabezado from './Componentes/Encabezado';
import Informacion from './Componentes/Informacion';
import Informacion2 from './Componentes/Informacion2';
import Pie from './Componentes/Pie';
function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Informacion></Informacion>
      <Informacion2></Informacion2>
      <Pie></Pie>
    </div>
  );
}

export default App;
