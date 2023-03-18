import { Container, Entry } from "./components";
import { InputProps } from "./types";

export default function Input(props:InputProps) {
  return (
    <Container>
        <Entry type={props.type} placeholder={props.placeholder}/>
    </Container>
  )
}
