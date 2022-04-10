import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div `
    padding-left: 20px;
    padding-right: 20px ;
`;

const Card = ({title, description}) => {
    return (<CardWrapper>
        <h4> {title}</h4>
        <p> {description}</p>
        <hr style={{border:'1px solid #E6E3E2'}}/>
    </CardWrapper>);
}

export default Card;
