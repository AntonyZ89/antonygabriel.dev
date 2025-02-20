import datingApp from './dating-app'
import deliveryApp from './delivery-app'
import type { Project } from '~/types'

export default {
  type: 'folder',
  name: 'flutter',
  items: [datingApp, deliveryApp],
} satisfies Project
