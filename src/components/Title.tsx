import { TitleContainer } from "./Title.style";

export default function Title({ title, description }) {
  return (
    <TitleContainer flex={false}>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleContainer>
  );
}
