<template>
    <div class="!mb-2">
      <label :for="name" class="block text-sm font-medium text-gray-700 !mb-1">{{ label }}</label>
      <textarea
        :id="name"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        rows="3"
        class="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        :class="errorMessage ? 'border-red-500' : 'border-gray-300'"
      ></textarea>
      <span v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script setup>
  import { useField } from 'vee-validate';
  
  const props = defineProps({
    name: String,
    label: String,
    modelValue: String
  });
  
  const { errorMessage } = useField(() => props.name);
  </script>