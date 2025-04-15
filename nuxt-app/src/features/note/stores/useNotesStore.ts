import { defineStore } from "pinia";
import type { Note } from "~/entities/note/model/note";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<Note[]>([]);

  const generateId = () =>
    Date.now().toString() + Math.floor(Math.random() * 1000).toString();

  const addNotes = (note: Omit<Note, "id" | "createdAt">) : void => {
    notes.value?.push({
      id: generateId(),
      createdAt: new Date().toISOString(),
      ...note,
    });
  };
  const deleteNotes = (id: string) => {
    notes.value = notes.value.filter((n) => n.id !== id);
    console.log("Working");
  };
  const updateNotes = (updatedNote: Note) : void => {
    const index = notes.value.findIndex((x) => x.id == updatedNote.id);
    if (index !== -1) {
      notes.value[index] = { ...updatedNote };
    }
  };
  const getNoteById = (id: string) => {
    return notes.value.find((x) => x.id == id);
  };
  const loadNotes = (): void => {
    const data = localStorage.getItem("notes");
    if (data) {
      notes.value = JSON.parse(data);
    }
  };
  watch(
    notes,
    (newNotes) => {
      localStorage.setItem("notes", JSON.stringify(newNotes));
    },
    { deep: true }
  );

  return {
    addNotes,
    deleteNotes,
    updateNotes,
    notes,
    loadNotes,
    getNoteById,
  };
});
