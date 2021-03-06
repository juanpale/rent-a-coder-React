import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CandidatesListItem from 'components/CandidatesComponents/CandidateListItem';
import PropTypes from 'prop-types';

function CandidatesList({ offers, viewCandidateProfile, selectCandidate }) {
  return (
    <ListGroup>
      {offers.map((offer) => (
        <CandidatesListItem
          key={offer.candidate.id}
          offer={offer}
          selectCandidate={(id) => viewCandidateProfile(id)}
          viewCandidateProfile={(id) => selectCandidate(id)}
        />
      ))}
    </ListGroup>
  );
}

CandidatesList.propTypes = {
  offers: PropTypes.array,
  viewCandidateProfile: PropTypes.func,
  selectCandidate: PropTypes.func,
};

export default CandidatesList;
