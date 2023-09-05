import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navitage = useNavigate();


  const [details, setDetails] = useState(
    {
      firstName: "",
      lastName: "",
      mobnu: "",
      email: "",
      password: ""
    });



  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setDetails({ ...details, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navitage('/list')
    console.log(details);
  };



  return (
    <div>
      <form>
        <input className='input'
          type="text"
          placeholder="First Name"
          name="firstName"
          value={details.firstName}
          onChange={handleChange}
        />


        <input className='input'
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={details.lastName}
          onChange={handleChange}
        />


        <input className='input'
          type="tel"
          placeholder="Mobile Number"
          name="mobnu"
          value={details.mobnu}
          onChange={handleChange}
        />


        <input className='input'
          type="text"
          placeholder="Email"
          name="email"
          value={details.email}
          onChange={handleChange}
        />


        <input className='input'
          type="password"
          placeholder="Password"
          name="password"
          value={details.password}
          onChange={handleChange}
        />

        <button className='input' type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Home;