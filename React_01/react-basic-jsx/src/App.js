//根组件
const Count = 100
function getName(){
  return 'jack'
}
function App() {
  return (
    <div className="App">
      this is app
      {/* {使用引号传递字符串} */}
      {"Hello,React"}
      {/* {识别js变量} */}
      {Count}
      {/* {传递函数} */}
      {getName()}
      {/* {调用方法} */}
      {new Date().getDate()}
      {/* {调用js对象} */}
      <div
      style={{color:'red'}}>
        this is a div
      </div>
    </div>
  );
}

export default App;
