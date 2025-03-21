import { Col, Row } from 'reactstrap'
import { H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Congratulations } from '../../../../../utils/Constant'

const FinishForm = () => {
  return (
      <Row>
        <Col xs="12" className="m-0">
          <div className="successful-form">
            <Image className="img-fluid" src={dynamicImage(`gif/dashboard-8/successful.gif`)} alt="successful" />
            <H6>{Congratulations}</H6>
            <P>Well done! You have successfully completed.</P>
          </div>
        </Col>
      </Row>
  )
}

export default FinishForm