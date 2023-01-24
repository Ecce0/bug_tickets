import React from "react"
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <>
    <section className="heading">
      <h1>What can we help you with?</h1>
      <p>Please choose from an option below</p>
    </section>
    <Link to='/newticket' className="btn btn-reverse btn-block">
      <FaQuestionCircle />
        Create New Ticket
    </Link>

    <Link to='/ticket' className="btn btn-block">
      <FaTicketAlt /> View my Tickets
    </Link>
    </>
  )
};

export default Home;
