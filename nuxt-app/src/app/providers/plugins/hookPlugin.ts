import { useNotesStore } from "~/features/note/stores/useNotesStore";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.hook("app:mounted", async () => {
    const store = useNotesStore();
    await store.loadNotes();
  });
});
