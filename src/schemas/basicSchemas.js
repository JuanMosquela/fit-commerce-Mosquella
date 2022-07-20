import * as yup from 'yup';

export const basicSchemas = yup.object().shape({
   
    firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('This field is required'),
    lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('This field is required'),
    email: yup.string().email('Please enter a valid email').required('This field is requiered')
})