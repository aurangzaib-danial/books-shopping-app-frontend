import SignInForm from "@/app/ui/sign_in_form";

export default function Page() {
  return (
    <main className="auth">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <SignInForm />
      <div className="mt-7">
        <p>Don&apos;t have an account? <a href="/sign_up" className="underline">Sign up</a></p>
      </div>
    </main>
  );
}
