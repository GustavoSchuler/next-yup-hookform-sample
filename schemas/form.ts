import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    age: Yup.number()
        .min(1, 'Invalid age')
        .max(4, 'Invalid Age')
        .required('Age is required'),
});

export { formSchema };