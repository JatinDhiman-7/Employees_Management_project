import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const TaskList = ({ data }) => {
    console.log(data)
    return (
        <div id="tasklist" className=" w-full mt-10  grid gap-5 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList