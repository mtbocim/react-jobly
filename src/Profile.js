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

    }

    function handleSubmit(evt){

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
                        
                    />
                </label>

                <label>
                    First name:
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Last name:
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default ProfileForm;