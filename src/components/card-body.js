import styled from 'styled-components';

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  padding: ${(props) => (props.padded ? '1rem' : 0)};
`;

export default CardBody;
