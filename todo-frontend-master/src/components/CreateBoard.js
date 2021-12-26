import React, { useState } from "react";
import { connect } from "react-redux";
import { createBoards } from "../redux";
import { Button, Card, Input } from "semantic-ui-react";
const CreateBoard = ({ createBoards }) => {
  const [board, setBoard] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setBoard((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleClick = (board) => {
    console.log(board);
    createBoards(board);
    setBoard({
      name: "",
    });
  };
  return (
    <Card fluid>
      <Card.Content>
        <Input
          placeholder="New Board name"
          fluid
          value={board.name}
          type="text"
          onChange={handleChange}
          name="name"
        ></Input>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="green"
          floated="right"
          onClick={() => handleClick(board)}
        >
          Create
        </Button>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBoards: (boards) => dispatch(createBoards(boards)),
  };
};

export default connect(null, mapDispatchToProps)(CreateBoard);
