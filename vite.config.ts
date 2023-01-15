/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/security-graph/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      exclude: [
        'src/types',
        'src/**/*.d.ts',
        'src/**/*.atom.ts',
        'src/**/*.test.ts',
      ],
      all: true,
    },
  },
})
