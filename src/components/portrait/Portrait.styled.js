import styled from "@emotion/styled"

export const StyledPortrait = styled.div`

display: flex;
justify-content: center;
    
    div {
        flex: 0 1 400px;

        @media screen and (max-width: 1280px) {
            flex: 0 1 375px;
            }
          @media screen and (max-width: 736px) {
            flex: 0 1 350px;
              } 
          @media screen and (max-width: 480px) {
            flex: 0 1 300px;
            }
    }

 
`