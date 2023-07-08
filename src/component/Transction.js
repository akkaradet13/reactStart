import Item from "./Item";
import {v4 as uuidv4 } from 'uuid';
import './Transction.css';

const Transaction = () => {
  const data = [
    { title: "A", amount: 1200 },
    { title: "B", amount: 10 },
    { title: "C", amount: 200 },
    { title: "D", amount: 120 },
    { title: "E", amount: 120 },
  ]
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item {...element} key={uuidv4()} />
      })}
    </ul>
  );
}
export default Transaction