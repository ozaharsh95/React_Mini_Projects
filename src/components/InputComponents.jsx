import React,{useState} from 'react'

function InputComponents({taskList,setTaskList}) {
    const [input,setInput] = useState("");
    
    const handleOnClick = (e) =>{
        e.preventDefault();
        setTaskList([...taskList,input]);
        setInput("");
    }
  return (
    <>
        <form 
            className='flex flex-row items-center gap-6 px-4'
        >
            <input
                className='border rounded px-4 py-2' 
                type='text'
                placeholder='Add a Task'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                
            />
            <button
                style={{background:'rgb(33 33 33 / 34%)',padding:'10px',borderRadius:'5px'}}
                className="font-semibold"
                onClick={handleOnClick}
            >
                Add
            </button>
        </form>
    </>
  )
}

export default InputComponents