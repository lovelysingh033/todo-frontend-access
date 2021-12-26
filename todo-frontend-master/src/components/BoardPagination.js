import React, { useState } from "react";
import { Pagination } from "semantic-ui-react";
import { connect } from "react-redux";

function BoardPagination({ boardsData, setPage, page }) {
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={boardsData.boards.length / 4}
      activePage={page}
      onPageChange={(e, { activePage }) => setPage(activePage)}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    boardsData: state.board,
  };
};
export default connect(mapStateToProps)(BoardPagination);
