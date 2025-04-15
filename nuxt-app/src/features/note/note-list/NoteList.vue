<template>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="note in store.notes" :key="note.id"
            class="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200">
            <div class="p-6">
                <h3 class="text-lg font-medium text-gray-900 line-clamp-2">{{ note.title }}</h3>
                <p class="mt-2 text-gray-600 line-clamp-3">{{ note.content }}</p>
                <time class="mt-3 block text-sm text-gray-500" :datetime="note.createdAt">
                    {{ formatDate(note.createdAt) }}
                </time>
                <ButtonEdit class="mt-4" :note="note" @start-edit="emit('start-edit', $event)"
                    @delete-note="emit('delete-note', $event)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Note } from "~/entities/note/model/note";
import { useNotesStore } from "~/features/note/stores/useNotesStore";
import { formatDate } from "~/shared/lib/formatDate";
import ButtonEdit from "~/shared/ui/button/ButtonEdit.vue";

const store = useNotesStore();
const emit = defineEmits<{
    (e: 'delete-note', id: string): void;
    (e: 'start-edit', note: Note): void;
}>();


</script>