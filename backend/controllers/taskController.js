const Task = require("../models/Task");

//
// --- CREATE TASK ---
// Creates a new task for the logged-in user
//
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({ error: "Title is required" }); // Bad Request
    }

    // Create new task
    const task = await Task.create({
      user: req.user._id,
      title,
      description,
      dueDate,
      priority,
      status,
    });

    return res.status(201).json(task); // Created
  } catch (err) {
    next(err);
  }
};

//

// Task sorting according to date
// exports.getTasks = async (req, res, next) => {
//   try {
//     const { order = "asc" } = req.query; // default asc
//     const isAsc = order === "asc";

//     const tasks = await Task.aggregate([
//       { $match: { user: req.user._id } },
//       {
//         $addFields: {
//           sortDate: {
//             $ifNull: [
//               "$dueDate",
//               isAsc ? new Date("9999-12-31") : new Date("0001-01-01")
//             ]
//           }
//         }
//       },
//       { $sort: { sortDate: isAsc ? 1 : -1 } },
//       { $project: { sortDate: 0 } }
//     ]);

//     res.json(tasks);
//   } catch (err) {
//     next(err);
//   }
// };



// --- GET TASKS ---
// Returns all tasks for the logged-in user, sorted by creation date (newest first)
//
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json(tasks); // OK
  } catch (err) {
    next(err);
  }
};

//
// --- UPDATE TASK ---
// Updates a task if it belongs to the logged-in user
//
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

    if (!task) {
      return res.status(404).json({ error: "Task not found" }); // Not Found
    }

    // Update allowed fields
    const updates = ["title", "description", "dueDate", "priority", "status"];
    updates.forEach((field) => {
      if (field in req.body) task[field] = req.body[field];
    });

    await task.save();
    return res.status(200).json(task); // OK
  } catch (err) {
    next(err);
  }
};

//
// --- DELETE TASK ---
// Deletes a task if it belongs to the logged-in user
//
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" }); // Not Found
    }

    return res.status(200).json({ message: "Task deleted successfully" }); // OK
  } catch (err) {
    next(err);
  }
};
