import { For, onMount } from 'solid-js';
import { useBallot } from '../contexts/BallotContext';
import { SubLayout } from '../layouts';
import { VoteButton, InvalidVote } from '../components';

export default function CountPage() {
  const [ballot, { addNewCandidate, addCandidateScore }] = useBallot();

  const _handleClickAddScore = (id) => () => {
    addCandidateScore(id);
  };

  return (
    <SubLayout heading="Counter">
      <div class="row">
        <div className="col-9">
          <div className="row">
            <For each={ballot.candidate}>
              {(person) => (
                <div class="col-small-4 col-3">
                  <h3 class="p-matrix__title">{person.name}</h3>
                  <div className="row">
                    <div className="col-small-2 col-2">
                      <p>
                        Number {person.number} | Score: {person.score}
                      </p>
                    </div>
                    <div className="col-small-2 col-1">
                      <div class="u-vertically-center">
                        <VoteButton onClick={_handleClickAddScore(person.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
        <div className="col-3">
          <InvalidVote />
        </div>
      </div>
    </SubLayout>
  );
}

// onClick={_handleClickAddScore(person.id)}
