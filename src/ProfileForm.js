import {useContext, useState} from 'react';
import userContext from './userContext';
import {useNavigate} from 'react-router-dom';
import AlertMsg from './AlertMsg';
import './ProfileForm.css';

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
 * Props: onSubmit
 *
 * App -> RoutesList -> Profile
 *
 * userContext consumed: userName, firstName, lastName, email
 */

function ProfileForm({onSubmit}){
    const {username, firstName, lastName, email} = useContext(userContext);
    //console.log("ProfileForm userData", userData);
    
    const [formData, setFormData] = useState({username, firstName, lastName, email});
    const [errors, setErrors] = useState([]);
    //console.log("formData>>>>>>>>>>", formData);
    const navigate = useNavigate();
    
    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
    }



    async function handleSubmit(evt){
        evt.preventDefault();
        try {
          const result = await onSubmit(formData);
          navigate('/');
          console.log("success, result is", result);
        }
        catch(errorMessages) {
          //console.log("err>>>>>>>>>>>>", errorMessages);
          setErrors(() => errorMessages);
        }
    }

    return(
        <div className='ProfileForm'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input
                        type="text"
                        value={formData.username}
                        disabled={true}
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
                <AlertMsg msgs={errors} />
                <button>Update</button>
            </form>
        </div>
    )
}

export default ProfileForm;
