import { useBallot } from '../contexts/BallotContext';

export default function AddCandidate() {
  const [, { addNewCandidate }] = useBallot();

  let inputNameRef, inputNumberRef, inputPartyRef;

  const _handleSubmitNewCandidate = (e) => {
    e.preventDefault();
    addNewCandidate(inputNameRef.value, parseInt(inputNumberRef.value), inputPartyRef.value.trim());
    inputNameRef.value = '';
    inputNumberRef.value = '';
    inputPartyRef.value = '';
  };
  return (
    <>
      <h2 class="u-off-screen">Add new candidate</h2>
      <form onSubmit={_handleSubmitNewCandidate}>
        <label for="candidate-name">Name</label>
        <input type="text" id="candidate-name" name="candidate-name" ref={inputNameRef} autocomplete="off" required pattern="[^0-9]*" title="Candidate's name cannot contains any digits" />
        <label for="candidate-number">Number</label>
        <input
          type="text"
          id="candidate-number"
          name="candidate-number"
          ref={inputNumberRef}
          inputmode="numeric"
          pattern="[0-9]*"
          autocomplete="off"
          required
          title="Number should contain only digit"
        />
        <label for="candidate-party">Party (optional)</label>
        <input type="text" id="candidate-party" name="candidate-party" ref={inputPartyRef} autocomplete="off" pattern="[^0-9]*" title="Party's name cannot contains any digits" />
        <button type="submit" name="submit">
          Add a candidate
        </button>
      </form>
    </>
  );
}
