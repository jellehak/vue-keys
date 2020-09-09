<script>
export default {
  data: (vm) => ({
    pressed: {
      shift: false,
      ctrl: false,
      alt: false,
      meta: false
    }
  }),

  created () {
    window.addEventListener('keydown', this.keydown)
    window.addEventListener('keyup', this.keyup)
  },
  destroyed () {
    window.removeEventListener('keydown', this.keydown)
    window.removeEventListener('keyup', this.keyup)
  },

  methods: {
    keydown (e) {
      const letter = String.fromCharCode(e.keyCode).toLowerCase()
      const { keyCode } = e

      this.updateModifierKeysState(e)

      // Tell parent
      this.$emit('keydown:letter', letter)
      this.$emit('keydown:code', keyCode)
      this.$emit('keydown', e)
    },

    keyup (e) {
      const letter = String.fromCharCode(e.keyCode).toLowerCase()
      const { keyCode } = e

      this.updateModifierKeysState(e)

      // Tell parent
      this.$emit('keyup:letter', letter)
      this.$emit('keyup:code', keyCode)
      this.$emit('keyup', e)
    },

    updateModifierKeysState (e) {
      this.pressed.shift = e.shiftKey
      this.pressed.ctrl = e.ctrlKey
      this.pressed.alt = e.altKey
      this.pressed.meta = e.metaKey

      // Tell parent
      this.$emit('update:pressed', this.pressed)
    }
  }
}
</script>

<template>
  <div>
    <slot />
  </div>
</template>
