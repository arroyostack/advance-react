import { styled } from "styled-components";

const Container = styled.div`
    display: flex
`;

const Panel = styled.div`
    flex: ${ (properties) => properties.flex }
`;

export const SplitScreen = ({ leftWidth, rightWidth, children }) => {
    const [ left, right ] = children;
    return (
        <Container>
            <Panel flex={ leftWidth }>
                { left }
            </Panel>
            <Panel flex={ rightWidth }>
                { right }
            </Panel>
        </Container>
    );
};
