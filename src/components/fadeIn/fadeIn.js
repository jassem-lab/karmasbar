import styled, { keyframes } from "styled-components"
import { fadeInUp } from "react-animations"


const fadeInAnimation = keyframes`
${fadeInUp}
`
export const FadeIn = styled.div`
  color: white;
  animation: 1s ${fadeInAnimation};
`