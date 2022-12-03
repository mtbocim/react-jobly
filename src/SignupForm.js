import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AlertMsg from './AlertMsg';

/**
 * Render a SignupForm component.
 *
 * State: formData
 *          {
 *              username,
 *              firstName,
 *              lastName,
 *              email,
 *              password
 *          }
 *
 * Props: onSubmit
 *
 * App -> RoutesList -> SignupForm
 *
 */

function SignupForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    }

    /**
     *  Function handles submission of the form.
     *  Calls onSubmit callback fn given as prop
     *  If onSubmit throws an error, it will be displayed on the form
     */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const result = await onSubmit(formData);
            navigate('/');
            console.log("success, result is", result);
        }
        catch (errorMessages) {
            //console.log("err>>>>>>>>>>>>", errorMessages);
            setErrors(() => errorMessages);
        }
    }

    return (
        <div className='SignupForm'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        name="username"
                    />
                </label>

                <label>
                    First name:
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        name="firstName"
                    />
                </label>

                <label>
                    Last name:
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        name="lastName"
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                    />
                </label>

                <AlertMsg msgs={errors} />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;
