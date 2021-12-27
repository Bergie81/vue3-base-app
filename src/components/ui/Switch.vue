<template>
  <SwitchGroup as="div" class="flex justify-between items-center">
    <Switch
      :checked="isChecked"
      @click="$emit('update:isChecked', emitEvent)"
      @keydown.space="$emit('update:isChecked', emitEvent)"
      @keydown.enter="$emit('update:isChecked', emitEvent)"
      :class="isChecked ? 'bg-cyan-500' : 'bg-gray-200'"
      class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 mr-5"
    >
      <!-- SCREEN READER -->
      <span class="sr-only">Toggle Button</span>
      <span
        :class="isChecked ? 'translate-x-5' : 'translate-x-0'"
        class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      ></span>
    </Switch>
    <div class="flex-grow flex flex-col">
      <SwitchLabel as="h2" class="text-sm font-medium text-gray-900" passive
        >Awesome Toggle Button</SwitchLabel
      >
      <SwitchDescription as="p" class="text-sm text-gray-500">
        Click mouse button or press spacebar or enter to see this in action!
      </SwitchDescription>
    </div>
  </SwitchGroup>
</template>

<script>
import {
  Switch,
  SwitchLabel,
  SwitchGroup,
  SwitchDescription,
} from "@headlessui/vue";
export default {
  name: "BaseSwitch",
  components: { Switch, SwitchGroup, SwitchLabel, SwitchDescription },
  props: {
    isChecked: Boolean,
  },
  computed: {
    emitEvent() {
      return !this.isChecked;
    },
  },
};
</script>
