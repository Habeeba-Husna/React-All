
// function Listss(){       //list unordered array
//     const fruits=["apple","banana","coconut","pineapple"];
//     const listItems=fruits.map(fruit=><li>{fruit}</li>);
//     return(<ul>{listItems}</ul>);
// }
// export default Listss;



// function Listss(){
//     const fruits=[{id:1,name:"apple",calory:95},
//         {id:2,name:"banana",calory:45},
//         {id:3,name:"coconut",calory:105},
//         {id:4,name:"pineapple",calory:37}];

// //   fruits.sort((a,b)=>a.name.localeCompare(b.name)) //alphabetic 
// //   fruits.sort((a,b)=>b.name.localeCompare(a.name)) 
// //   fruits.sort((a,b)=>a.calory-b.calory) ;//numeric    
//     const listItems=fruits.map(fruit=><li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calory}</b></li>);
//     return(<ol>{listItems}</ol>);
// }
// export default Listss;



function Listss(props){
    const category=props.category;
    const itemList=props.items;

    // const fruits=[{id:1,name:"apple",calory:95},
    //     {id:2,name:"banana",calory:45},
    //     {id:3,name:"coconut",calory:105},
    //     {id:4,name:"pineapple",calory:37}];

        const listItems=itemList.map(item=><li key={item.id}>{item.name}:&nbsp;<b>{item.calory}</b></li>);
        return ( <>
                  <h3>{category}</h3>
                  <ol>{listItems}</ol>
                 </>);

         
    }
    export default Listss;     