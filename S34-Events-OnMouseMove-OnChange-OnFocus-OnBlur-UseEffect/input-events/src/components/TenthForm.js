import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let telInputRef = useRef();
    let hinInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let matInputRef = useRef();
    let resultLabelRef = useRef();

    let firstNameSpanResultRef = useRef();
    let lastNameSpanResultRef = useRef();
    let engSpanResultRef = useRef();
    let telSpanResultRef = useRef();
    let hinSpanResultRef = useRef();
    let sciSpanResultRef = useRef();
    let socSpanResultRef = useRef();
    let matSpanResultRef = useRef();

    useEffect(()=>{
        console.log("TenthForm Component Is Loaded")
    },[])

  return (
    <div>
      <form>
        <fieldset> <legend>Student Score Summary</legend>
        <div>
            <label>First Name</label>
            <input type='text' placeholder='First Name' ref={firstNameInputRef}
             onFocus={()=>{firstNameInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{firstNameInputRef.current.style.backgroundColor = ""}}
            ></input>
        <span ref={firstNameSpanResultRef}></span>

        </div>
        <div>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' ref={lastNameInputRef}
             onFocus={()=>{lastNameInputRef.current.style.backgroundColor = "yellow";}} 
             onBlur={()=>{lastNameInputRef.current.style.backgroundColor = ""}}
             ></input>
        <span ref={lastNameSpanResultRef}></span>

        </div>
        <div>
            <label>English</label>
            <input type='number' placeholder='Enter marks' ref={engInputRef} 
            onFocus={()=>{engInputRef.current.style.backgroundColor = "yellow";}}
            onBlur={()=>{engInputRef.current.style.backgroundColor = "";}}

            onChange={()=>{
                let marks = engInputRef.current.value

             if(marks >=35){engSpanResultRef.current.innerHTML = "✅Pass"
                engSpanResultRef.current.style.backgroundColor = "lightgreen"
             }
             else{engSpanResultRef.current.innerHTML = "❎Fail"
             engSpanResultRef.current.style.backgroundColor = "red"}
        
            }}
            ></input>
            <span ref={engSpanResultRef}></span>
        </div>

        <div>
            <label>Telugu</label>
            <input type='number' placeholder='Enter marks' ref={telInputRef} 
             onFocus={()=>{telInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{telInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = telInputRef.current.value
                if(marks >=35){telSpanResultRef.current.innerHTML = "✅Pass"
                    telSpanResultRef.current.style.backgroundColor = "lightgreen"
                 }
                 else{telSpanResultRef.current.innerHTML = "❎Fail"
                 telSpanResultRef.current.style.backgroundColor = "red"}
            
                }}></input>
             <span ref={telSpanResultRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' placeholder='Enter marks' ref={hinInputRef} 
             onFocus={()=>{hinInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{hinInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = hinInputRef.current.value
                if(marks >=35){hinSpanResultRef.current.innerHTML = "✅Pass"
                    hinSpanResultRef.current.style.backgroundColor = "lightgreen"
                 }
                 else{hinSpanResultRef.current.innerHTML = "❎Fail"
                 hinSpanResultRef.current.style.backgroundColor = "red"}
            
                }}></input>
             <span ref={hinSpanResultRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' placeholder='Enter marks' ref={sciInputRef} 
             onFocus={()=>{sciInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{sciInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = sciInputRef.current.value
                if(marks >=35){sciSpanResultRef.current.innerHTML = "✅Pass"
                    sciSpanResultRef.current.style.backgroundColor = "lightgreen"
                 }
                 else{sciSpanResultRef.current.innerHTML = "❎Fail"
                 sciSpanResultRef.current.style.backgroundColor = "red"}
            
                }}></input>
             <span ref={sciSpanResultRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' placeholder='Enter marks' ref={socInputRef} 
             onFocus={()=>{socInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{socInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = socInputRef.current.value
                if(marks >=35){socSpanResultRef.current.innerHTML = "✅Pass"
                    socSpanResultRef.current.style.backgroundColor = "lightgreen"
                 }
                 else{socSpanResultRef.current.innerHTML = "❎Fail"
                 socSpanResultRef.current.style.backgroundColor = "red"}
            
                }}></input>
             <span ref={socSpanResultRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' placeholder='Enter marks' ref={matInputRef} 
             onFocus={()=>{matInputRef.current.style.backgroundColor = "yellow";}}
             onBlur={()=>{matInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = matInputRef.current.value
                if(marks >=35){matSpanResultRef.current.innerHTML = "✅Pass"
                    matSpanResultRef.current.style.backgroundColor = "lightgreen"
                 }
                 else{matSpanResultRef.current.innerHTML = "❎Fail"
                 matSpanResultRef.current.style.backgroundColor = "red"}
            
                }}></input>
             <span ref={matSpanResultRef}></span>
        </div>
        <div>
            <button type='button' onMouseMove={()=>{
                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let matMarks = Number(matInputRef.current.value);
                
                let totalMarks = engMarks+telMarks+hinMarks+sciMarks+socMarks+matMarks;
                resultLabelRef.current.innerHTML = `${firstName} ${lastName} Got Total Of ${totalMarks} Marks`;
               
            }}>Calculate</button>
        </div>
        <label className='resultLabel' ref={resultLabelRef}>Result Here</label>
        </fieldset>
      </form>
    </div>
  )
}

export default TenthForm
