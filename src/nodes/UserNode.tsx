import { FC } from 'react'
import { Handle, Position } from 'reactflow'

type UserNodeProps = {
  data: {
    label: string
  }
}

export const UserNode: FC<UserNodeProps> = ({ data }) => (
  <>
    <div className="rounded-xl border-4 border-green-600 bg-green-400 px-8 py-4">
      <p>{data.label}</p>
    </div>
    <Handle type="source" position={Position.Left} />
  </>
)
