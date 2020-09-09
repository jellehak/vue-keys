<script>

export default {
  data: vm => ({
    down: null,
    pressed: {
      shift: false,
      ctrl: false,
      alt: false
    }
  }),
  methods: {
    onAction (e) {
      console.log(e)
      alert(`onAction: ${e.name}`)
    }
  }
}
</script>

<template>
  <div>
    <h1>KeyboardBase</h1>
    <p>pressed: {{ pressed }}</p>
    <p>down: {{ down }}</p>
    <KeyboardBase
      :pressed.sync="pressed"
      @keydown:code="down = $event"
      @keyup="down = null"
    >
      <slot />
    </KeyboardBase>

    <h1>Keyboard</h1>
    <Keyboard
      :actions="[
        { name: 'selectall', keys: [17, 65] },
        { name: 'selectall', keys: [91, 65] },
        { name: 'delete', keys: [$keys.backspace] }
      ]"
      @action="onAction"
    >
      Press ctrl + a
    </Keyboard>

    <h1>Global mixin</h1>
    <pre>{{ $keys }}</pre>
    <pre>{{ $keycodes }}</pre>
  </div>
</template>
