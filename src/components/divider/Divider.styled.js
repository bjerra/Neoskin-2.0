
import styled from "@emotion/styled"


export const StyledDivider = styled.div`
    
        display: flex;
        width: 100%;
        margin: 1rem auto;
        margin-top: 4rem;
        max-width: 900px;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        h2{
            margin: 0;
        }
        div{
            :nth-of-type(1){
                background-color: #30669022;
                height: 10px; 
                width: 10px;
                border-radius: 5px;
            }
            :nth-of-type(2){
                background-color: #30669044;
                height: 12px; 
                width: 12px;
                border-radius: 6px;
            }
            :nth-of-type(3){
                background-color: #30669066;
                height: 14px; 
                width: 14px;
                border-radius: 7px;
            }

            :nth-of-type(4){
                background-color: #30669066;
                height: 14px; 
                width: 14px;
                border-radius: 7px;
            }
            :nth-of-type(5){
                background-color: #30669044;
                height: 12px; 
                width: 12px;
                border-radius: 6px;
            }
            :nth-of-type(6){
                background-color: #30669022;
                height: 10px; 
                width: 10px;
                border-radius: 5px;
            }

            
        }
  
    
 

`