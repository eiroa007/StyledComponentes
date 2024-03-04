import styled from 'styled-components'

const StyledButtonJavier = styled.button`
  background-color:  ${(props) =>
    props.color === 'negro'
    ? 'var(--general100)' 
    : props.color === 'amarillo'
    ? 'var(--yellow60)'
    : props.color === 'gris'
    ? 'var(--general70)'
    : props.color === 'celeste'
    ? 'var(--primary70)'
    : props.color === 'rojo'
    ? 'var(--red100)'
    : props.color === 'rosado'
    ? 'var(--red60)'
    : props.color === 'verdelimon'
    ? 'var(--green100)'
    : props.color === 'verdeclaro'
    ? 'var(--green50)'
    : props.color === 'naranja'
    ? 'var(--yellow100)'
    : 'var(--primary100)'};
  color: var(--general30);
  color: var(--general30);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  width:${(props) =>
    props.medida === 'chico'
    ? '100px' 
    : props.medida === 'grande'
    ? '200px'
    : props.medida === 'grandote'
    ? '400px'
    : '150px'};
`
export default StyledButtonJavier
