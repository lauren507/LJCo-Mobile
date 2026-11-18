import { Text, View } from 'react-native';

import { Card } from '@/components/ui/card';
import { Screen } from '@/components/ui/screen';
import { bundleTiers, products } from '@/data/products';
import { formatPrice } from '@/lib/format';

export default function ShopScreen() {
  return (
    <Screen title="Shop" subtitle="Grab a bag or build a box.">
      <Card eyebrow="Build a box">
        {bundleTiers.map((tier) => (
          <Text key={tier.bagCount} className="text-base text-cream">
            {tier.label}: save {tier.discountPercent}%
          </Text>
        ))}
      </Card>

      {products.map((product) => (
        <Card key={product.id} eyebrow={product.smallBatch ? 'Small batch' : undefined}>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-cream">{product.name}</Text>
            <Text className="text-base font-semibold text-bourbon">
              {formatPrice(product.priceCents)}
            </Text>
          </View>
          <Text className="text-base text-tan">{product.tagline}</Text>
          {product.inStock ? null : <Text className="text-sm text-ember">Sold out</Text>}
        </Card>
      ))}
    </Screen>
  );
}
