import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  background: "khaki"
};
//親のコンポーネントがレンダリングされてもpropsに変更がない限りは子のコンポーネントを再レンダリングしないようにするには、
//memoという機能を使い、コンポーネント自体をmemoで囲む
export const ChildArea = memo((props) => {
  //親のコンポーネントからpropsを受け取っている場合
  //そのpropsが変更された場合、レンダリングされる
  const { open, onClickClose } = props;
  console.log("ChiledAreaがレンダリングされた！！");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
