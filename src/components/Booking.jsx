import React from 'react'

const Booking = () => {
  return (
    <div>
    {/* provide the booking form */}
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            {/* add start date , end date and mob number,name,no of people  */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Start Date</label>
              <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">End Date</label>
              <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">No of People</label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
    
            <button type="submit" className="btn btn-primary">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Booking