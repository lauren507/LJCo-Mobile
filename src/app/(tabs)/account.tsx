import { Text } from 'react-native';

import { Card } from '@/components/ui/card';
import { Screen } from '@/components/ui/screen';
import { loyaltyAccount, subscription } from '@/data/loyalty';
import { formatPoints, formatShortDate } from '@/lib/format';

export default function AccountScreen() {
  const { memberName, points, tier, nextTier } = loyaltyAccount;

  return (
    <Screen title="Account" subtitle={`Welcome back, ${memberName}.`}>
      <Card eyebrow="Loyalty">
        <Text className="text-xl font-bold text-cream">{formatPoints(points)} pts</Text>
        <Text className="text-base text-tan">
          {tier.name}
          {nextTier ? `. ${formatPoints(nextTier.minPoints - points)} pts to ${nextTier.name}.` : ''}
        </Text>
      </Card>

      <Card eyebrow="Jerky Club">
        <Text className="text-lg font-bold text-cream">{subscription.planName}</Text>
        <Text className="text-base text-tan">
          Next box ships {formatShortDate(subscription.nextShipDate)}
        </Text>
      </Card>
    </Screen>
  );
}
