import styled from 'styled-components';
import { useField } from 'formik';

const Control = styled.div`
    margin-botton: 20px;
`

const Label = styled.label`
font-family: 'Heebo', sans-serif;
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.025rem;
font-style: normal;
text-transform: uppercase;
color: #EF2D56;
background-color: #FFFFFF;
border-radius: 1.25rem;
-webkit-border-radius: 1.25rem;
-moz-border-radius: 1.25rem;
padding: 0.35rem 0.75rem;
border-style: solid;
border-width: 0.125rem;
border-color: #EF2D56;
-webkit-box-shadow: none;
-moz-box-shadow: none;
-box-shadow: none;
`

const MyInput = styled.input`
    padding:3px; 
    font-size:16px; 
    border-width:2px; 
    border-style:solid; 
    border-radius:4px; 
    border-color: #ff7fdd; 
`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
        </Control>
        
    )
}

export default Input