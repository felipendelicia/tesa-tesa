import { ReactElement } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
`

export default function PageContainer({ children }: { children: ReactElement[] | ReactElement }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
