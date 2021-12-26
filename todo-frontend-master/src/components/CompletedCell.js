import React from "react";
import { connect } from "react-redux";
import { deleteTasks, updateTasks } from "../redux";
import { Button, Icon } from "semantic-ui-react";
const CompletedCell = ({ item, deleteTasks, updateTasks }) => {
  const handleClick = (item) => {
    item["status"] = 0;
    updateTasks(item, item.id);
  };
  return (
    <div>
      {item.task_name}
      <Button
        icon
        floated="right"
        color="blue"
        onClick={() => handleClick(item)}
      >
        <Icon name="undo" />
      </Button>
      <Button
        icon
        floated="right"
        color="red"
        onClick={() => deleteTasks(item.id)}
      >
        <Icon name="delete" />
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTasks: (taskId) => dispatch(deleteTasks(taskId)),
    updateTasks: (tasks, taskId) => dispatch(updateTasks(tasks, taskId)),
  };
};

export default connect(null, mapDispatchToProps)(CompletedCell);
