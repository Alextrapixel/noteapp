import {useRef, useState} from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  const [isRefresh, setRefresh] = useState(true);
  const inputRef = useRef();
  const upkeyRef = useRef();

  return (
    <div className="App">
      <div className="content card rounded-4 mt-5">
        <Header ininRef = {inputRef} upkeyRef = {upkeyRef} setRefresh={setRefresh}></Header>
        <NoteList ininRef = {inputRef} upkeyRef = {upkeyRef} isRefresh={isRefresh} setRefresh={setRefresh}></NoteList>
      </div>
    </div>
  );
}

export default App;
