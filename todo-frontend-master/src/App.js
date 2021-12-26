import React, { useState, useEffect } from "react";
import Boards from "./components/boards/Boards";

import { connect } from "react-redux";
import { fetchTasks } from "./redux";

import BoardView from "./components/BoardView";
import CompletedTask from "./components/CompletedTasks";
import RemainingTask from "./components/RemainingTasks";
import CreateBoard from "./components/CreateBoard";
import BoardPagination from "./components/BoardPagination";
import { Divider, Header, Grid } from "semantic-ui-react";

const style = {
  h1: {
    margin: "1em",
  },
  createButton: {
    margin: "0 0 0 1em",
  },
};

function App(props) {
  const [selectedboard, setSelectedboard] = useState({
    id: 1,
    name: "Board 1",
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    props.fetchTasks(selectedboard.id);
  }, [selectedboard]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header
              as="h1"
              style={style.h1}
              content="TODO"
              textAlign="center"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={12}>
            <Boards setSelectedboard={setSelectedboard} page={page} />
          </Grid.Column>
          <Grid.Column width={4}>
            <CreateBoard></CreateBoard>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <BoardPagination setPage={setPage} page={page} />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row columns={3}>
          <Grid.Column width={6}>
            <RemainingTask selectedboard={selectedboard} />
          </Grid.Column>
          <Grid.Column width={4}>
            <BoardView selectedboard={selectedboard}></BoardView>
          </Grid.Column>
          <Grid.Column width={6}>
            <CompletedTask selectedboard={selectedboard} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: (boardId) => dispatch(fetchTasks(boardId)),
  };
};

export default connect(null, mapDispatchToProps)(App);
