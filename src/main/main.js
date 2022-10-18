import styled from "styled-components";
export default function Main() {
  return (
    <div>
      <Figure>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt=""
        />
        <figcaption>Morty Smith</figcaption>
      </Figure>
      <Figure>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt=""
        />
        <figcaption>Morty Smith</figcaption>
      </Figure>
    </div>
  );
}

const Figure = styled.figure`
  background-color: aliceblue;
  padding: 10px;
`;
