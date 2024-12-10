// function Card(){
//     return(
//         <div className="Card">
//             <img src="/"></img>
//             <h2>My card</h2>
//             <p>Playing cards is my hobbie</p>
//         </div>
//     )
// }

// export default Card;




function Buutton(){
    const styles={
            backgroundColor:"brown",
            color: "white",
            padding: "30px 30px",
            borderRadius:"5px",
            border: "none",
            cursor: "pointer",
        
    }
    return (<button style={styles}>clickme</button>);//inline css
    // return  (<button className="button">clickme</button>);  //if external css                  
     
}
export default Buutton;