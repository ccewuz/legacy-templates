import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import SSGCert from "./certificate";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: SSGCert({})
  }
];

const SFFQ004 = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

SFFQ004.displayName = "SFFQ004 Template";

export default SFFQ004;
