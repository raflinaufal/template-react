import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { ContactNo, Email, Website } from "../../../../../utils/Constant";

const InvoiceTwoHeader = () => {
  return (
    <td>
      <Table className="table-responsive order-details" style={{ width: "100%" }} borderless>
        <tbody>
          <tr>
            <td style={{ minWidth: 347, width: "30%" }}>
              <Image className="img-fluid for-light" src={dynamicImage("logo/logo.png")} alt="logo" />
              <Image className="img-fluid for-dark" src={dynamicImage("logo/logo_light.png")} alt="logo"/>
              <address style={{ opacity: "0.8", width: "80%", marginTop: 10, fontStyle: "normal"}}>
                <span style={{ fontSize: 16, lineHeight: "1.5", fontWeight: 500 }} >
                  1982 Harvest Lane New York, NY12210 United State
                </span>
              </address>
            </td>
            <td style={{ opacity: "0.8", textAlign: "end" }}>
              <span
                style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500}}>
                {Email} : Mofi@themesforest.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500 }}>
                {Website}: www.Mofithemes.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 500 }} >
                {ContactNo} : (316) 555-0116
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoHeader;
