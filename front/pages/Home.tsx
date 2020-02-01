import React, { useState } from 'react';

import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const MOCK_DATA = {
  org: 'American Red Cross',
  cause: 'Corona Research Initiative',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  email: 'contact@redcross.org',
  target: 15000
}

const Home = () => {
  const { cid } = useParams()
  const [{ org, cause, description, email, target }, setCampaignData] = useState(MOCK_DATA)
  const [loadingCampaign, setLoading] = useState(false)

  return (
    <>
      <div className="d-sm-none d-md-block home-body">
        <Row>
          <Col md={12} lg={5}>
            <Card className="main-card mx-auto">
              <Card.Body className="h-100">

              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={7}>
            <h1>{cause}</h1>
            <h4>by {org}</h4>
            <hr className='w-10' />
            <p>{description}</p>
          </Col>
        </Row>
      </div>

      <div className="d-none d-sm-block d-md-none">

      </div>
    </>
  )
}

export default Home