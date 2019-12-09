import { INestableItem } from "../reducers/task";
import { Guid } from "guid-typescript";

export function createNestable(
  allItems: INestableItem[],
  parent: string,
  title: string = "default title",
  id: string = Guid.create().toString()
): INestableItem {
  const positions = allItems
    .filter(x => x.parent === parent)
    .map(x => x.position)
    .sort((a, b) => a - b);

  let position = 0;
  if (positions.length > 0) {
    position = positions[0];
  }

  return {
    position,
    id,
    title: title + ` ${position}`,
    parent,
    children: []
  };
}

export function addNestable(
  allItems: INestableItem[],
  parent: string,
  title: string = "default title",
  id: string = Guid.create().toString()
): INestableItem[] {
  const newNestable = createNestable(allItems, parent, title, id)
  const updatedNestable = allItems.map(x => {
    if(x.id === parent) {
      return {
        ...x,
        children: [ ...x.children, newNestable.id ]
      }
    }
    return x
  })
  return [...updatedNestable, newNestable]
}

export function createManyNestables(
  num: number,
  parent: string,
  initial: INestableItem[] = []
): INestableItem[] {
  if (num < 1) {
    return initial;
  }
  const nestable = createNestable(initial, parent);
  return createManyNestables(num - 1, parent, [...initial, nestable]);
}
