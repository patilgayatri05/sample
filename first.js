
// styles= {fontSize:"30px",backgroundColor:"blue",color:"white"}


//react is obj here
const react = {
    createElement : function(tag,styles,children)
    {
        const elemment = document.createElement(tag);
        
        if(typeof children === 'object')
      {
        for(let val of children)
        {
            elemment.append(val);
        }
      }

       else
        elemment.innerText = children;
        for(let key in styles)
        {
            // console.log(key);//key constain property fontsize,bc,color
            //here inside style[key] all properties come like fontsize,bc,color
            //inside styles[key]  styles of fontsize = 30px
            elemment.style[key] = styles[key];
        }
        return elemment;
    }
}

const reactDom= {
   render : function(element,root){
    root.append(element);
   }
}


const li1 = react.createElement('li',{},"HTML");
const li2 = react.createElement('li',{},"CSS");
const li3 = react.createElement('li',{},"JS");

const header1 = react.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello coder army");
const header2 = react.createElement('h3',{fontSize:"20px",backgroundColor:"pink",color:"black"},"Kaise hoo aap log");
const header3 = react.createElement('ul',{fontSize:"20px",backgroundColor:"pink",color:"black"},[li1,li2,li3]);



reactDom.render(header1,document.getElementById('root'));
reactDom.render(header2,document.getElementById('root'));
reactDom.render(header3,document.getElementById('root'));

