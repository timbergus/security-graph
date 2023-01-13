import { FC } from 'react'
import { Handle, Position, NodeProps } from 'reactflow'
import { NodeData } from '../types/Data'

type GroupNodeProps = NodeProps<NodeData>

export const GroupNode: FC<GroupNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-amber-600 bg-amber-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle id="socket-1" type="source" position={Position.Left} />
    <Handle id="socket-2" type="source" position={Position.Right} />
    <Handle id="socket-3" type="source" position={Position.Bottom} />
  </>
)
