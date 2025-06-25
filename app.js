const element1 = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"white"}},"Hello coder army");

const element2 = React.createElement("h2",{id:"second",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"white"}},"Do More!");

const div1 = React.createElement('div',{},[element1,element2]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div1);
