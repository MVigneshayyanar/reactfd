import './App.css'

function App() {
  alert("Welcome to the site");
const name = "VIGNESH";
console.log("my age is 19");

function first(){
  console.log("Thanks for clicking first button");
}

const second = () => {
  console.log("Thanks for clicking second button");
};


  return(
    <>

     <h1>{name} INR</h1>
     <div id="but">
     <button onClick={first}>Click 1</button>
     <button onClick={second}>Click 2</button>
     <button onClick={()=>console.log("Thanks for clicking third buttton")}>Click 3</button>
     </div>
    </>
  )
}

export default App
