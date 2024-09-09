import SignUpForm from '@/components/sign-up-form';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <>
      <div className="my-2">
        <SignUpForm />
      </div>
      <Link
        type="button"
        href="/sign-in"
        className="my-1 py-2 text-sm font-semibold text-secondary underline">
        Iniciar sesión
      </Link>
    </>
  );
}
