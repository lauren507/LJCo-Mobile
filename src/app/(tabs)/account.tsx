import { Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CertBadge } from '@/components/ui/cert-badge';
import { FlavorTag } from '@/components/ui/flavor-tag';
import { Headline } from '@/components/ui/headline';
import { Screen } from '@/components/ui/screen';
import { loyaltyAccount, subscription } from '@/data/loyalty';
import { formatCoins, formatShortDate } from '@/lib/format';

export default function AccountScreen() {
  const { memberName, coins, tier, nextTier } = loyaltyAccount;

  return (
    <Screen>
      <Headline lines={['Hey,', `${memberName}!`]} />

      <Card label="Your Jerky Coins">
        <Headline lines={[formatCoins(coins)]} />
        <Text className="font-body text-body text-ink">
          {tier.name}
          {nextTier ? `. ${formatCoins(nextTier.minCoins - coins)} more to ${nextTier.name}.` : ''}
        </Text>
      </Card>

      <Card label="Jerky Club">
        <Headline lines={[subscription.planName]} size="subhead" />
        <Text className="font-body text-body text-ink">
          Next box ships {formatShortDate(subscription.nextShipDate)}.
        </Text>
        <View className="flex-row flex-wrap gap-3 pb-1">
          {subscription.flavorIds.map((id) => (
            <FlavorTag key={id} flavor={id} />
          ))}
        </View>
        <Button label="Swap flavors" tone="sky" />
      </Card>

      <View className="flex-row flex-wrap justify-center gap-3 pt-2">
        <CertBadge kind="plant-based" />
        <CertBadge kind="gluten-free" />
        <CertBadge kind="non-gmo" />
      </View>
    </Screen>
  );
}
