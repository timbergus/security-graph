import { useCallback, useMemo } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from 'reactflow'
import { GroupNode } from './nodes/GroupNode'
import { PermissionNode } from './nodes/PermissionNode'
import { UserNode } from './nodes/UserNode'
import { CompanyNode } from './nodes/CompanyNode'

const initialNodes = [
  {
    id: 'group-1',
    position: { x: 220, y: 50 },
    data: { label: 'Group' },
    type: 'GroupNode',
  },
  {
    id: 'permission-1',
    position: { x: 0, y: 0 },
    data: { label: 'Permission 1' },
    type: 'PermissionNode',
  },
  {
    id: 'permission-2',
    position: { x: 0, y: 100 },
    data: { label: 'Permission 2' },
    type: 'PermissionNode',
  },
  {
    id: 'user-1',
    position: { x: 400, y: 0 },
    data: { label: 'User 1' },
    type: 'UserNode',
  },
  {
    id: 'user-2',
    position: { x: 400, y: 100 },
    data: { label: 'User 2' },
    type: 'UserNode',
  },
  {
    id: 'company-1',
    position: { x: 100, y: 250 },
    data: { label: 'Company 1' },
    type: 'CompanyNode',
  },
  {
    id: 'company-2',
    position: { x: 300, y: 250 },
    data: { label: 'Company 2' },
    type: 'CompanyNode',
  },
]

const initialEdges = [
  {
    id: 'p1-g1',
    source: 'permission-1',
    sourceHandle: 'socket-1',
    target: 'group-1',
  },
  {
    id: 'p2-g1',
    source: 'permission-2',
    sourceHandle: 'socket-1',
    target: 'group-1',
  },
  {
    id: 'u1-g1',
    source: 'user-1',
    sourceHandle: 'socket-2',
    target: 'group-1',
  },
  {
    id: 'u2-g1',
    source: 'user-2',
    sourceHandle: 'socket-2',
    target: 'group-1',
  },
  {
    id: 'c1-g1',
    source: 'company-1',
    sourceHandle: 'socket-3',
    target: 'group-1',
  },
  {
    id: 'c2-g1',
    source: 'company-2',
    sourceHandle: 'socket-3',
    target: 'group-1',
  },
]

export const App = () => {
  const nodeTypes = useMemo(
    () => ({ GroupNode, PermissionNode, UserNode, CompanyNode }),
    []
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

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
      >
        <Panel position="top-left" className="bg-white p-10 font-bold">
          Security Graph
        </Panel>
        <MiniMap zoomable pannable />
        <Controls className="bg-white" />
        <Background />
      </ReactFlow>
    </div>
  )
}
