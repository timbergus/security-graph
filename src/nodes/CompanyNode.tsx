import { FC } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

import { NodeData } from '../types/Data'

type CompanyNodeProps = NodeProps<NodeData>

export const CompanyNode: FC<CompanyNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-indigo-600 bg-indigo-400 px-8 py-4 text-white">
      <p>{data.label}</p>
    </div>
    <Handle type="target" position={Position.Top} />
  </>
)
