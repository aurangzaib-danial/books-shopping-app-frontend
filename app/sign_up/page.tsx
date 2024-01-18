import SignUpForm from "@/app/ui/sign_up_form";

export default function Page() {
  return (
    <main className="auth">
      <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
      <SignUpForm />
    </main>
  );
}
