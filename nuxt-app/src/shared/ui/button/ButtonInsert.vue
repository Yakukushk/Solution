<template>
    <div>
        <button
        type="submit"
        class="inline-flex justify-center !mr-2 !py-2 !px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {{ isEditing ? 'Зберегти зміни' : 'Додати нотатку' }}
      </button>

      <button
        v-if="isEditing"
        type="button"
        @click="$emit('handleCancel')"
        class="inline-flex justify-center !py-2 !px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Скасувати
      </button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    isEditing : {
        type : Boolean,
        required: true
    }
});
</script>

<style scoped></style>