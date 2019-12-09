interface TestAction {
  type: "TEST_ACTION";
  payload: {
    id: string;
  };
}

interface AddNestableAction {
  type: "ADD_NESTABLE";
  payload: {
    parent: string;
    title: string;
  };
}
export function addNestable(parent: string, title: string): AddNestableAction {
  return {
    type: "ADD_NESTABLE",
    payload: {
      parent,
      title
    }
  };
}

export type TaskActionTypes = TestAction | AddNestableAction;
