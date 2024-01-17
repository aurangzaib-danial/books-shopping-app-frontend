'use client';
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { FormButton } from "./buttons";

export default function SignInForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      { errorMessage && <div className="error">{ errorMessage }</div> }
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" className="auth-field" autoFocus />
      </div>

      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className="auth-field" />
      </div>
      <FormButton text="Sign in" />
    </form>
  );
}
