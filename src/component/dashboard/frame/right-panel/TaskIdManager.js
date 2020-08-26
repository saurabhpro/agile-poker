import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import { createEmptyTaskForTeam } from '../../../utils/firebaseDb';
import database from '../../../Firebase';

const TaskIdManager = ({ team, role, setShowReset }) => {
  const [taskId, setTaskId] = React.useState();

  const [taskInputDisabled, setTaskInputDisabled] = React.useState(
    role === 'TEAM MEMBER',
  );

  const onChange = (event) => {
    setTaskId(event.target.value);
  };

  React.useEffect(() => {
    const unsubscribe = database
      .collection('result')
      .doc(team)
      .onSnapshot((doc) => {
        if (doc.data().taskId) {
          setTaskId(doc.data().taskId.toUpperCase());
          setTaskInputDisabled(true);
          setShowReset(true);
        }
      });

    return () => {
      unsubscribe();
    };
  }, [taskId, team, setShowReset]);

  /**
   * The PO or SM have powers to enter the task id which is required for voting
   * just to ensure better UX - only do it on ENTER press
   * @param {*} event
   */
  const onTaskEnter = (event) => {
    // if enter is not pressed don't do anything
    if (event.charCode !== 13) {
      return;
    }

    event.preventDefault();

    const task = event.target.value;
    // store to db
    createEmptyTaskForTeam(team, task);
    //refresh the ui
    setTaskInputDisabled(true);
    setTaskId(task.toUpperCase());
    setShowReset(true);
  };

  return (
    <div>
      {taskInputDisabled ? (
        <h2 className="text-center" style={{ color: 'turquoise' }}>
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
          label="Task Id"
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
  role: PropTypes.string.isRequired,
};

export default TaskIdManager;
