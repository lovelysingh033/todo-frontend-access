import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBoards } from "../../redux";
import Board from "./Board";
import { Card, Grid } from "semantic-ui-react";

const Boards = ({ fetchBoards, boardsData, setSelectedboard, page }) => {
  useEffect(() => {
    fetchBoards();
  }, []);
  useEffect(() => {
    fetchBoards();
  }, [page]);

  return boardsData.loading ? (
    <h2>loading....</h2>
  ) : boardsData.error ? (
    <h2>{boardsData.error}</h2>
  ) : (
    <Grid>
      <Grid.Row columns={4}>
        {boardsData &&
          boardsData.boards &&
          boardsData.boards.slice(4 * (page - 1), 4 * page).map((item) => (
            <Grid.Column key={item.id}>
              <Board item={item} setSelectedboard={setSelectedboard} />
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    boardsData: state.board,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
