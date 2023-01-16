import styled from "styled-components";

export const StyledFlex = styled.div`
display: flex;
width: ${props=>props.width || '100%'};
flex-direction: ${props=>props.flexDir || 'row'};
justify-content: ${props=>props.justifyCont || 'center'};
align-items: ${props=>props.alignIt || 'center'};
flex-wrap: ${props=>props.flexWrap || 'nowrap'};
gap: ${props=>props.gap || '0px'};
margin: ${props=>props.margin || '0px'};
padding: ${props=>props.padding || '0px'};
height: ${props=>props.height || '100%'};
`

export const StyledImg = styled.img`
object-fit: ${props=>props.objectFit || 'cover'};
width: ${props=>props.width || '100%'};
height: ${props=>props.height || '100%'};

`