import { useDisablingForm } from "./useDisablingForm";

export function App() {
  const {
    enable,
    disable,
    formState: { disabled }
  } = useDisablingForm();

  return (
    <form>
      <input disabled={disabled} placeholder="First name" />
      <select disabled={disabled}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea disabled={disabled} placeholder="About you" />

      <input
        disabled={!disabled}
        type="button"
        onClick={() => enable()}
        value="Enable"
      />
      <input
        disabled={disabled}
        type="button"
        onClick={() => disable()}
        value="Disable"
      />
    </form>
  );
}
