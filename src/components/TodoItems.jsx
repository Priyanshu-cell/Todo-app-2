import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemcontainer}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
