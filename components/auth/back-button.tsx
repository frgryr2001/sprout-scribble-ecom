import { Button } from '@/components/ui/button';
import { ProgressBarLink } from '@/components/progress/progress-bar';

type BackButtonProps = {
  href: string;
  label: string;
};
export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button className="font-medium w-full" asChild variant={'link'}>
      <ProgressBarLink aria-label={label} href={href}>
        {label}
      </ProgressBarLink>
    </Button>
  );
};
