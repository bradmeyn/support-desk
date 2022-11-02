import { useState } from 'react';

import { useSelector } from 'react-redux';

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            type='text'
            className='form-control'
            value={user.name}
            disabled
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input
            type='email'
            className='form-control'
            value={user.email}
            disabled
          />
        </div>
      </section>
    </>
  );
};

export default NewTicket;
