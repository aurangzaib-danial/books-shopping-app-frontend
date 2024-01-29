'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRef } from "react";


export default function PaymentForm() {
  const [expiry, setExpiry] = useState("");
  const { push, refresh } = useRouter();
  const button = useRef<HTMLButtonElement>(null);

  async function onSubmit(e : React.SyntheticEvent) {
    e.preventDefault();
    
    // Check if the expiry date is in the past
    const today = new Date();
    const [expiryMonth, expiryYear] = expiry.split('/').map(Number);
    const expirationDate = new Date();
    expirationDate.setFullYear(2000 + expiryYear, expiryMonth, 1); 

    if (expirationDate < today) {
      alert('Error: Expiry date is in the past.');
      return;
    }

    button.current!.disabled = true;

    await fetch('/orders/create', {
      method: 'post'
    });

    push('/orders?status=success');
    refresh(); 
  }

  return (
    <form id="payment-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="card-number">Card number</label><br />
        <input type="tel" name="card-number" id="card-number" className="input w-full" maxLength={16} pattern="[0-9]{16}" title="Please enter a 16-digit credit card number" required autoFocus />
      </div>
      <div>
        <label>Expiry </label>
        <input type="text" name="card-expiry" placeholder="MM/YY" className="input w-24" pattern="(0[1-9]|1[0-2])\/\d{2}" title="Please enter a valid expiry date in MM/YY format" maxLength={5} required onChange={(e) => setExpiry(e.target.value)} value={expiry} />
      </div>
      <div className="mb-3">
        <label htmlFor="card-cvv">CVV</label>
        <input type="password" name="card-cvv" id="card-cvv" className="input w-24" maxLength={3} pattern="[0-9]{3}" title="Please enter a 3-digit CVV number" required autoComplete="cc-csc" />
      </div>
      <button className="primary-button" ref={button}>Pay</button>
    </form>
  );
}
