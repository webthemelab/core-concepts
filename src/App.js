import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Salman','Manna','yelias','Jafor ikbal']
  const products =[
    {name:'Photoshop',price:'$90.99'},
    {name:'Illastator',price:'$60.99'},
    {name:'PDF',price:'$20.99'}
  
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name={nayoks[0]} naika= "Moushomi"></Person>
        <Person name ={nayoks[1]} naika="Rituponra"></Person>
        <Person name={nayoks[2]} naika="Sabnur"></Person>
        <Person name={nayoks[3]} naika="Sabnur"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColour:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'

  }
  const {name, price} = props.product;
  console.log(name ,price)
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>By now</button>
    </div>
  )
}


function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    height:'200px',
    width:'400px'
     
  }
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h5>Naika: {props.naika}</h5>
    </div>
  )
}

export default App;
