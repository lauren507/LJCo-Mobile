import { Text } from 'react-native';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Headline } from '@/components/ui/headline';
import { Screen } from '@/components/ui/screen';
import { miniGames } from '@/data/loyalty';

export default function PlayScreen() {
  return (
    <Screen>
      <Headline lines={['Player 1,', 'ready?']} />

      {miniGames.map((game) => (
        <Card key={game.id} label={`${game.cadence} game`}>
          <Headline lines={[game.name]} size="subhead" />
          <Text className="font-body text-body text-ink">{game.description}</Text>
          <Text className="font-body-bold text-small text-ink">
            Win up to {game.maxCoins} Jerky Coins
          </Text>
          <Button label="Lets go!!" />
        </Card>
      ))}
    </Screen>
  );
}
