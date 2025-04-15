import * as yup from "yup";

export const noteSchema = yup.object({
  title: yup.string().required("Назва обов'язкова").max(100, 'Максимум 100 символів'),
  content: yup.string().required("Контент обов'язковий").max(1000, 'Максимум 1000 символів'),
});
