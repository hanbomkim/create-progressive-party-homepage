import { TitleContainer } from "./Title.style";

export default function Title({ title, description }) {
  return (
    <TitleContainer flex={false}>
      <h2>{title}</h2>
      <p>{description}</p>
    </TitleContainer>
  );
}
