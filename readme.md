# Task Tracker CLI 

Task tracker is a project used to track and manage your tasks.

**Requirements:** https://roadmap.sh/projects/task-tracker

## Getting started
**1. Clone project**
```
git clone https://github.com/kvartsianyi/roadmap.sh_task-tracker-cli.git
```

**2. Link package directly from the project folder**
```
cd ./task-tracker-cli
npm link
```

## Commands

### Adding a New Task
*To add a new task, use the following command:*
```bash
task-cli add "<task_description>"
```

**Example:**
```bash
task-cli add "Buy groceries and cook dinner"
```

### Updating and Deleting Tasks
*To update an existing task, use:*
```bash
task-cli update <task_id> "<task_description>"
```
**Example:**
```bash
task-cli update 1 "Buy groceries and cook dinner"
```

*To delete a task, use:*
```bash
task-cli delete <task_id>
```

**Example:**
```bash
task-cli delete 1 
```

### Marking a Task as In Progress or Done
*To mark a task as in progress, use:*
```bash
task-cli mark-in-progress <task_id>
```

**Example:**
```bash
task-cli mark-in-progress 1 
```

*To mark a task as done, use:*
```bash
task-cli mark-done <task_id>
```

**Example:**
```bash
task-cli mark-done 1 
```

### Listing All Tasks
*To list all tasks, use:*
```bash
task-cli list
```

### Listing Tasks by Status
*You can list tasks by their status:*
```bash
task-cli list <status>
```
**Avaliable statuses**: `todo`, `in-progress` and `done`.

**Example:**
```bash
task-cli list in-progress
```