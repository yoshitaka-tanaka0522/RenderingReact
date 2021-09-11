import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  //inputエリアを入力したときはonChangeText関数でtextのステートを変更しているため
  //Appコンポーネント自体が再レンダリングされる。
  //ChildAreaコンポーネントからするとAppコンポーネントは親コンポーネントなので
  //親のコンポーネント(App)がレンダリングされた子のコンポーネント(ChileArea)も
  //再レンダリングされる。
  const onChangeText = (e) => setText(e.target.value);

  //表示ボタンを押下するとsetOpen関数でopenのステートを変更するため
  //openを引数(props)として渡しているchildAreaコンポーネントのpropsが変更される(24行目)
  //propsが変更されたコンポーネントは再レンダリングされるため
  //ChiledAreaコンポーネントは再レンダリングされる。
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
