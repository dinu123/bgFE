"use client"
import { useRouter } from 'next/navigation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FaUser, FaLock } from 'react-icons/fa'; 
import Image from 'next/image';
import useAuth from '../hooks/useAuth';

const LoginForm = () => {
    const { login } = useAuth();
    const router = useRouter();

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = (values, { setSubmitting }) => {
        const user = login(values.username, values.password);
        if (user) {
            switch (user.role) {
                case 'admin':
                    router.push('/admin/admin-dashboard');
                    break;
                case 'client':
                    router.push('/client/client-dashboard');
                    break;
                case 'candidate':
                    router.push('/candidates/condidate-fill-form');
                    break;
                case 'team':
                    router.push('/internal-team/data-entry');
                    break;
                default:
                    alert('Invalid role');
            }
        } else {
            alert('Invalid credentials');
        }
        setSubmitting(false);
    };

    return (
        <>
            <div className="position-absolute top-0 start-0 mt-3 ms-3">
                <Image
                    src="/logo.jpeg"
                    alt="Company Logo"
                    width={200}
                    height={50}
                />
            </div>
            <div>
                <div className="container-fluid d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8">
                            <div className="card h-100 shadow" style={{ borderRadius: '20px' }}>
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <Image
                                            src="/login.jpg"
                                            alt="3D Graphic"
                                            className="img-fluid rounded-start"
                                            width={500}
                                            height={500}
                                            style={{ objectFit: 'cover', height: '100%', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex flex-column">
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            <div className="text-center mb-4">
                                                <h1 className="card-title text-center" style={{ fontWeight: 'bold', color: 'blue', fontSize: '1.5rem' }}>Login</h1>
                                            </div>
                                            <Formik
                                                initialValues={{ username: '', password: '' }}
                                                validate={validate}
                                                onSubmit={handleSubmit}
                                            >
                                                {({ isSubmitting }) => (
                                                    <Form>
                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label" style={{ fontSize: '0.9rem' }}>Username</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text"><FaUser /></span> {/* Icon for username */}
                                                                <Field
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="username"
                                                                    name="username"
                                                                    placeholder="Enter your username"
                                                                    style={{ backgroundColor: '#f0f2f5', color: 'black', fontSize: '0.8rem' }}
                                                                />
                                                            </div>
                                                            <ErrorMessage name="username" component="div" className="error-message" style={{ fontSize: '0.7rem', color: "red" }} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="password" className="form-label" style={{ fontSize: '0.9rem' }}>Password</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text"><FaLock /></span> {/* Icon for password */}
                                                                <Field
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="password"
                                                                    name="password"
                                                                    placeholder="Enter your password"
                                                                    style={{ backgroundColor: '#f0f2f5', color: 'black', fontSize: '0.8rem' }}
                                                                />
                                                            </div>
                                                            <ErrorMessage name="password" component="div" className="error-message" style={{ fontSize: '0.7rem', color: "red" }} />
                                                        </div>
                                                        <div className="d-flex justify-content-end">
                                                            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ fontSize: '0.9rem' }}>
                                                                Login
                                                            </button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
