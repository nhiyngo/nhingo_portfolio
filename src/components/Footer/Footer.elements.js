import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #1e1e20;
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactContainer = styled.div`
  background-image: linear-gradient(-133deg, #7282eb, #74aee3);
  width: 100vw;
  height: 76vh;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
`

export const ContactTitle = styled.h3`
  margin-right: 2rem;
  font-size: 2.5rem;
  color: #27303b;

  @media screen and (max-width: 1069px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 819px) {
    font-size: 1.5rem;
  }
`
export const ContactLink = styled.a`
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 7vw;
  transition: color 150ms ease-out;
  white-space: nowrap;

  &:hover {
    background: -webkit-linear-gradient(45deg, #7282eb 0%, #7282eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1069px) {
    font-size: 6vw;
  }

  @media screen and (max-width: 636px) {
    font-size: 1.5rem;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 25px;
  margin: 1rem;
  /* padding-top: 20px; */

  &:hover {
    color: ${(props) =>
      (props.email && '#99a3e8') ||
      (props.github && '#767676') ||
      (props.linkedIn && '#2088AF')};
  }
`

export const WebsiteRights = styled.small`
  color: #a3afbf;
`