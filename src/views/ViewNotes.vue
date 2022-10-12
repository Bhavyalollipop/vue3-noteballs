<template>
  <div class="notes">
    <AddEditNote v-model="note" ref="addEditNoteRef" color="info">
      <template #buttons>
        <button
          class="button is-link has-background-info is-small"
          :disabled="isDisabled"
          @click.prevent="addNewNote()"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <Note
      v-for="(item, index) in notesStore.notes"
      :key="item.id"
      :item="item"
      @deleteModalActive="(val) => deleteModalTrigger(val)"
    />
    <DeleteModal v-model="showModal" :deleteItem="deleteItem" />
  </div>
</template>
<script setup>
/**
 * imports
 */
import { ref, watch } from "vue";
import { computed } from "@vue/runtime-core";
import Note from "./Note.vue";
import AddEditNote from "../components/AddEditNote.vue";
import { useNotesStore } from "@/stores/notes";
import { useWatchCharacters } from "@/use/useWatchers";
import DeleteModal from "@/components/DeleteModal.vue";
/**
 * stores
 */
const notesStore = useNotesStore();
/**
 * variables
 */
const emptyNote = {
  id: "",
  title: "",
  content: "",
  isCollapse: false,
};
const note = ref({ ...emptyNote });
const deleteItem = ref({ ...emptyNote });
const addEditNoteRef = ref(null);
const showModal = ref(false);
/**
 * methods and stores
 */
const isDisabled = computed(() => {
  return !(note.value.title.trim() && note.value.content.trim());
});

const addNewNote = () => {
  let currentDate = new Date().getTime();
  notesStore.addNote({ ...note.value, id: currentDate.toString() });
  note.value = { ...emptyNote };
  addEditNoteRef.value.focusTextArea();
};

const deleteModalTrigger = (item) => {
  showModal.value = true;
  deleteItem.value = item;
};
notesStore.getNotes();
/**
 * use
 */
useWatchCharacters(note, 100);
</script>

<style lang="css">
.card-body.is-closed {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
}
.card-body.is-open {
  max-height: 500px;
  transition: max-height 0.25s ease-in;
}
</style>