import React from 'react'
// import './AllTask.css' // Make sure to import the CSS

const AllTask = () => {
    const tasks = [
        { name: "Jatin", task: "Make a UI Design", status: "Pending" },
        { name: "Rahul", task: "Develop Login Page", status: "Done" },
        { name: "Sita", task: "Fix Bugs", status: "In Progress" },
        { name: "Anita", task: "Design Landing Page", status: "Pending" },
        { name: "Ravi", task: "Test Dashboard", status: "Done" },
        { name: "Priya", task: "Update Docs", status: "Pending" },
        { name: "Kiran", task: "Setup CI/CD", status: "In Progress" },
        { name: "Neha", task: "Update Styles", status: "Pending" },
    ]

    return (
        <div className="bg-[#1c1c1c] p-4 rounded-lg mt-5 max-h-96 hidden-scrollbar">
            {tasks.map((task, index) => (
                <div
                    key={index}
                    className="bg-red-500 mb-3 py-2 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg"
                >
                    <h2 className="font-semibold text-white mb-1 sm:mb-0">{task.name}</h2>
                    <h3 className="text-white mb-1 sm:mb-0">{task.task}</h3>
                    <h5 className="text-white font-medium">{task.status}</h5>
                </div>
            ))}
        </div>
    )
}

export default AllTask