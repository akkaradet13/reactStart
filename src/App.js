import Transaction from "./component/Transction";
import './App.css'

function App() {
  const design = {color:"red",textAlign:'center'}
  return (
    <div className="container">
      <h1 style={design}>โปรแกรมรายรับ-รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
