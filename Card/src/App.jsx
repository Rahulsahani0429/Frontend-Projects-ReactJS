import Card from "./component/Card";
import ExternalCSS from "./component/ExternalCSS";
import CssModule from "./component/CssModule";
import UseRef from "./component/UseRef";
import Uncomponent from "./component/Uncomponent";

// import "./css/style.css";

function App() {
  return (
    <>
    <Uncomponent></Uncomponent>
      <Card></Card>
      <ExternalCSS></ExternalCSS>
      <h3 className="heading">this simple css </h3>
      <CssModule></CssModule>
      <UseRef></UseRef>
    </>
  );
}

export default App;
