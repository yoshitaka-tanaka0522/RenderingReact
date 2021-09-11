const style = {
  width: "100%",
  height: "200px",
  background: "khaki"
};

export const ChildArea = (props) => {
  //親のコンポーネントからpropsを受け取っている場合
  //そのpropsが変更された場合、レンダリングされる
  const { open } = props;
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
        </div>
      ) : null}
    </>
  );
};
