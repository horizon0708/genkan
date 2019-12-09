import React from "react";
import { useSelector } from "react-redux"
import { RootState } from '../../state/reducers/index';
import { INestableItem } from '../../state/reducers/task';


export const KanbanPage = (props: {}) => {
  const taskStore = useSelector((state: RootState) => state.task)

  return (
  <div>
    {
      taskStore.groups.map(x=>x.id)
    }
  </div>
  )
}

