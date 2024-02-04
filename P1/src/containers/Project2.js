import React,{useState} from 'react';
import InputComponents from '../components/InputComponents';
import Board from '../components/Board';

function Project2() {
    const [taskList,setTaskList] = useState([]);
   
  return (
      <>
          <div
              className='flex flex-col items-center justify-center py-8'
          >
              <h1
                  className='text-xl font-semibold'
              >To Do App</h1>
              <InputComponents taskList={taskList} setTaskList={setTaskList} />
          </div>
          <div className='grid grid-cols-3 gap-8'>
              {taskList.map((task, index) =>
                  <Board
                    key={index}
                    task={task}
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
              )}
          </div>
      </>
  )
}

export default Project2