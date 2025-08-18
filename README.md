# Task-Tracker-CLI

A simple CLI tool to manage tasks (add, update, delete, mark status, list).

---

## 📥 Installation

Clone this repository from GitHub and install globally:

```bash
git clone https://github.com/ziadMorjan/Task-Tracker-CLI.git
cd Task-Tracker-CLI
npm install 
````

Now you can run the CLI using the command:

```bash
task-cli
```

---

## 🚀 Usage Examples

Add a new task:

```bash
task-cli add "Buy groceries"
```

List all tasks:

```bash
task-cli list
```

List tasks by status:

```bash
task-cli list todo
task-cli list in-progress
task-cli list done
```

Update a task description:

```bash
task-cli update <taskId> "New description"
```

Delete a task:

```bash
task-cli delete <taskId>
```

Mark a task as in-progress:

```bash
task-cli mark-in-progress <taskId>
```

Mark a task as done:

```bash
task-cli mark-done <taskId>
```

---

## 📋 Available Commands

* `add "description"` → Add a new task
* `list` → List all tasks
* `list <status>` → List tasks filtered by status (`todo`, `in-progress`, `done`)
* `update <taskId> "new description"` → Update a task description
* `delete <taskId>` → Delete a task
* `mark-in-progress <taskId>` → Mark a task as in progress
* `mark-done <taskId>` → Mark a task as done

---

## 🖥 Example Outputs

Adding a task:

```$ task-cli add "Finish project report"
Task added successfully (ID: a1b2c3d4)
```

Listing tasks:

```$ task-cli list
[a1b2c3d4] Finish project report | todo | created: Mon Aug 18 2025 10:32:45 GMT+0000 (UTC)
```

Updating a task:

```$ task-cli update a1b2c3d4 "Finish project report (final version)"
Task updated successfully (ID: a1b2c3d4)
```

Marking a task done:

```$ task-cli mark-done a1b2c3d4
Task marked done successfully (ID: a1b2c3d4)
```

---

## 📌 Project Reference

This project is built as part of the [Task Tracker CLI project](https://roadmap.sh/projects/task-tracker) from [roadmap.sh](https://roadmap.sh).
