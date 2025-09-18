//this can we use in App.jsx and Main.jx , if we are using Main.jx and  App.jsx then we well import // import "./css/style.css";, because this is same folder

// import "../css/style.css";

function ExternalCSS() {
  return (
    <>
      <div className="first">
        <h3>this is my external Css</h3>
      </div>
      <div >
        <img className="image" src="https://media.istockphoto.com/id/1488283141/vector/stock-market-crash-graph.jpg?s=612x612&w=0&k=20&c=XzIlIisbHq4KGdn93P5U69Rs2Km5WuXjrih6-ac52Bs=" alt="somethig missing" />
      </div>
    </>
  );
}

export default ExternalCSS;
