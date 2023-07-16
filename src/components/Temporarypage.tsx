import { Button } from "./Button";
import { FlexTemporary } from "./Fullpage.style";

const Temporarypage = () => {
  const routingPage = () => {
    window.location.href = "https://jugwon.kr";
  };

  return (
    <FlexTemporary>
      <Button style={{ width: "25%" }} onClick={routingPage}>
        국민주권당 바로가기
      </Button>
    </FlexTemporary>
  );
};

export default Temporarypage;
