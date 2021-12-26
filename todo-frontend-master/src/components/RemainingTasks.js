import React, { useEffect } from "react";
import { Icon, Table, Button, Segment } from "semantic-ui-react";
import RemainingCell from "./RemainingCell";
import { connect } from "react-redux";

const RemainingTasks = ({ tasksData, selectedboard }) => {
  return tasksData.loading ? (
    <h2>Loading tasks</h2>
  ) : tasksData.error ? (
    <h2>{tasksData.error}</h2>
  ) : (
    <Segment raised>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Remaining Tasks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tasksData &&
            tasksData.tasks &&
            tasksData.tasks.map((item) =>
              item.status === 0 ? (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <RemainingCell item={item} />
                  </Table.Cell>
                </Table.Row>
              ) : (
                ""
              )
            )}
        </Table.Body>
      </Table>
    </Segment>
  );
};

const mapStateToProps = (state) => {
  return {
    tasksData: state.task,
  };
};

export default connect(mapStateToProps)(RemainingTasks);
