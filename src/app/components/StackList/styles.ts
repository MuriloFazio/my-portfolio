import styled from "styled-components";

export const StackContainer = styled.div`
    max-width: 480px;
`;

export const StackCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 4rem;
    padding: 2rem 0px;

    @media (min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr;
			gap: 6rem;
			padding: 3rem 0px;
    }

`;

export const StackItem = styled.div`
    justify-items: center;
`;

export const IconWrapper = styled.div<{color: string}>`
    &:hover {
        svg {
          fill: ${({ color }) => color};
        }
    }
`;