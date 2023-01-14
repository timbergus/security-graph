import { Edge } from 'reactflow'

export const initialEdges: Edge[] = [
  {
    id: 'p1-g1',
    source: 'group-1',
    sourceHandle: 'socket-1',
    target: 'permission-1',
  },
  {
    id: 'p2-g1',
    source: 'group-1',
    sourceHandle: 'socket-1',
    target: 'permission-2',
  },
  {
    id: 'u1-g1',
    source: 'group-1',
    sourceHandle: 'socket-2',
    target: 'user-1',
  },
  {
    id: 'u2-g1',
    source: 'group-1',
    sourceHandle: 'socket-2',
    target: 'user-2',
  },
  {
    id: 'c1-g1',
    source: 'group-1',
    sourceHandle: 'socket-3',
    target: 'company-1',
  },
  {
    id: 'c2-g1',
    source: 'group-1',
    sourceHandle: 'socket-3',
    target: 'company-2',
  },
]
