import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-uuid'
export const CancelForm = ({ onSubmit }) => {
  const { price } = useSelector((state) => state.data);
  // const [deliveryCharge , setDeliveryCharges] = useState(0);
  const [transaction, setTransaction] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [disabled , setDisabled] = useState(true);
  const[cancelationReason , SetCancelationReason ] = useState('');
  const otherInput = (event)=>{
    SetCancelationReason('');
    setDisabled(false);
  };
  const disableInput = (event)=>{
    setDisabled(true);
    SetCancelationReason(event.target.value);
  };
  const TxtInputData = (event)=>{
    SetCancelationReason(event.target.value);
  }
  
  // useEffect(() => {
  //   if (price !== 0)
  //     setTotalAmount(price + 20)
  //   setTransaction(`TXID${uuid().toString()}`)
  // }, [price]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(cancelationReason)
    }}>
      <div className="form-group">
        <label htmlFor="txid">Why You want to cancel your order ?  </label>
      </div>
      <div className="form-group" onChange = { disableInput} >
         <input type="radio" value="Rider is away" name="reason" /> Rider is away
      </div>
      <div className="form-group" onChange = { disableInput} >
         <input type="radio" value="I have changed my mind" name="reason" /> I have changed my mind
      </div>
      <div className="form-group" onChange = { disableInput}>
         <input type="radio" value="Bad Review from someone after ordering" name="reason" /> Bad Review from someone after ordering
      </div>
      <div className="form-group" onChange = { disableInput}>
         <input type="radio" value="Order is late than expected time" name="reason" /> Order is late than expected time
      </div>
      <div className="form-group" onChange = { disableInput}>
         <input type="radio" value="Seller behaviour is bad" name="reason" /> Seller behaviour is bad 
      </div>
      <div className="form-group" onChange = {otherInput} >
         <input type="radio" value="Other" name="reason" /> Other 
      </div>
      <div className="form-group" >
      <textarea className="form-group" rows="4" cols="50" name="comment" form="usrform" required onChange={TxtInputData} disabled = {disabled ? "disabled" : ""}></textarea>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-danger" type="submit" disabled = {!cancelationReason} >
          Cancel Now
        </button>
      </div>

      {/* <div> 

      <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div> */}
      {/* <div className="form-group">
        <label htmlFor="txid">Transaction ID </label>
        <input
          className="form-control"
          id="txid"
          readOnly
          value={transaction}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Mobile Number</label>
        <input className="form-control" id="number" value={"03123456789"} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="cnic">CNIC</label>
        <input className="form-control" id="cnic" placeholder="" value={345678} onChange={(e) => setCnic(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input className="form-control" id="amount" readOnly value={totalAmount} />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-danger" type="submit">
          Pay Now
        </button>
      </div> */}
    </form>
  );
};
export default CancelForm;
