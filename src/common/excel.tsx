import crypto from "crypto";
import ExcelJS from "exceljs";

type downloadProps = {
  userName: string;
  birthDate: string;
  gender: string;
  toDay: string;
  // email: string;
  phoneNumber: string;
  receiveAgreement: string;
  jobName: string;
  address: string;
  signature: string;
};

//거래정리-계좌
export const downloadForm = (data: downloadProps) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet();
  const {
    userName,
    birthDate,
    gender,
    toDay,
    // email,
    phoneNumber,
    jobName,
    address,
    signature,
    receiveAgreement,
  } = data;

  // 스타일 생성
  const headerStyle = {
    font: {
      size: 20,
    },
  };

  const contentHeaderStyle = {
    font: {
      size: 15,
    },
  };

  // Static
  worksheet.getCell("A1").value = "국 민 주 권 당 가 입 서";
  worksheet.getCell("A1").style = headerStyle;
  worksheet.getCell("A1").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A1").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A5").value = "성  명";
  worksheet.getCell("A5").style = contentHeaderStyle;
  worksheet.getCell("A5").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A5").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A11").value = "주  소";
  worksheet.getCell("A11").style = contentHeaderStyle;
  worksheet.getCell("A11").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A11").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A17").value = "생 년 월 일\n(성 별)";
  worksheet.getCell("A17").style = contentHeaderStyle;
  worksheet.getCell("A17").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A17").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("D17").value = "직업";
  worksheet.getCell("D17").style = contentHeaderStyle;
  worksheet.getCell("D17").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("D17").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A23").value = "전 화 번 호";
  worksheet.getCell("A23").style = contentHeaderStyle;
  worksheet.getCell("A23").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A23").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A34").value =
    "본인은 국민주권당(가칭) 창당준비위원회에 가입합니다.";
  worksheet.getCell("A34").style = contentHeaderStyle;
  worksheet.getCell("A34").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A34").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A40").value = `${toDay}`;
  worksheet.getCell("A40").style = contentHeaderStyle;
  worksheet.getCell("A40").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A40").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A46").value = "성명";
  worksheet.getCell("A52").value = "국민주권당(가칭) 창당준비위원회 귀중";
  worksheet.getCell("A52").style = contentHeaderStyle;
  worksheet.getCell("A52").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A52").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A60").value =
    "주 1. 직업은 반드시 기재하여야 하고, 주소는 상세주소까지 기재함.";
  worksheet.getCell("A61").value =
    "    2. 반드시 본인의 자필 서명 또는 날인이 있어야 함.";
  worksheet.getCell("A62").value =
    "    ※ 발기인이 서명을 하는 경우에는 본인의 성명을 제3자가 알아볼 수 있도록 기재함.";
  worksheet.getCell("A59").value = "";

  // 작성
  worksheet.getCell("B5").value = userName;
  worksheet.getCell("B5").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("B5").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("B11").value = address;
  worksheet.getCell("B11").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("B11").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("B17").value = `${birthDate}(${gender})`;
  worksheet.getCell("B17").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("B17").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("E17").value = jobName;
  worksheet.getCell("E17").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("E17").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("B23").value = `(자택) ${phoneNumber}`;
  worksheet.getCell("B23").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("B23").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("D23").value = `(휴대폰) ${phoneNumber}`;
  worksheet.getCell("D23").border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("D23").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("A29").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A36").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A42").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A48").border = {
    left: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A54").border = {
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  worksheet.getCell("A46").border = {
    left: { style: "thin" },
  };
  worksheet.getCell("A46").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("C46").value = userName;

  worksheet.getCell("C46").alignment = {
    vertical: "middle",
    horizontal: "center",
  };
  worksheet.getCell("E46").border = {
    right: { style: "thin" },
  };

  worksheet.mergeCells("A1:F4");
  worksheet.mergeCells("A5:A10");
  worksheet.mergeCells("B5:F10");
  worksheet.mergeCells("A11:A16");
  worksheet.mergeCells("B11:F16");
  worksheet.mergeCells("A17:A22");
  worksheet.mergeCells("B17:C22");
  worksheet.mergeCells("D17:D22");
  worksheet.mergeCells("E17:F22");
  worksheet.mergeCells("A23:A28");
  worksheet.mergeCells("B23:C28");
  worksheet.mergeCells("D23:F28");
  worksheet.mergeCells("A29:F33");
  worksheet.mergeCells("A34:F35");
  worksheet.mergeCells("A36:F39");
  worksheet.mergeCells("A40:F41");
  worksheet.mergeCells("A42:F45");
  worksheet.mergeCells("A46:B47");
  worksheet.mergeCells("A48:F51");
  worksheet.mergeCells("C46:D47");
  worksheet.mergeCells("E46:F47");
  worksheet.mergeCells("A52:F53");
  worksheet.mergeCells("A54:F58");

  //이미지 등록
  let imageId = workbook.addImage({
    base64: data.signature,
    extension: "png",
  });
  worksheet.addImage(imageId, {
    tl: { row: 44, col: 4 },
    ext: { width: 100, height: 100 },
  });
  worksheet.getColumn(1).width = 20;
  worksheet.getColumn(2).width = 20;
  worksheet.getColumn(3).width = 20;
  worksheet.getColumn(4).width = 20;
  worksheet.getColumn(5).width = 20;
  worksheet.getColumn(6).width = 20;
  return workbook.xlsx.writeBuffer().then((buffer) => {
    const formData = new FormData();

    // Uint8Array 형식의 버퍼 데이터를 Base64로 변환하는 함수
    const uint8ArrayToBase64 = (uint8Array) => {
      var binary = "";
      var length = uint8Array.byteLength;
      for (var i = 0; i < length; i++) {
        binary += String.fromCharCode(uint8Array[i]);
      }
      return btoa(binary);
    };

    // Uint8Array 형식의 버퍼 데이터 생성 예시
    const buf = new Uint8Array(buffer);

    const hashBase64Data = (base64Data: string) => {
      // Base64 데이터를 Buffer로 변환
      const buffer = Buffer.from(base64Data, "base64");

      // SHA-256 해시 생성
      const hash = crypto.createHash("sha256");
      hash.update(buffer);

      // 해시 결과를 16진수 문자열로 변환하여 반환
      return hash.digest("hex");
    };

    // Uint8Array를 Base64로 변환
    const base64 = uint8ArrayToBase64(buf);
    const hashData = hashBase64Data(base64);

    console.log(base64);
    console.log(hashData);

    formData.append("name", userName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("receiveAgreement", receiveAgreement);
    formData.append("signatureBase64", base64);
    formData.append("signatureHash", hashData);

    return fetch(
      "https://script.google.com/macros/s/AKfycbwMTGfzU-ZmAKga4udhPk7RphKberEbVEfmmHx0Thh4Fxs4TbWpJDfvrxugcLSMtrKznQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        return false;
      });
  });
};
