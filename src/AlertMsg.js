/**
 * Renders a AlertMsg component.
 * 
 * State: none
 * Props: msgs: [str, ...]
 * 
 * Used by: LoginForm, SignupForm, ProfileForm
 */

function AlertMsg({ msgs }) {
   console.log("what is msg in alert?", msgs) 
   return (
        <div className="AlertMsg">
            {msgs.map((msg, idx) =>
                <div
                    key={idx}
                    className="AlertMsg-msg">
                    {msg}
                </div>)}
        </div>
    )
}

export default AlertMsg;