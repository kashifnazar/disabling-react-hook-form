import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useDisablingForm = (props) => {
  const [disabled, setDisabled] = useState(false);

  const methods = useForm(props);

  const disable = (flag = true) => setDisabled(flag);
  const enable = () => disable(false);

  useEffect(() => {
    disable(props.disabled);
  }, [props.disabled]);

  return {
    ...methods,
    enable,
    disable,
    formState: { ...methods.formState, disabled }
  };
};
