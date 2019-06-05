import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

import UserAuthentication from '../UserAuthentication'

export default AuthPageFormat

function AuthPageFormat ({ onError, ...props }) {
  return (
    <UserAuthentication
      authRequired={false}
      redirectTo='/currentUser'
      onError={onError}
    >
      <AuthPageContent {...props} />
    </UserAuthentication>
  )
}

AuthPageFormat.propTypes = {
  onError: PropTypes.func,
  title: PropTypes.node,
  children: PropTypes.node,
  link: PropTypes.exact({
    to: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired
  }),
  showErrorMessage: PropTypes.bool,
  onHideErrorMessage: PropTypes.func
}

function AuthPageContent ({ title, link, children, showErrorMessage, onHideErrorMessage }) {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg='5' md='7' sm='9' xs='12'>
          <h3 className='my-5 text-center'>{title}</h3>
          { showErrorMessage && (
            <Alert
              dismissible
              variant='danger'
              show={showErrorMessage}
              onClose={onHideErrorMessage}
            >
              <b>Oh snap!</b> Something went wrong.
            </Alert>
          )}
          {children}
          <Link to={link.to} className='w-100 d-block text-center'>{link.text}</Link>
        </Col>
      </Row>
    </Container>
  )
}
