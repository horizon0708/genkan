import React, { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { INestableItem } from '../../state/reducers/task';


type NestableProps = {
  level: number
  nestables: INestableItem[]
  nestableId: string
}


const Columns: FunctionComponent<{}> = ({ children }) => (<div className="columns">
  {children}
</div>)

const ColumnItem: FunctionComponent<{}> = ({ children }) => (<div className="columns">
  {children}
</div>)




export const Nestable: FunctionComponent<NestableProps> = ({ level, nestables, nestableId }) => {
  const nestable = nestables.find(n => n.id === nestableId)
  if(!nestable){
    return null
  }
  const childNestables = nestables.filter(n => nestable.children.includes(n.id))

  return ( 
    <ColumnItem>
      <Columns>
        {
          childNestables.map(cn => (
            <Nestable level={level+1} nestables={nestables} nestableId={cn.id} />
          ))
        }
      </Columns>
    </ColumnItem>
  )
}

