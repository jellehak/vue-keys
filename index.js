import { Keyboard, KeyboardBase, KeyboardDemo, KEYS, KEYCODES } from './src'
export * from './src'

function plugin (Vue) {
  Vue.component('Keyboard', Keyboard)
  Vue.component('KeyboardBase', KeyboardBase)
  Vue.component('KeyboardDemo', KeyboardDemo)

  Vue.prototype.$keys = KEYS
  Vue.prototype.$keycodes = KEYCODES
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
