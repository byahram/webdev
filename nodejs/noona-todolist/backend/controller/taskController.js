const Task = require("../model/Task");

const taskController = {};

// createTask
taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body; // front 값 가져오기
    const { userId } = req;
    const newTask = new Task({ task, isComplete, author: userId });
    await newTask.save();

    res.status(200).json({ status: "success", data: newTask }); // front로 response 데이터 보내기
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// getTasks
taskController.getTasks = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v").populate("author");

    res.status(200).json({ status: "success", data: taskList });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// HW: updateTask
taskController.updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateTask)
      throw new Error(`Could not find the task "${req.params.id}"`);

    // const updateTask = await Task.findById(req.params.id);
    // Object.keys(req.body).forEach((key) => {
    //   updateTask[key] = req.body[key];
    // });
    // await updateTask.save();

    res.status(200).json({ status: "success", data: updateTask });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// HW: deleteTask
taskController.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    if (!deleteTask)
      throw new Error(`Could not delete the task "${req.params.id}"`);

    res.status(200).json({ status: "success", data: deleteTask });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

module.exports = taskController;
