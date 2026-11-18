import { Image } from 'expo-image';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FlavorTag } from '@/components/ui/flavor-tag';
import { Headline } from '@/components/ui/headline';
import { Screen } from '@/components/ui/screen';
import { flavors } from '@/constants/flavors';
import { Colors } from '@/constants/theme';
import { nextDrop } from '@/data/drops';
import { loyaltyAccount } from '@/data/loyalty';
import { products } from '@/data/products';
import { formatCoins, formatShortDate } from '@/lib/format';

export default function HomeScreen() {
  return (
    <Screen>
      <Image
        source={require('@/assets/brand/logos/ljco-logo-2025-navy.png')}
        style={{ width: 220, height: 158, alignSelf: 'center' }}
        contentFit="contain"
        accessibilityLabel="Louisville Jerky Co. A Deliciously Bold Snack!"
      />

      <Card label="Next small batch drop" ground={Colors.navy} ink={Colors.gold}>
        <Headline lines={[nextDrop.flavorName]} color={Colors.cream} />
        <Text className="font-body text-body-lg text-cream">
          Lands {formatShortDate(nextDrop.releasesAt)}. It won&apos;t stick around for long.
        </Text>
        <Button label="Remind me!" />
      </Card>

      <Card label="Your Jerky Coins">
        <Headline lines={[formatCoins(loyaltyAccount.coins)]} />
        <Text className="font-body text-body text-ink">{loyaltyAccount.tier.name}</Text>
      </Card>

      <View className="gap-4">
        <Headline lines={['The Classics']} size="subhead" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mx-5"
          contentContainerClassName="gap-4 px-5 pb-2">
          {products.map((product) => (
            <View key={product.id} className="items-center gap-2">
              <Image
                source={flavors[product.id].bag}
                style={{ width: 170, height: 128 }}
                contentFit="contain"
                accessibilityLabel={`${flavors[product.id].label} bag`}
              />
              <FlavorTag flavor={product.id} />
            </View>
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
}
