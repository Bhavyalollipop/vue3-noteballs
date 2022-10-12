<template>
  <div class="card mb-3">
    <header class="card-header">
      <p class="card-header-title has-text-info">{{ item.title }}</p>
      <button
        class="card-header-icon"
        aria-label="more options"
        @click="item.isCollapse = !item.isCollapse"
      >
        <span class="icon">
          <font-awesome-icon icon="angle-down" />
        </span>
      </button>
    </header>
    <div
      class="card-body"
      :class="{ 'is-closed': item.isCollapse, 'is-open': !item.isCollapse }"
    >
      <div class="card-content">
        <div class="content">
          {{ item.content }}
          <div class="has-text-right has-text-grey-light mt-2">
            <small>{{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <router-link :to="`edit/${item.id}`" class="card-footer-item"
          >Edit</router-link
        >
        <!-- notesStore.deleteNote(item.id) -->
        <a
          href="#"
          class="card-footer-item"
          @click.prevent="$emit('deleteModalActive', item)"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const characterLength = computed(() => {
  let len = props.item.content.length;
  let description = len > 1 ? "characters" : "character";
  return `${len} ${description}`;
});
/**
 * Emits
 */
const emits = defineEmits(["deleteModalActive"]);
</script>