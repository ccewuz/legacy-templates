import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";

import TPCert from "../common/certificate";
import TPTranscript from "../common/transcript";
import ApprovedAddresses from "../common/approvedAddresses";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: TPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: TPTranscript
  }
];

const ftdip = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={ApprovedAddresses}
    {...props}
  />
);

export default ftdip;
