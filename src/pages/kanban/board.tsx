import { INestableItem } from "../../state/reducers/task"
import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"
import React from "react"

type KanbanBoardProps = {
  nestables: INestableItem[]
}

export const KanbanBoard = (props: KanbanBoardProps) => {
  const taskStore = useSelector((state: RootState) => state.task)
  const { nestables } = props
  return (
    <div className="columns">
      {nestables.map(n => {
        return <div className="column">

        </div>
      })}
    </div>
  )
}

