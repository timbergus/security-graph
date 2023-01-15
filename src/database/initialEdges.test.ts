import { describe, expect, it } from 'vitest'

import { initialEdges } from './initialEdges'

describe('Initial edges', () => {
  it('should be 6', () => {
    expect(initialEdges.length).toBe(6)
  })
})
