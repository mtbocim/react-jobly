import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from './userContext';
import AlertMsg from './AlertMsg';


/**
 * Render a Profile component.
 *
 * State: formData
 *          {
 *              username, (cannot edit)
 *              firstName,
 *              lastName,
 *              email.
 *          }
 *
 * Props: handleSubmit
 *
 * App -> RoutesList -> Profile
 *
 */

function LoginForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        username: "",
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

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const result = await onSubmit(formData);
          navigate('/');
          console.log("success, result is", result);
        }
        catch(errorMessages) {
          console.log("err>>>>>>>>>>>>", errorMessages);
          setErrors(() => errorMessages);
        }
    }


    return (
        <div className='LoginForm'>
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
                    Password:
                    <input
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                    />
                </label>
                <AlertMsg msgs={errors} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
