// Setup service worker
// Doc: https://mswjs.io/docs/api/setup-worker

import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
