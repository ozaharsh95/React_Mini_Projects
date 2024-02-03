import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function StopWatch(){
    const [time,setTime] = useState(0);
    const [running,setRunning] = useState(false);
   

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTime(time+1);
            },10);
        }else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[running,time]);
    
    return(
        <>                 
            <div style={{ background: '#41B3A3' }} className='w-3/4 m-auto my-10 flex flex-wrap justify-center items-center flex-col border-2 border-solid border-green-400 rounded-md h-80'>
                <h1 className='text-6xl sm:text-8xl font-semibold pb-2'>STOPWATCH</h1>

                <div className='text-6xl font-semibold m-10'>
                    <span>{hours <= 9 ? "0" + hours : hours}</span>
                    :
                    <span>{minutes <= 9 ? "0" + minutes : minutes}</span>
                    :
                    <span>{seconds <= 9 ? "0" + seconds : seconds}</span>
                </div>
                <div className='flex flex-row justify-between gap-16 items-center'>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >

                        {running ?
                            (<button className=' hover:bg-skie p-5 border-rounded  border-2 rounded-full' onClick={() => { setRunning(false) }}>STOP</button>)
                            :
                            (<button className=' hover:bg-skie p-5 border-rounded  border-2 rounded-full' onClick={() => { setRunning(true) }}>START</button>)

                        }
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <button className=' hover:bg-skie p-5 border-rounded border-2 rounded-full' onClick={() => { setTime(0) }}>RESET</button>
                    </motion.div>
                </div>
            </div>
           
        </>
    )
}