import styled from "@emotion/styled"


export const StyledFeatures = styled.div`


    display: flex;
    padding: 2rem 0 ;
   
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
background-color: #f6f6f6;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23325389' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
box-shadow: inset 0px 50px 40px -30px rgba(0,0,0,0.6), inset 0px -50px 40px -30px rgba(0,0,0,0.6);
`
export const FeatureCard = styled.div`

    margin: 1rem;
    background-color: #eee;
    box-shadow: 0px 10px 28px 4px rgba(0,0,0,0.21);
`