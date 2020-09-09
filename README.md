Vue components for interacting with a keyboard

# Installation
```npm i vue-keys```

```
import vueKeys from 'vue-keys'
Vue.use(vueKeys)
```

# Usages

```html
<Keyboard
    :actions="[
    { name: 'selectall', keys: [17, 65] },
    { name: 'selectall', keys: [91, 65] },
    ]"
    @action="onAction"
/>
```

For more info see [here](src/KeyboardDemo.vue)
