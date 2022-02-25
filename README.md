# disabling-react-hook-form

This is a wrapper hook around [react-hook-form](https://react-hook-form.com/) and extends it to allow you to enable or disable the form. This (disable) state will be available to you via `formState` attribute returned by the hook.

## Example

```
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
```

