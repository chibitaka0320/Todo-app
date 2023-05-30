import { useReducer, useState } from "react";
import "./styles.css";

const initItem = [{ id: 0, text: "TODOその１（初期値）" }];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDLIST":
      return [...state, { id: state.length, text: action.text }];
    case "DELETELIST":
      const deleteTodos = [...state];
      return deleteTodos.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default function App() {
  const [todoItem, dispatch] = useReducer(reducer, initItem);
  const [inputText, setInputText] = useState("");

  // TODO追加（ボタン）
  const onClickAdd = () => {
    if (inputText === "") return;
    dispatch({ type: "ADDLIST", text: inputText });
    setInputText("");
  };
  // TODO追加（ENTER）
  const onSubmitAdd = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    dispatch({ type: "ADDLIST", text: inputText });
    setInputText("");
  };

  // TODO削除
  const onClickDelete = (deleteID) => {
    dispatch({ type: "DELETELIST", id: deleteID });
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <form onSubmit={onSubmitAdd} style={{ display: "inline" }}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button onClick={onClickAdd}>追加</button>
      </form>
      <ul>
        {todoItem.map((item, index) => (
          <li key={index}>
            {item.text}　
            <button
              onClick={() => onClickDelete(item.id)}
              className="deleteBtn"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
