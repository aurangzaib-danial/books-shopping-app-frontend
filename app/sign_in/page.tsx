import SignInForm from "@/app/ui/sign_in_form";

export default function Page() {
  return (
    <main className="auth">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <SignInForm />
    </main>
  );
}
