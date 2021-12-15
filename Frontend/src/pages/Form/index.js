import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-uuid'
export const Form = ({ onSubmit }) => {
  const { price } = useSelector((state) => state.data);
  // const [deliveryCharge , setDeliveryCharges] = useState(0);
  const [transaction, setTransaction] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (price !== 0)
      setTotalAmount(price + 20)
    setTransaction(`TXID${uuid().toString()}`)
  }, [price]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(cnic, phone, totalAmount)
    }}>
      <div className="form-group">
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
      </div>
    </form>
  );
};
export default Form;
