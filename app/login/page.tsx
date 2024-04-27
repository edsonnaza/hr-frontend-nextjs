import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center  md:h-screen">
      <div className="relative lg:ring-1 rounded-sm mx-autosm:mt-5 flex w-full max-w-[400px]  flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex w-full h-32 items-end rounded-lg bg-blue-500 justify-center  md:h-36">
          <div className="w-32 sm:h-32 flex-col   text-white md:w-36 md:mr-12 ">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}