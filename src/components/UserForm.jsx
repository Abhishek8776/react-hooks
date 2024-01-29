import React, { useState } from 'react';
import useInput from './useInput';

function UserForm() {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [firstname, resetFirstname, bindFirstname] = useInput('')
  const [lastname, resetLastname, bindLastname] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`hello ${firstname} ${lastname}`)
    resetFirstname()
    resetLastname()
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">First Name</label>
        {/* <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} /> */}
        <input type="text" {...bindFirstname} />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        {/* <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} /> */}
        <input type="text" {...bindLastname} />

      </div>
      <button>submit</button>
    </form>
  );
}

export default UserForm;
