import React from 'react'
import styled from "styled-components";

/*
*
* params
* direction - flex-direction
* wrap - flex-wrap
* align-items - align
* jc - justify-content
*
* */
const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  align-items: ${props => props.align || 'flex-start'};;
  justify-content: ${props => props.jc || 'flex-start'};;
`

const Flex = (props) => {
	return (
		<FlexWrapper {...props}>
      {props.children}
		</FlexWrapper>
	)
}

export default Flex
