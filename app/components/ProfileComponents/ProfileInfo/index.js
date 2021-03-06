import React from 'react';
import { Row, Col, Image, Glyphicon, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './index.css';

function ProfileInfo({ name, username, gravatarURL, contractorRating, hiredRating, email, phone, website, city, country, technologies, editable }) {
  let userTecnologies;
  if (technologies && technologies.length !== 0) {
    userTecnologies = technologies.map((element, i) => {
      const keyTag = `tag${i}`;
      return (
        <span key={keyTag} style={{ marginRight: '5px' }}>
          <Label>{element.name}</Label>
        </span>
      );
    });
  } else {
    userTecnologies = 'Sin especificar';
  }

  return (
    <Col sm={12} md={3} lg={3}>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="text-center">
            <Image src={`${gravatarURL}?s=200`} circle />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="user-info text-center">
            {editable ? (
              <div>
                <Button bsSize="xsmall" className="user-edit-button">
                  <Link to="/profileEdit" className="user-edit-text"><Glyphicon glyph="pencil" /> Editar </Link>
                </Button>
              </div>
            ) : (
              ''
            )}
            <div>
              <h1 className="user-name">{name}</h1>
              <span className="lead text-left">@{username}</span>
            </div>
          </div>
          <div className="text-center">
            <h5 className="rating-title"><FormattedMessage {...messages.contractorRating} /></h5>
            <ReactStars count={5} value={contractorRating} className="rating-container" edit={false} size={28} />
            <h5 className="rating-title"><FormattedMessage {...messages.hiredRating} /></h5>
            <ReactStars count={5} value={hiredRating} className="rating-container" edit={false} size={28} />
          </div>
          <div className="text-center user-info">
            <p className=""><Glyphicon glyph="envelope" /> {email}</p>
            <p className=""><Glyphicon glyph="map-marker" /> {`${city}, ${country}`}</p>
            <p className=""><Glyphicon glyph="link" /> {website}</p>
            <p className=""><Glyphicon glyph="earphone" /> {phone}</p>
          </div>
          <div className="text-center">
            <h5 className="rating-title">Tecnologías</h5>
            {userTecnologies}
          </div>
        </Col>
      </Row>
    </Col>
  );
}

ProfileInfo.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  gravatarURL: PropTypes.string,
  contractorRating: PropTypes.number,
  hiredRating: PropTypes.number,
  email: PropTypes.string,
  phone: PropTypes.number,
  website: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  technologies: PropTypes.array,
  editable: PropTypes.bool,
};

export default ProfileInfo;
