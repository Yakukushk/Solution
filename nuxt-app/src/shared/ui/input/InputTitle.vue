<template>
    <div class="!mb-2">
      <label :for="name" class="block text-sm font-medium text-gray-700 !mb-1">{{ label }}</label>
      <input
        :id="name"
        :name="name"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md shadow-sm"
        :class="errorMessage ? 'border-red-500' : 'border-gray-300'"
      />
      <span v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script setup>
  import { useField } from 'vee-validate';
  
  const props = defineProps({
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    modelValue: String
  });
  
  const { errorMessage } = useField(() => props.name);
  </script>