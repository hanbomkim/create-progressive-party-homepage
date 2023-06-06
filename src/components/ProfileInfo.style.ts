import styled from '@emotion/styled';
import mq from '@/styles/utils/mq';

export const MainImg = styled.div`
  width: 720px;
  height: 300px;
  border-radius: 15px;

  overflow: hidden;

  /* margin-top: 10px; */
  ${mq({
    width: ['100%', '100%', '100%'],
    height: ['300px', '300px', '300px'],
  })}
`;
