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

function ProfileForm({onSubmit}){
    const userData = useContext(userContext);
    const [formData, setFormData] = useState(userData);

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
        <div className='ProfileForm'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={formData.username}
                        disabled="true"
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
            </form>
        </div>
    )
}

export default ProfileForm;
