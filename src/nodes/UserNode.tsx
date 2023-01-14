import { FC } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import { NodeData } from '../types/Data'

type UserNodeProps = NodeProps<NodeData>

export const UserNode: FC<UserNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-green-600 bg-green-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle type="target" position={Position.Left} />
  </>
)
