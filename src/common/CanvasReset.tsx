export const CanvasReset = ({ handleReset }) => {
  // 수정: handleReset 전달 받음
  return <button onClick={handleReset}>reset</button>; // 수정: handleReset 호출
};
