import styled from "@emotion/styled"


export const StyledFeatures = styled.div`


  display: flex;
   
  .swiper-button-next{
    color: #00000066;
    right: 0;
  }

  .swiper-button-prev{
    color: #00000066;
    left; 0;
  }

  .header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    img{
        display: block;
        max-width:150px;
        max-height:30px;
        width: auto;
        height: auto;
        
    }
    h5{
        margin: 1rem;
    }
   
}

`
export const FeatureCard = styled.div`

    margin: auto;
    max-width: 200px;
    background-color: #eee;
    box-shadow: 8px 11px 14px 5px rgba(0,0,0,0.29);
`