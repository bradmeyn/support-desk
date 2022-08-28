import React from 'react';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='heading'>
        <h1>What do you need assistance with?</h1>
        <p>Please choose from an option below</p>
      </section>
      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle />
        Create Ticket
      </Link>
      <Link to='/tickets' className='btn  btn-block'>
        <FaTicketAlt />
        View Tickets
      </Link>
    </>
  );
};

export default Home;
