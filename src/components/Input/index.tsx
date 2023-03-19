import { Entry } from "./components";
import { InputProps } from "./types";

export default function Input(props: InputProps) {
  return (
    <Entry type={props.type} placeholder={props.placeholder} ref={props.reference} />
  );
}
