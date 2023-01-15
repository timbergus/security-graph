import { describe, expect, it } from 'vitest'

import { schema } from './createNode.schema'

describe('The schema for create new node form', () => {
  it('should fail if it receives a number', () => {
    const { success } = schema.safeParse({ name: 1 })
    expect(success).toBe(false)
  })
  it('should success if it receives an string', () => {
    const { success } = schema.safeParse({ name: 'Cool name' })
    expect(success).toBe(true)
  })
})
