import { auth } from '@/server/auth';
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import { ProgressBarLink } from '@/components/progress/progress-bar';
import Logo from './logo';

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <ProgressBarLink href="/">
              <Logo className="size-24" />
            </ProgressBarLink>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <ProgressBarLink href="/auth/login">
                  <LogIn size={16} />
                  <span>Login</span>
                </ProgressBarLink>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
