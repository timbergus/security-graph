import { Node } from 'reactflow'
import { NodeData } from '../types/Data'

export enum NodeType {
  GroupNode = 'GroupNode',
  PermissionNode = 'PermissionNode',
  UserNode = 'UserNode',
  CompanyNode = 'CompanyNode',
}

export const initialNodes: Node<NodeData>[] = [
  {
    id: 'group-1',
    position: { x: 220, y: 50 },
    data: { label: 'Group' },
    type: NodeType.GroupNode,
  },
  {
    id: 'permission-1',
    position: { x: 0, y: 0 },
    data: { label: 'Permission 1' },
    type: NodeType.PermissionNode,
  },
  {
    id: 'permission-2',
    position: { x: 0, y: 100 },
    data: { label: 'Permission 2' },
    type: NodeType.PermissionNode,
  },
  {
    id: 'user-1',
    position: { x: 400, y: 0 },
    data: { label: 'User 1' },
    type: NodeType.UserNode,
  },
  {
    id: 'user-2',
    position: { x: 400, y: 100 },
    data: { label: 'User 2' },
    type: NodeType.UserNode,
  },
  {
    id: 'company-1',
    position: { x: 100, y: 250 },
    data: { label: 'Company 1' },
    type: NodeType.CompanyNode,
  },
  {
    id: 'company-2',
    position: { x: 300, y: 250 },
    data: { label: 'Company 2' },
    type: NodeType.CompanyNode,
  },
]
