import mq from "@/styles/utils/mq";
import styled from "@emotion/styled";

export const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${mq({
    flexDirection: ["row", "row", "column"],
    alignItems: ["", "", "center"],
  })}
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
  }
`;
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 400px; */
  gap: 15px;
  /* padding: 24px; */

  h1 {
    font-size: 1.2em;
    font-weight: 500;
  }

  p {
    font-size: 1.2em;
    font-weight: 400;
    opacity: 0.7;
    span {
      font-weight: 700;
    }
  }
`;
