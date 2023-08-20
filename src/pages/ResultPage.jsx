import { useBallot } from '../contexts/BallotContext';
import { SubLayout } from '../layouts';
import { ChartDonut } from '../components';

export default function ResultPage() {
  return (
    <SubLayout heading="Result">
      <ChartDonut />
    </SubLayout>
  );
}
