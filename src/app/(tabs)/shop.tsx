import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Headline } from '@/components/ui/headline';
import { Screen } from '@/components/ui/screen';
import { flavors } from '@/constants/flavors';
import { bundleTiers, products } from '@/data/products';
import { formatPrice } from '@/lib/format';

export default function ShopScreen() {
  return (
    <Screen>
      <Headline lines={['Shop']} />

      <Card label="Build a box">
        {bundleTiers.map((tier) => (
          <Text key={tier.bagCount} className="font-body text-body-lg text-ink">
            {tier.bagCount} bags: save {tier.discountPercent}%
          </Text>
        ))}
        <Button label="Build a box!" />
      </Card>

      {products.map((product) => {
        const flavor = flavors[product.id];
        return (
          <Card key={product.id} ground={flavor.color}>
            <Image
              source={flavor.bag}
              style={{ width: '100%', aspectRatio: 900 / 677 }}
              contentFit="contain"
              accessibilityLabel={`${flavor.label} bag`}
            />
            <View className="flex-row items-end justify-between gap-3">
              <Text
                className="flex-1 font-flavor text-flavor-title lowercase"
                style={{ color: flavor.ink }}>
                {flavor.label}
              </Text>
              <Text className="font-display text-subhead" style={{ color: flavor.ink }}>
                {formatPrice(product.priceCents)}
              </Text>
            </View>
            {product.inStock ? (
              <Button label="Get a bag!" tone="cream" />
            ) : (
              <Text className="font-display text-label uppercase" style={{ color: flavor.ink }}>
                Sold out
              </Text>
            )}
          </Card>
        );
      })}
    </Screen>
  );
}
