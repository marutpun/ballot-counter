import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { nanoid } from 'nanoid/non-secure';

const BallotContext = createContext();

const initialState = {
  invalid: 0,
  abstention: 0,
  candidate: [
    // {
    //   id: nanoid(),
    //   name: 'Jordan',
    //   number: 5,
    //   score: 18,
    //   party: 'Buzzmaker',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Marla',
    //   number: 10,
    //   score: 78,
    //   party: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Nell',
    //   number: 9,
    //   score: 0,
    //   party: 'Illumity',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Juliana',
    //   number: 7,
    //   score: 6,
    //   party: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Walker',
    //   number: 4,
    //   score: 16,
    //   party: 'Providco',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Blevins',
    //   number: 6,
    //   score: 52,
    //   party: 'Digirang',
    // },
    // {
    //   id: nanoid(),
    //   name: 'Sally',
    //   number: 1,
    //   score: 24,
    //   party: '',
    // },
  ],
  isError: false,
  errorText: '',
};

export default function BallotProvider(props) {
  const [ballot, setBallot] = createStore(initialState);

  // Check if new number is already added
  // https://stackoverflow.com/a/72718080
  const addNewCandidate = (name, number, party) => {
    const existingNumber = ballot.candidate.find((person) => person.number === number);

    if (!existingNumber && number !== 0) {
      setBallot({
        ...ballot,
        candidate: ballot.candidate.concat({
          id: nanoid(),
          name,
          number: parseInt(number),
          party,
          score: 0,
        }),
        isError: false,
        errorText: '',
      });
    } else {
      setBallot({
        ...ballot,
        isError: true,
        errorText: number !== 0 ? `Number ${number} is already added !` : `Number 0 is prohibited !`,
      });
    }
  };

  // Update new score in array of object
  // https://stackoverflow.com/a/43792663
  const addCandidateScore = (scoreId) => {
    const newData = ballot.candidate.map((person) => {
      if (person.id === scoreId) {
        return { ...person, score: person.score + 1 };
      }
      return person;
    });

    setBallot({ ...ballot, candidate: newData });
  };

  const groupExport = [ballot, { addNewCandidate, addCandidateScore }];
  return <BallotContext.Provider value={groupExport}>{props.children}</BallotContext.Provider>;
}

export function useBallot() {
  return useContext(BallotContext);
}
