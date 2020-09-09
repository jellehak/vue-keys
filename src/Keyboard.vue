<script>
export default {
  props: {
    combinations: {
      type: Array,
      default: () => ([
        { name: 'selectall', keys: [17, 65] },
        { name: 'selectall', keys: [91, 65] }
      ])
    }
  },

  data: (vm) => ({
    pressed: {
      shift: false, // 16
      ctrl: false, // 17
      alt: false, // 18
      meta: false // 91
    }
  }),

  methods: {
    keydown (e) {
      const { combinations } = this

      // Get all actual pressed keyCodes from event
      const pressedKeycodes = [
        e.keyCode,
        e.altKey && 18,
        e.ctrlKey && 17,
        e.metaKey && 91,
        e.shiftKey && 16]
        .filter(elem => elem) // Remove falses

      // Check matches with actions
      const compare = (array1, array2) => array1.length === array2.length && array1.sort().every(function (value, index) { return value === array2.sort()[index] })
      const matches = combinations.map(elem => {
        return compare(elem.keys, pressedKeycodes) && elem
      })
        .filter(elem => elem) // Remove falses

      // console.log(matches)

      // Tell parent
      if (matches.length) {
        this.$emit('action', matches[0])
        this.$emit('actions', matches)
      }
    },

    keyup (e) {
      // this.$emit('keyup', e)
      // const cmd = String.fromCharCode(e.keyCode).toLowerCase()
    },

    detectKeyCombinations (e) {
      // const
    }
  }
}
</script>

<template>
  <KeyboardBase
    :pressed.sync="pressed"
    @keydown="keydown"
    @keyup="keyup"
    v-on="$listeners"
  >
    <slot />
  </KeyboardBase>
</template>
