import React from 'react';
import Button from './Click';

let count=0;
let style={
  padding:"0px 20px"
}
// let imageUrl=require("../images/backgroun.jpg");
function abcd(){
  return count>0?count:"zero";
}

let increment=function(){
  count++;
  console.log(count);
}

let decrement=function(){
  count--;
  console.log(count);
}


function Products() {     //uppercase-pascal case notation
  return (
    <div className='xyz'>
         <ul>
            <li>
              <div>
                <div>
                  <h5>Fresh Juice</h5>
                  <p>avbnjhgfddfghbhhjkmnbvdfghjjkjjjhgfdfdsdfghbvbnm</p>
                  <div>
                    <h6>$12.00</h6>
                    <Button eventHandler={increment}>+</Button>
                    <span style={style}>{abcd()}</span>
                    <Button eventHandler={decrement}>-</Button>
                  </div>
                </div>
                <img src="../images/backgroun.jpg" width="200"/>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <h5>Biriyani</h5>
                  <p>avbnjhgfddfghbhhjkmnbvdfghjjkjjjhgfdfdsdfghbvbnm</p>
                  <div>
                    <h6>$120.00</h6>
                  </div> 
                </div>
                {/* <img src={imageUrl} width="10"/> */}
                {/* <img src={require("../images/backgroun.jpg")} height="10px" width="10"/> */}
              </div>
            </li>
          </ul>
    </div>
)
}
export default Products;
