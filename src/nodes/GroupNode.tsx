import { FC } from 'react'
import { Handle, Position } from 'reactflow'

type GroupNodeProps = {
  data: {
    label: string
  }
}

export const GroupNode: FC<GroupNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-amber-600 bg-amber-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle id="socket-1" type="target" position={Position.Left} />
    <Handle id="socket-2" type="target" position={Position.Right} />
    <Handle id="socket-3" type="target" position={Position.Bottom} />
  </>
)
