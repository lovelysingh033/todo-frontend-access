import React from "react";
import { Icon, Table, Button, Segment } from "semantic-ui-react";
import CompletedCell from "./CompletedCell";
import { connect } from "react-redux";
const CompletedTasks = ({ tasksData }) => {
  return (
    <Segment raised>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Completed Tasks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tasksData &&
            tasksData.tasks &&
            tasksData.tasks.map((item) =>
              item.status === 1 ? (
                <Table.Row positive key={item.id}>
                  <Table.Cell>
                    <CompletedCell item={item} />
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

export default connect(mapStateToProps)(CompletedTasks);
