import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';


export default async function LoginPage() {
  const session = await getServerSession();
  
  if (session) {
    console.log({session})
    // redirect('/');
  }
  return <LoginForm />;
}
