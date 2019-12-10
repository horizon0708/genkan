import React from "react"
import { useDispatch } from "react-redux"
import { addNestable } from '../../state/actions/task';


type AddButtonProps = {
  parent: string,
  title: string
}

export const AddButton = (props: AddButtonProps) => {
  const dispatch = useDispatch();
  const { parent, title } = props

  return (
    <button onClick={()=>dispatch(addNestable(parent, title))}>
      Add
    </button>  
  )
}