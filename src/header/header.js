import styled from "styled-components";
export default function Header() {
  return (
    <Head>
      <h2>React and Morthy</h2>
    </Head>
  );
}

const Head = styled.header`
  border-bottom: 1px solid black;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5;
  background-color: azure;
  top: 0;
`;
