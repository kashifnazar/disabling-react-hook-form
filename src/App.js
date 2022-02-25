import { useDisablingForm } from "./useDisablingForm";

export function App() {
  const {
    register,
    enable,
    disable,
    formState: { disabled }
  } = useDisablingForm();

  return (
    <form>
      <input
        disabled={disabled}
        {...register("firstName")}
        placeholder="First name"
      />
      <select disabled={disabled} {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea
        disabled={disabled}
        {...register("aboutYou")}
        placeholder="About you"
      />

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
