import { Text } from 'react-native';

import { Card } from '@/components/ui/card';
import { Screen } from '@/components/ui/screen';
import { nextDrop } from '@/data/drops';
import { loyaltyAccount } from '@/data/loyalty';
import { getProduct, products } from '@/data/products';
import { formatPoints, formatShortDate } from '@/lib/format';

export default function HomeScreen() {
  const dropProduct = getProduct(nextDrop.productId);
  const featured = products.filter((product) => !product.smallBatch && product.inStock);

  return (
    <Screen title="Louisville Jerky Co." subtitle="Small batch. Big flavor.">
      <Card eyebrow="Next drop">
        <Text className="text-xl font-bold text-cream">{nextDrop.title}</Text>
        <Text className="text-base text-tan">
          {dropProduct?.name} lands {formatShortDate(nextDrop.releasesAt)}. {nextDrop.bagsAvailable}{' '}
          bags only.
        </Text>
      </Card>

      <Card eyebrow="Your status">
        <Text className="text-xl font-bold text-cream">
          {formatPoints(loyaltyAccount.points)} pts
        </Text>
        <Text className="text-base text-tan">{loyaltyAccount.tier.name}</Text>
      </Card>

      <Card eyebrow="Featured flavors">
        {featured.map((product) => (
          <Text key={product.id} className="text-base text-cream">
            {product.name}
          </Text>
        ))}
      </Card>
    </Screen>
  );
}
