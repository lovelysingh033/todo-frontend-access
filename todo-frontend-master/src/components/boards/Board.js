import React from "react";
import { connect } from "react-redux";
import { deleteBoards } from "../../redux";
import { Card, Button, Grid } from "semantic-ui-react";
const Board = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => props.setSelectedboard(props.item)}
          >
            View
          </Button>
          <Button
            basic
            color="red"
            onClick={() => props.deleteBoards(props.item.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoards: (boardId) => dispatch(deleteBoards(boardId)),
  };
};

export default connect(null, mapDispatchToProps)(Board);
