export const CanvasReset = ({ getCtx, getCanvas }) => {
  const onReset = () => {
    getCtx.clearRect(0, 0, getCanvas.width, getCanvas.height);
  };

  return <button onClick={onReset}>reset</button>;
};
