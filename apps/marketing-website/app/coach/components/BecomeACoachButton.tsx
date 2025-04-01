// components/BecomeACoachButton.tsx
'use client';

import { Button } from '@workspace/ui/components';
import { useBecomeACoachHandler } from '@/hooks/useBecomeACoachHandler';

const BecomeACoachButton = () => {
  const { onBecomeACoachClick } = useBecomeACoachHandler();

  return (
    <Button size="default" type="button" onClick={onBecomeACoachClick}>
      Become a Coach
    </Button>
  );
};

export default BecomeACoachButton;
