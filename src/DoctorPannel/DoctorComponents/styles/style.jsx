import styled from "styled-components";

const ResponsiveDiv = styled.div`

  @media (max-width: 600px) {
        width: 400px;
    
}

/* For medium devices (tablets, 600px to 900px) */
@media (min-width: 601px) and (max-width: 900px) {
        width: 600px;
    
}

/* For large devices (desktops, 900px and up) */
@media (min-width: 901px) {
        width: 1200px;
}
`;

export default ResponsiveDiv;