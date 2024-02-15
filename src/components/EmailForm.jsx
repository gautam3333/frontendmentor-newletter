import { useState } from 'react';

export default function EmailForm({ onSetEmail, email, onSetShow }) {
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(true);
    } else {
      onSetShow(false);
    }
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div className='email_box'>
      <div className='email_box_label'>
        <label>Email address</label>
        {error && <label className='error_email'>Valid email require</label>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='email@company.com'
          onChange={(e) => onSetEmail(e.target.value)}
        />
        <button>Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
}
