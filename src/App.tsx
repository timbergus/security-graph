import { useSetAtom } from 'jotai'
import { DragEvent, useCallback, useMemo, useState } from 'react'
import ReactFlow, {
  Background,
  Connection,
  Controls,
  MiniMap,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import { initialEdges } from './database/initialEdges'
import { initialNodes } from './database/initialNodes'

import { CreateNodeModal } from './components/CreateNode/CreateNode.modal'
import { isOpenAtom } from './components/CreateNode/createNode.atom'
import { ToolsPanel } from './components/ToolsPanel'

import { CompanyNode } from './nodes/CompanyNode'
import { GroupNode } from './nodes/GroupNode'
import { PermissionNode } from './nodes/PermissionNode'
import { UserNode } from './nodes/UserNode'

const nodeColor = ({ type }: Node) => {
  switch (type) {
    case 'GroupNode':
      return 'rgb(217 119 6)'
    case 'PermissionNode':
      return 'rgb(2 132 199)'
    case 'UserNode':
      return 'rgb(22 163 74)'
    case 'CompanyNode':
      return 'rgb(79 70 229)'
    default:
      return 'rgb(255,255,255)'
  }
}

export const App = () => {
  const nodeTypes = useMemo(
    () => ({ GroupNode, PermissionNode, UserNode, CompanyNode }),
    []
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const setIsOpen = useSetAtom(isOpenAtom)
  const [type, setType] = useState('')

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    const type = event.currentTarget.getAttribute('data-type')
    if (type) {
      setType(type)
    }
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOpen(true)
  }

  const handleCreate = (label: string) => {
    setIsOpen(false)
    setNodes((state) => [
      ...state,
      {
        id: label.toUpperCase(),
        position: { x: 0, y: 0 },
        data: { label },
        type,
      },
    ])
  }

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeTypes={nodeTypes}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <ToolsPanel onDragStart={handleDragStart} />
        <MiniMap nodeColor={nodeColor} zoomable pannable />
        <Controls className="bg-white" />
        <Background />
      </ReactFlow>
      <CreateNodeModal onCreate={handleCreate} />
    </div>
  )
}
