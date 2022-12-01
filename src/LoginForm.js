import {useContext, useState} from 'react';
import userContext from './userContext';

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

function LoginForm({onSubmit}){
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });

    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
    }

    function handleSubmit(evt){
        evt.preventDefault();
        onSubmit(formData);
    }

    return(
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
            </form>
        </div>
    )
}

export default LoginForm;
