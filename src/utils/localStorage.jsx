const employees = [
    {
        "id": "EMP001",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Report",
                "taskDescription": "Prepare monthly sales report",
                "taskDate": "2026-03-22",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Meeting with client ABC",
                "taskDate": "2026-03-20",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Update CRM",
                "taskDescription": "Update customer database",
                "taskDate": "2026-03-18",
                "category": "Database"
            }
        ]
    },
    {
        "id": "EMP002",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Banner",
                "taskDescription": "Create homepage banner",
                "taskDate": "2026-03-23",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Bug",
                "taskDescription": "Resolve login issue",
                "taskDate": "2026-03-19",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Code Review",
                "taskDescription": "Review team code",
                "taskDate": "2026-03-17",
                "category": "Development"
            }
        ]
    },
    {
        "id": "EMP003",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Blog",
                "taskDescription": "Write tech blog post",
                "taskDate": "2026-03-24",
                "category": "Content"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "SEO Optimization",
                "taskDescription": "Optimize website SEO",
                "taskDate": "2026-03-21",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Email Campaign",
                "taskDescription": "Send newsletter",
                "taskDate": "2026-03-19",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": "EMP004",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Server Check",
                "taskDescription": "Monitor server uptime",
                "taskDate": "2026-03-22",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backup Data",
                "taskDescription": "Backup company data",
                "taskDate": "2026-03-20",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Security Audit",
                "taskDescription": "Check system vulnerabilities",
                "taskDate": "2026-03-18",
                "category": "Security"
            }
        ]
    },
    {
        "id": "EMP005",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Recruitment",
                "taskDescription": "Interview candidates",
                "taskDate": "2026-03-25",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Onboarding",
                "taskDescription": "Onboard new hires",
                "taskDate": "2026-03-21",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Policy Update",
                "taskDescription": "Update HR policies",
                "taskDate": "2026-03-19",
                "category": "HR"
            }
        ]
    }
]

const admin = [
    {
        "id": "ADMIN001",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }
}