import { Text } from 'react-native';

import { Card } from '@/components/ui/card';
import { Screen } from '@/components/ui/screen';
import { miniGames } from '@/data/loyalty';

export default function PlayScreen() {
  return (
    <Screen title="Play" subtitle="Win points and discount codes.">
      {miniGames.map((game) => (
        <Card key={game.id} eyebrow={game.cadence}>
          <Text className="text-lg font-bold text-cream">{game.name}</Text>
          <Text className="text-base text-tan">{game.description}</Text>
          <Text className="text-sm font-semibold text-pepper">Up to {game.maxPoints} pts</Text>
        </Card>
      ))}
    </Screen>
  );
}
