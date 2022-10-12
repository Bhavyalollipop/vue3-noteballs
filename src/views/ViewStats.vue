<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ stats.notes }}</td>
        </tr>
        <tr>
          <td>Number of character (of all notes)</td>
          <td>{{ stats.char }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      placeholder="Do you like Notesballs??"
      v-autofocus
      v-model="textBox"
      maxlength="25"
    />
  </div>
</template>
<script setup>
/**
 * imports
 */
import { ref } from "@vue/reactivity";
import { useNotesStore } from "@/stores/notes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchers";

/**
 * variables
 */
const stats = ref({
  notes: 0,
  char: 0,
});
const textBox = ref("");
/**
 * stores
 */
const notesStore = useNotesStore();
stats.value = notesStore.getStats();
/**
 * use
 */

useWatchCharacters(textBox, 25);
</script>

