import React, { useState } from "react";
import { connect } from "react-redux";
import { createTasks } from "../redux";
import {
  Button,
  Input,
  Message,
  Segment,
  Header,
  Divider,
} from "semantic-ui-react";
const BoardView = ({ createTasks, selectedboard }) => {
  const [task, setTask] = useState({
    task_name: "",
    board_id: selectedboard.id,
  });

  const handleChange = (e) => {
    setTask((prevState) => ({
      ...prevState,
      task_name: e.target.value,
    }));
  };

  const handleClick = (task) => {
    console.log(task);
    setTask((prevState) => ({
      ...prevState,
      board_id: selectedboard.id,
    }));
    createTasks(task);
    setTask((prevState) => ({
      ...prevState,
      task_name: "",
    }));
  };

  return (
    <Segment raised>
      <Header as="h2">{selectedboard.name}</Header>
      <Divider />
      <div>
        <div>
          <Input
            placeholder="Task"
            value={task.task_name}
            type="text"
            onChange={handleChange}
            name="task_name"
            fluid
          />
        </div>
        <div>
          <Button
            color="green"
            style={{ margin: "1em 0 0 0" }}
            onClick={() => handleClick(task)}
          >
            Create
          </Button>
        </div>
      </div>
    </Segment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTasks: (task) => dispatch(createTasks(task)),
  };
};

export default connect(null, mapDispatchToProps)(BoardView);
