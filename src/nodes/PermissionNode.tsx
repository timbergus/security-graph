import { FC } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import { NodeData } from '../types/Data'

type PermissionNodeProps = NodeProps<NodeData>

export const PermissionNode: FC<PermissionNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-sky-600 bg-sky-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle type="target" position={Position.Right} />
  </>
)
