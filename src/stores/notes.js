import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import {
  collection,
  query,
  doc,
  setDoc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
const generalNotes = collection(db, "notes");
export const useNotesStore = defineStore("notesStore", {
  state: () => ({
    notes: [],
  }),
  actions: {
    getNotes() {
      const q = query(generalNotes, orderBy("id", "desc"));
      const unsubscribe = onSnapshot(generalNotes, (querySnapshot) => {
        this.notes = [];
        querySnapshot.forEach((doc) => {
          this.notes.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    },
    async addNote(newNote) {
      await setDoc(doc(generalNotes, newNote.id), newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((item) => item.id !== id);
    },
    editNote(note) {
      this.notes = this.notes.map((item) =>
        note.id === item.id ? note : item
      );
    },
  },
  getters: {
    getNoteFromId: (state) => {
      return (id) => state.notes.filter((note) => note.id === id)[0];
    },
    getStats: (state) => {
      return () => {
        const char = state.notes.reduce(
          (pV, item) => pV + item.content.length,
          0
        );

        return {
          notes: state.notes.length,
          char,
        };
      };
    },
  },
});
