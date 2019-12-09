import { INestableItem } from '../../state/reducers/task';
import React from "react"



type KanbanColumnProps = {
  nestables: INestableItem[]
}

export const KanbanColumn = (props: KanbanColumnProps) => {
  const {nestables} = props
  return (
    <div>
      {nestables.map(n => {
        return <div>

        </div>
      })}
    </div>
  )
}