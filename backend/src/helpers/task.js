const taskDistructurization = ({ _id, taskName, isDone }) => ({
  id: _id,
  taskName,
  isDone,
});

module.exports = { taskDistructurization };
