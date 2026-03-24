import React from 'react';

const TaskListNumber = ({ data }) => {
    console.log(data,"taskList");

    return (
        <div className="grid gap-5 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl py-6 px-9 bg-blue-400 flex flex-col items-center">
                <h2 className="text-3xl font-bold">{data.taskNumber.newTask}</h2>
                <h3 className="text-xl mt-1 font-medium">New Task</h3>
            </div>

            <div className="rounded-xl py-6 px-9 bg-green-400 flex flex-col items-center">
                <h2 className="text-3xl font-bold">{data.taskNumber.completed}</h2>
                <h3 className="text-xl mt-1 font-medium">Completed Task</h3>
            </div>

            <div className="rounded-xl py-6 px-9 bg-yellow-400 flex flex-col items-center">
                <h2 className="text-3xl font-bold">{data.taskNumber.active}</h2>
                <h3 className="text-xl mt-1 font-medium">Accepted Task</h3>
            </div>

            <div className="rounded-xl py-6 px-9 bg-red-400 flex flex-col items-center">
                <h2 className="text-3xl font-bold">{data.taskNumber.failed}</h2>
                <h3 className="text-xl mt-1 font-medium">Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskListNumber;