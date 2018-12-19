import dynamic from "next/dynamic";

const SITCerts = dynamic(import("./SITCerts"));
const DefaultCert = dynamic(import("./Default"));
const NPAA2018MAIN = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-MAIN"));
const NPAA2018OPTION = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-OPTION"));
const NPAA2018BMSCLT = dynamic(
  import("./NgeeAnnPolytechnic/NP-AA2018-BMS(CLT)")
);
const NPAA2018ECH = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-ECH"));
const NPAA2018LDH = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-LDH"));
const NPAA2018PHARM = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-PHARM"));
const NPAA2018DPP = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-DPP"));
const GOVTECHOPENCERTS = dynamic(import("./GovTech"));

const templates = {
  default: DefaultCert,
  "NP-AA2018-MAIN": NPAA2018MAIN,
  "NP-AA2018-OPTION": NPAA2018OPTION,
  "NP-AA2018-BMS(CLT)": NPAA2018BMSCLT,
  "NP-AA2018-ECH": NPAA2018ECH,
  "NP-AA2018-LDH": NPAA2018LDH,
  "NP-AA2018-PHARM": NPAA2018PHARM,
  "NP-AA2018-DPP": NPAA2018DPP,
  "SG-GOVTECH-OPENCERTS": GOVTECHOPENCERTS,
  SITCerts
};

export default templates;
