
import styled from "@emotion/styled"


export const StyledServiceGrid = styled.div`

width: 100%;
margin: 2.5rem 0;
display: -moz-flex;
display: -webkit-flex;
display: -ms-flex;
display: flex;
flex-wrap: wrap;
align-items: stretch; 
 > * {
  flex-shrink: 1;   
  flex-grow: 0; 
}
 > * {
  width: 33.3333333333%; }
 > * {
  padding: 1.5rem;
  width: calc(33.3333333333% + 1rem); }
 > :nth-of-type(-n + 3) {
  padding-top: 0; }
 > :nth-last-of-type(-n + 3) {
  padding-bottom: 0; }
 > :nth-of-type(3n + 1) {
  padding-left: 0; }
 > :nth-of-type(3n) {
  padding-right: 0; }
 > :nth-of-type(3n + 1),
 > :nth-of-type(3n) {
  width: calc(33.3333333333% + -0.5rem); }
.content {
  border-radius: 4px;
  height: 100%;
  padding: 3rem;
  text-align: center; }
   .content .icon {
    font-size: 5rem; 
}
 div > :last-child {
  margin-bottom: 0; }
@media screen and (max-width: 980px) {
   > * {
    width: 50%; }
   > * {
    padding: 1rem;
    width: calc(33.3333333333% + 0.6666666667rem); }
   > :nth-of-type(-n + 3) {
    padding-top: 1rem; }
   > :nth-last-of-type(-n + 3) {
    padding-bottom: 1rem; }
   > :nth-of-type(3n + 1) {
    padding-left: 1rem; }
   > :nth-of-type(3n) {
    padding-right: 1rem; }
   > :nth-of-type(3n + 1),
   > :nth-of-type(3n) {
    padding: 1rem;
    width: calc(50% + 1rem); }
   > * {
    padding: 1rem;
    width: calc(50% + 1rem); }
   > :nth-of-type(-n + 2) {
    padding-top: 0; }
   > :nth-last-of-type(-n + 2) {
    padding-bottom: 0; }
   > :nth-of-type(2n + 1) {
    padding-left: 0; }
   > :nth-of-type(2n) {
    padding-right: 0; }
   > :nth-of-type(2n + 1),
   > :nth-of-type(2n) {
    width: calc(50% + 0rem); }
   .content {
    padding: 2rem; } }
@media screen and (max-width: 736px) {
   > * {
    width: 100%; }
   > * {
    padding: 1rem;
    width: calc(33.3333333333% + 0.6666666667rem); }
   > :nth-of-type(-n + 3) {
    padding-top: 1rem; }
   > :nth-last-of-type(-n + 3) {
    padding-bottom: 1rem; }
   > :nth-of-type(3n + 1) {
    padding-left: 1rem; }
   > :nth-of-type(3n) {
    padding-right: 1rem; }
   > :nth-of-type(3n + 1),
   > :nth-of-type(3n) {
    padding: 1rem;
    width: calc(100% + 2rem); }
   > * {
    padding: 1rem;
    width: calc(50% + 1rem); }
   > :nth-of-type(-n + 2) {
    padding-top: 1rem; }
   > :nth-last-of-type(-n + 2) {
    padding-bottom: 1rem; }
   > :nth-of-type(2n + 1) {
    padding-left: 1rem; }
   > :nth-of-type(2n) {
    padding-right: 1rem; }
   > :nth-of-type(2n + 1),
   > :nth-of-type(2n) {
    padding: 1rem;
    width: calc(100% + 2rem); }
   > * {
    padding: 1rem;
    width: calc(100% + 2rem); }
   > :nth-of-type(-n + 1) {
    padding-top: 0; }
   > :nth-last-of-type(-n + 1) {
    padding-bottom: 0; }
   > :nth-of-type(1n + 1) {
    padding-left: 0; }
   > :nth-of-type(1n) {
    padding-right: 0; }
   > :nth-of-type(1n + 1),
   > :nth-of-type(1n) {
    width: calc(100% + 1rem); } }

.content {
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025); 
  
}
`