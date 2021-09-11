import { useState, useCallback, useMemo } from "react";
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

  //アロー関数で記載した関数は毎回違う関数が生成されていると認識される
  //→propsで渡されたonClickCloseの関数が毎回違う関数だと認識され、propsに変更があったChildAreaのコンポーネントは
  //再レンダリングされてしまう。setOpenの処理が変わらない場合は同じ処理(関数、props)を使うという指示が必要
  //→useCallbackで関数を囲み、第二引数に空の配列にすると最初に生成したものを使うという指定になる
  //第二引数は今回は空でも、setOpenでも良い。
  const onClickClose = useCallback(() => setOpen(false), []);

  //変数自体のメモ化→最初の1＋３の処理をtempとして後程の処理でも使うという意味
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
