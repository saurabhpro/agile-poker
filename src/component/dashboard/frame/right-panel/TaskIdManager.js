import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import { createEmptyTaskForTeam } from '../../../utils/firebaseDb';
import database from '../../../Firebase';

const TaskIdManager = ({ team, role }) => {
  const [taskId, setTaskId] = React.useState();

  const [taskInputDisabled, setTaskInputDisabled] = React.useState(
    role === 'TEAM MEMBER',
  );

  const onChange = (event) => {
    setTaskId(event.target.value);
  };

  React.useEffect(() => {
    const observer = database
      .collection('result')
      .doc(team)
      .onSnapshot((doc) => {
        setTaskId(doc.data().taskId?.toUpperCase());
      });

    return () => {
      observer();
    };
  }, [taskId, team]);

  const onTaskEnter = (event) => {
    // if enter is not pressed don't do anything
    if (event.charCode !== 13) {
      return;
    }

    event.preventDefault();

    const task = event.target.value;
    createEmptyTaskForTeam(team, task);
    setTaskId(task.toUpperCase());

    setTaskInputDisabled(true);
  };

  return (
    <div>
      {taskInputDisabled ? (
        <h2 className="text-center" style={{ color: 'red' }}>
          {taskId}
        </h2>
      ) : (
        <TextField
          variant="outlined"
          margin="normal"
          required
          onChange={onChange}
          fullWidth
          id="taskId"
          //label="Task Id"
          name="taskId"
          autoFocus
          //disabled={taskInputDisabled}
          onKeyPress={onTaskEnter}
          placeholder={taskId}
        />
      )}
    </div>
  );
};

TaskIdManager.propTypes = {
  team: PropTypes.string.isRequired,
};

export default TaskIdManager;
