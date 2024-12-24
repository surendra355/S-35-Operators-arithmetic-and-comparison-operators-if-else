import React from 'react'

let score = 10;

function Operators() {
  return (
    <div>
      <h1>Arithmetic Operators</h1>
      <button type='button' onClick={()=>{
        let a = 2+5;
        console.log(a)
      }}>Addition</button>

      <button type='button' onClick={()=>{
        let a = 30%4;
        console.log(a)
      }}>Modulus (Remainder)</button>

      <button type='button' onClick={()=>{
        score ++;
        console.log(score)
      }}>Increment</button>

<button type='button' onClick={()=>{
        score --;
        console.log(score)
      }}>Decrement</button>

      <h1>Operator Precedence</h1>

      <button type='button' onClick={()=>{
        let a = 7+4/(5-3)*3;
        console.log(a)
      }}>Precedence</button>

<h1>Assignment Operators</h1>

<button type='button' onClick={()=>{
  let a = 10;
      a += 3;
      a -= 4;
      a %= 4;
      a *= 10;

  console.log(a)
}}>Assignment</button>

<h1>Comparison  Operators</h1>

<button type='button' onClick={()=>{
  let engMarks = 40;

  if(engMarks >=35){console.log(`Student is Passed in English`)}
  else{console.log(`Student is Failed in English`)}
     
  console.log(engMarks == 10);
  console.log(engMarks != 12);
  console.log(engMarks < 6);
  console.log(engMarks > 17);
  console.log(engMarks <= 16);
  console.log(engMarks >= 18);
}}>Comparison</button>

    
    </div>
  )
}

export default Operators
