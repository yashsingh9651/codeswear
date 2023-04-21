import * as Yup from 'yup';
const Schema = Yup.object({
    name:Yup.string().min(2).max(25).required('Please Enter Your Valid Name'),
    email:Yup.string().email().required('Please Enter Your Valid Email'),
    password:Yup.string().min(1).required('Please Enter Your Message')
});
export default Schema;