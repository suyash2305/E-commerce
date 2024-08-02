// import React, { useState } from "react";
// import './contactus.css'

// function Contact(){
//     const[name, setName]=useState('');
//     const[email, setEmail]=useState('');
//     const[query, setQuery]=useState('');

//     const handleSubmit = async (e) => {
//         console.log("called");
//         e.preventDefault();

//         const response = await fetch('http//localhost:5000/api/items',{
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json',
//             },
//             body: JSON.stringify({ name, email, query }),
//         });
//         const data = await response.json();
//         console.log(data);
//     };
//     return(
//         <div id="a">
//             <div id="contact">
//                 <h1>CONTACT US</h1>
//                 <form  onSubmit={handleSubmit}>
//                     <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
//                     <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
//                     <textarea rows={10} cols={50} placeholder="Your Query" value={query} onChange={(e) => setQuery(e.target.value)}></textarea><br></br>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;


import React, { useState } from 'react';
import "./contactus.css";


const Contact = () => {
  const [name, setName] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
  const [massage, setMassage] = useState('');


  const handleSubmit = async (e) => {
    console.log("called");
    e.preventDefault();

      const response = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, emailaddress, massage}),
      });

      const data = await response.json();
      console.log(data);
  
    
  };

  return (
    <div>
      <h1>For contacting us please fill the form</h1>
    <div id='exit'>
      {/* <h1>for contacting us please fill the form</h1> */}
      <form onSubmit={handleSubmit}>
        <input type="textarea" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} cols={50} /><br></br><br></br>
        <input type="textarea" placeholder="email-Address" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} cols={50} /><br></br><br></br>
        <textarea type="textarea" placeholder="massage" value={massage} onChange={(e) => setMassage(e.target.value)} rows={10} cols={50} /><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
  };

export default Contact;