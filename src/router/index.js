import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import EditNote from "@/views/EditNote.vue";
import ViewStats from "@/views/ViewStats.vue";
const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/edit/:id",
    name: "edit-note",
    component: EditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
