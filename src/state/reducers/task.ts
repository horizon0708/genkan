import { TaskActionTypes } from "../actions/task";
import { createManyNestables } from '../models/task';

const initState: ITaskState = {
  nestables: [{
    id: "default board",
    title: "default board",
    parent: "ROOT",
    position: 0,
    children: []
  }]
};

export interface ITaskState {
  nestables: INestableItem[]
}

export interface INestableItem {
  id: string;
  position: number;
  title: string;
  parent: string;
  children: string[];
}

export const taskReducer = (
  state = initState,
  action: TaskActionTypes
): ITaskState => {
  const { type, payload } = action
  switch(type) {
    case "ADD_NESTABLE":

  }


  return state;
};
