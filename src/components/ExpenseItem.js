import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"



function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
     <ExpenseDate date={props.date}>{props.date.toISOString().padStart(2, '0')}</ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;