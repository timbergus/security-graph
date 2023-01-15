import { describe, expect, it } from 'vitest'

import { initialNodes } from './initialNodes'

describe('Initial edges', () => {
  it('should be 7', () => {
    expect(initialNodes.length).toBe(7)
  })
})
