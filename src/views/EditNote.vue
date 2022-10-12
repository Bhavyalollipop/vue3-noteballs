<template>
  <AddEditNote v-model="note" color="success">
    <template #buttons>
      <router-link class="button is-light is-small mr-2" to="/">
        Cancel
      </router-link>
      <button
        class="button is-link has-background-success is-small"
        :disabled="isDisabled"
        @click.prevent="editNote()"
      >
        Edit Note
      </button>
    </template>
  </AddEditNote>
</template>
<script setup>
/**
 * imports
 */
import { ref } from "@vue/reactivity";
import AddEditNote from "../components/AddEditNote.vue";
import { useNotesStore } from "@/stores/notes";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { router } from "../router";
/**
 * router
 */
const route = useRoute();
/**
 * variable
 */
const emptyNote = {
  id: "",
  title: "",
  content: "",
  isCollapse: false,
};
const note = ref({ ...emptyNote });
/**
 * stores
 */
const notesStore = useNotesStore();
note.value = notesStore.getNoteFromId(route.params.id);
/**
 * methods and stores
 */
const isDisabled = computed(() => {
  return !(note.value.title.trim() && note.value.content.trim());
});
const editNote = () => {
  notesStore.editNote(note);
  router.push("/");
};
</script>