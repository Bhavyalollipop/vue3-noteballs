<template>
  <div :class="`card has-background-${color}-dark p-4 mb-5`">
    <div class="field">
      <div class="control has-icons-right">
        <input
          v-model="modelValue.title"
          :class="`input is-${color} is-small`"
          type="text"
          placeholder="Title*"
          ref="noteTItleRef"
          @input="$emit('update:modelValue', modelValue)"
          maxlength="25"
          v-autofocus
        />
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue.content"
          :class="`textarea is-${color}`"
          placeholder="Note Content*"
          @input="$emit('update:modelValue', modelValue)"
          maxlength="100"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
/**
 * imports
 */
import { ref } from "@vue/reactivity";
import { vAutofocus } from "@/directives/vAutofocus";

/**
 * variables
 */
const noteTItleRef = ref("");

/**
 * props
 */
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
/**
 * methods
 */
const focusTextArea = () => {
  noteTItleRef.value.focus();
};
/**
 * emitter
 */
const emits = defineEmits(["update:modelValue"]);
/**
 * expose
 */
defineExpose({
  focusTextArea,
});
</script>