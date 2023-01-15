import { DragEvent, FC } from 'react'
import { Panel } from 'reactflow'

import { NodeType } from '../database/initialNodes'

type ToolsPanelProps = {
  onDragStart: (event: DragEvent<HTMLDivElement>) => void
}

export const ToolsPanel: FC<ToolsPanelProps> = ({ onDragStart }) => (
  <Panel position="top-left" className="bg-white p-10 font-bold">
    <h1>Security Graph</h1>
    <div className="flex gap-1">
      <div
        data-testid="group-node-tool"
        data-type={NodeType.GroupNode}
        className="h-4 w-4 cursor-grab bg-amber-600"
        onDragStart={onDragStart}
        draggable
      />
      <div
        data-testid="permission-node-tool"
        data-type={NodeType.PermissionNode}
        className="h-4 w-4 cursor-grab bg-sky-600"
        onDragStart={onDragStart}
        draggable
      />
      <div
        data-testid="user-node-tool"
        data-type={NodeType.UserNode}
        className="h-4 w-4 cursor-grab bg-green-600"
        onDragStart={onDragStart}
        draggable
      />
      <div
        data-testid="company-node-tool"
        data-type={NodeType.CompanyNode}
        className="h-4 w-4 cursor-grab bg-indigo-600"
        onDragStart={onDragStart}
        draggable
      />
    </div>
  </Panel>
)
