import React, { useState } from 'react';


import './App.css';

function Contact() {

  const [data, setdata] = useState({
    ename: '',
    email: '',
    password: '',
    mobile: '',
    address: ''
  })

const inputeevent= (e)=>{
   const {name ,value}=e.target;


   setdata((oldata)=>{
     return{
         ...oldata ,
         [name]:value,
     }
   })

  }
  const onsubmited=(e)=>{
    e.preventDefault();
    alert(`${data.ename} my email is ${data.email} password is ${data.password} bobile no is  ${data.mobile}ok  ${data.address}`)
  }



  return (
    <div className="my-3">
      <h1 className="text-center">Our contact</h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onsubmited}>
              <div className="form-group my-3" >
                <label for="exampleInputPassword1">name</label>
                <input type="text"
                  className="form-control"
                  name="ename"
                  value={data.ename}
                  id="exampleInputPassword1"
                  placeholder="enter name"
                  onChange={inputeevent}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  aria-describedby="emailHelp"
                  placeholder="enter email"
                  onChange={inputeevent}
                />

              </div>
              <div className="form-group my-3" >
                <label for="exampleInputPassword1">Password</label>
                <input type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={data.password}
                  placeholder="enter password"
                  onChange={inputeevent}
                />
              </div>
              <div className="form-group my-3" >
                <label for="exampleInputPassword1">mobile</label>
                <input type="Number"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="mobile"
                  value={data.mobile}
                  placeholder="enter mobile"
                  onChange={inputeevent}
                />
              </div>
              <div className="form-group my-3" >
                <label for="exampleInputPassword1">address</label>
                <input type="text"
                  className="form-control"
                  name="address"
                  value={data.address}
                  id="exampleInputPassword1"

                  placeholder="enter address"
                  onChange={inputeevent} />

              </div>


              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;