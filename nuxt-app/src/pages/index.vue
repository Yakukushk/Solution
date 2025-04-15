<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <div class="!max-w-7xl !mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <h1
                        class="text-2xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.600),theme(colors.gray.400),theme(colors.gray.600),theme(colors.gray.800))] bg-[length:200%_auto] animate-gradient !mb-8">
                        Нотатки
                    </h1>
                    <section>
                        <NoteForm :note="objNote" @add-note="store.addNotes" @update-note="store.updateNotes"
                            @edit-cancel="resetForm" />
                    </section>
                    <section>
                        <NoteList @delete-note="store.deleteNotes" @start-edit="startEdit" :notes="store.notes" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNotesStore } from '~/features/note/stores/useNotesStore'
//@ts-ignore
import NoteForm from '~/features/note/form-note/NoteForm.vue'
//@ts-ignore
import NoteList from '~/features/note/note-list/NoteList.vue'
import { editKey } from '~/shared/constants/provideInjectKeys'
const objNote = ref({
    title: '',
    content: ''
});

const editingId = ref(null);
const store = useNotesStore();
const isEditing = ref<boolean>(false);
provide(editKey, isEditing)


const startEdit = (note) => {
    editingId.value = note.id;
    isEditing.value = true;
    objNote.value = { ...note };
};

const resetForm = () => {
    objNote.value = { title: '', content: '' };
    isEditing.value = false;
    editingId.value = null;
}
</script>

<style scoped></style>