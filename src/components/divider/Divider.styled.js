
import styled from "@emotion/styled"


export const StyledDivider = styled.div`
    
        padding: 2rem;
        color: #333;
        text-align: center;

        h3{
            margin-top: 2rem;
        }

        div{
            height: 10px;
            position: relative;
            width: 100%;
            background: radial-gradient(ellipse farthest-side at top center, blue, transparent);
            &:before{
                content: "";
                display: block;
                position: absolute;
                top: 0px;
                right: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(left, transparent, blue, red, transparent);
            }
            
        }
  
    
 

`