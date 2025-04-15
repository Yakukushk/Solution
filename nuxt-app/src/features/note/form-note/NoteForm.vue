<template>
  <div class="bg-white shadow rounded-lg p-6 !mb-8">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <VInput name="title" label="Заголовок" v-model="title" />
      <VTextArea name="content" label="Зміст" v-model="content" />
      <VButton :is-editing="isEditing" @handleCancel="handleCancel" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { noteSchema } from '~/entities/note/lib/validators'
import { editKey } from '~/shared/constants/provideInjectKeys'
import VInput from '~/shared/ui/input/InputTitle.vue'
import VTextArea from '~/shared/ui/input/TextAreaContent.vue'
import type { Note } from '~/entities/note/model/note'
import VButton from '~/shared/ui/button/ButtonInsert.vue'

const isEditing = inject(editKey)

const props = defineProps<{ note: Note }>()

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: toTypedSchema(noteSchema),
  initialValues: props.note
})

const { value: title, errorMessage: errorTitleMessage } = useField<string>('title')
const { value: content, errorMessage: errorContentMessage } = useField<string>('content')

const emit = defineEmits<{
  (e: 'add-note', note: { title: string; content: string }): void
  (e: 'update-note', note: { title: string; content: string }): void
  (e: 'edit-cancel'): void
}>()

watch(() => props.note, (newNote) => {
  setValues(newNote)
}, { immediate: true })


const onSubmit = handleSubmit((values) => {
  if (isEditing.value) {
    emit('update-note', { ...values })
  } else {
    emit('add-note', { ...values })
    resetForm()
  }
})

const handleCancel = () => {
  emit('edit-cancel')
}
</script>