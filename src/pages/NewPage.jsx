import { Show } from 'solid-js';
import { AddCandidate, CandidateList, Notification } from '../components';
import { SubLayout } from '../layouts';
import { useBallot } from '../contexts/BallotContext';

export default function NewPage() {
  const [ballot] = useBallot();
  return (
    <SubLayout heading="Add new candidate">
      <div class="row">
        <section class="col-small-4 col-9">
          <Show when={ballot.isError}>
            <Notification message={ballot.errorText} />
          </Show>
          <AddCandidate />
        </section>
        <aside class="col-small-4 col-3">
          <CandidateList candidateList={ballot.candidate} />
        </aside>
      </div>
    </SubLayout>
  );
}
