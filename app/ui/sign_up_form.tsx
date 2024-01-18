'use client';
import { FormButton } from "./buttons";
import { useFormState } from "react-dom";
import { signUp } from "../lib/actions";


export default function SignUpForm() {
  const initialState = { errors: [] };
  const [state, dispatch] = useFormState(signUp, initialState);

  return (
    <form action={dispatch}>
      { state!.errors.length > 0 && <Errors errors={state!.errors} /> }
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" className="auth-field" autoFocus />
      </div>
      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className="auth-field" />
      </div>
      <div className="mb-5">
        <label htmlFor="confim-password">Confirm Password</label>
        <input type="password" name="confirm_password" id="confirm-password" className="auth-field" />
      </div>
      <FormButton text="Sign up" />
    </form>
  );
}

function Errors({ errors } : { errors : string[]}) {
  return (
    <div className="error">
      <ul className="list-disc pl-4">
        { errors.map((err, i) => <li key={i}>{err}</li>) }
      </ul>
    </div>
  );
}
