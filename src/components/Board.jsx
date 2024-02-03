import React from 'react'

function Board({task,index,taskList,setTaskList}) {
    function handleDelete(){
        const [...newTasks] = taskList; 
        newTasks.splice(index, 1) ;
        setTaskList(newTasks);
    }
  return (
    <>
    <div className='flex flex-col justify-center items-center border gap-5 text-center text-lg flex-wrap'>
        <p className='flex flex-wrap text-wrap'> {task}</p>
        <button
            className=" text-white rounded py-2 px-2 mt-4"
            style={{background:"rgb(255,0,0,0.85)",color:"white"}}
            onClick={handleDelete}
        >Delete</button>
    </div>
    </>
  )
}

export default Board
