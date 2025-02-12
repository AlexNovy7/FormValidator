import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Это поле обязательно")
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Имя должно содержать только буквы"),

  age: yup
  // string,а не number т.к это требует тз
    .string()
    .test('is-number', 'Возраст должен быть числом', value => {
      return !value || !isNaN(Number(value));
    })
    .test('is-positive', 'Возраст должен быть положительным числом', value => {
      return value ? parseInt(value) > 0 : true;
    })
    .required("Это поле обязательно"),

  email: yup
    .string()
    .email("Неверный формат email")
    .required("Это поле обязательно"),
});