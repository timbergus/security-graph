import { FC } from 'react'
import { Handle, Position } from 'reactflow'

type PermissionNodeProps = {
  data: {
    label: string
  }
}

export const PermissionNode: FC<PermissionNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-sky-600 bg-sky-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle type="source" position={Position.Right} />
  </>
)
