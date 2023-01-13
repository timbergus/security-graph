import { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'

const initialNodes = [
  { id: '1', position: { x: 200, y: 100 }, data: { label: 'Group' } },
  { id: '2', position: { x: 0, y: 0 }, data: { label: 'Permission 1' } },
  { id: '3', position: { x: 400, y: 0 }, data: { label: 'Permission 2' } },
  { id: '4', position: { x: 0, y: 200 }, data: { label: 'User 1' } },
  { id: '5', position: { x: 400, y: 200 }, data: { label: 'User 2' } },
]

const initialEdges = [
  { id: 'pg1', source: '2', target: '1' },
  { id: 'pg2', source: '3', target: '1' },
  { id: 'gu1', source: '1', target: '4' },
  { id: 'gu2', source: '1', target: '5' },
]

export const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="static h-screen w-screen">
      <div className="absolute bottom-0 left-0 h-[140px] w-[60px] bg-white" />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap draggable />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}
