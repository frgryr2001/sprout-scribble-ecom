import { PropsWithChildren } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Socials from './socials';
import { BackButton } from './back-button';

export const AuthCard = ({
  cardTitle,
  backButtonHref,
  backButtonHrefText,
  showSocials,
  children,
}: PropsWithChildren<{
  cardTitle: string;
  backButtonHref: string;
  backButtonHrefText: string;
  showSocials: boolean;
}>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonHrefText} />
      </CardFooter>
    </Card>
  );
};
