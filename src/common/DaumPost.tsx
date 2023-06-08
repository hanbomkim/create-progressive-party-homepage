import { Modal } from "@/components/Modal";
import DaumPostcode from "react-daum-postcode";

interface AddressData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

interface DaumPostProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  company: string;
  setCompany: (company: string) => void;
}

const DaumPost = (props: DaumPostProps) => {
  const { isOpen, setOpen, company, setCompany } = props;

  const handleComplete = (data: AddressData) => {
    let fullAddress = data.address;
    let extraAddress = "";

    const { addressType, bname, buildingName } = data;
    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
    }

    setCompany(fullAddress);

    setOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="">
      <DaumPostcode
        style={{ width: "100%", height: "100%" }}
        autoClose
        onComplete={handleComplete}
      />
    </Modal>
  );
};

export default DaumPost;
