const express = require('express');
const Task = require('../models/task');
const { taskDistructurization } = require('../helpers/task.js');

const router = express.Router();
function timeoutFunc(res, arg) {
  return setTimeout(() => {
    res.json(arg);
  }, 2000);
}

router.route('/add').post(async (req, res) => {
  const { taskName, isDone } = req.body;
  const task = await Task.create({ taskName, isDone });
  return res.json(taskDistructurization(task));
});
router.route('/del').delete(async (req, res) => {
  const { id } = req.body;
  await Task.deleteOne(id.id);
  timeoutFunc(res, { message: 'okay' });
});
router.route('/done').put(async (req, res) => {
  const { id, isDone } = req.body;
  await Task.findByIdAndUpdate(id, {
    $set: { isDone: !isDone },
  });
  const todo = await Task.findOne({ _id: id });
  res.json(taskDistructurization(todo));
});
router.route('/refresh').get(async (req, res) => {
  const refreshTask = await Task.find({});
  const taskForClient = refreshTask.map((e) => taskDistructurization(e));
  timeoutFunc(res, { taskForClient });
});
router.route('/edit').put(async (req, res) => {
  const { id, editedTaskName } = req.body;
  const todo = await Task.findByIdAndUpdate(
    id,
    {
      $set: { taskName: editedTaskName },
    },
    { new: true }
  );
  res.json(taskDistructurization(todo));
});
router.route('/search').post(async (req, res) => {
  const { searchEl } = req.body;
  const regex = new RegExp(searchEl, 'i');

  const tasks = await Task.find({
    $or: [{ taskName: regex }],
  });
  res.json({ searched: tasks });
});
module.exports = router;
