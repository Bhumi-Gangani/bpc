import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth";


const Signup = () => {

    const dispatch = useDispatch()

    //==> Success and error callbacks <==
    const successCallback = () => {
        console.log('success');
    }

    const errorCallback = () => {
        console.log('error');
    }


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').trim().required('Email required'),
        password: Yup.string().trim().required('Password required')
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                email: values.email,
                password: values.password
            }
            console.log('payload', payload)
            dispatch(signUp(payload, successCallback, errorCallback))
        }
    })

    const { values, handleChange, handleBlur, touched, errors, handleSubmit } = formik


    return (
        <>
            <div className="auth-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                    <br />
                    {touched.phone && errors.phone && <span className='error'>{errors.phone}</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && errors.password && <span className='error'>{errors.password}</span>}

                    <br />

                    <button type="primary" className="signin-btn">Signup</button>
                </form>
                {/* <Link to='/'> <h4 className="forgot-password-title">Signup</h4></Link> */}
            </div>
        </>
    )
}

export default Signup