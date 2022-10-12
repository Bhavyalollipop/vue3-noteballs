<template>
  <div class="modal" :class="{ 'is-active': modelValue }">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modelCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Delete: <strong>{{ deleteItem.title }}</strong>
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('update:modelValue', false)"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this Note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end p-3">
        <button class="button is-danger is-small" @click="deleteNotes()">
          Yes, Delete
        </button>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useNotesStore } from "@/stores/notes";
import { onClickOutside } from "@vueuse/core";
/**
 * variables
 */
const modelCardRef = ref(null);
/**
 * props
 */
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  deleteItem: {
    type: Object,
    required: true,
  },
});
/**
 * stores
 */
const notesStore = useNotesStore();
/**
 * emitter
 */
const emits = defineEmits(["update:modelValue"]);
/**
 * methods
 */
const deleteNotes = () => {
  notesStore.deleteNote(props.deleteItem.id);
  emits("update:modelValue", false);
};
/**
 * use & methods
 */
onClickOutside(modelCardRef, () => emits("update:modelValue", false));
const handlerKeyEvents = (e) => {
  if (e.key == "Escape") emits("update:modelValue", false);
  else if (e.key == "Enter" || e.key == "Delete") deleteNotes();
};
/**
 * lifecyclehooks
 */
onMounted(() => {
  document.addEventListener("keyup", handlerKeyEvents);
});
onUnmounted(() => document.removeEventListener("keyup", handlerKeyEvents));
</script>
