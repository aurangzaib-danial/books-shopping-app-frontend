import { useFormStatus } from "react-dom";

export function FormButton({text} : { text : string }) {
  const { pending } = useFormStatus();

  return (
    <button 
      disabled={pending && true }
      className="primary-button"> 
      { pending ? "Loading..." : text }
    </button>
  );
}
