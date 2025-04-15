<template>
    <div class="mt-4 flex justify-end space-x-3">
        <button 
            @click="handleEdit"
            class="!px-4 !py-2 !mr-2 !text-xs rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow hover:shadow-md"
        >
            Редагувати
        </button>
        <button 
            @click="handleDelete"
            class="!px-4 !py-2 !text-xs rounded-md bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow hover:shadow-md"
        >
            Видалити
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    note: {
        id: string
    }
}>();

const emit = defineEmits<{
    (e: 'start-edit', note: any): void
    (e: 'delete-note', id: string): void
}>();

const handleEdit = () => emit('start-edit', props.note);
const handleDelete = () => emit('delete-note', props.note.id);
</script>