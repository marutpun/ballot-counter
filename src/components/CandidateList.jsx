import { For } from 'solid-js';

export default function CandidateList(props) {
  return (
    <>
      <h2>Candidates ({props.candidateList.length})</h2>
      <ul>
        <For each={props.candidateList}>
          {(person) => (
            <li>
              {person.name}
              <small class="list__subHeading">
                No. {person.number}
                {person.party ? ` | Party ${person.party}` : null}
              </small>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
