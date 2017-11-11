/**
 *
 * ModifyProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModifyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ModifyProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ModifyProfile</title>
          <meta name="description" content="Description of ModifyProfile" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ModifyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  modifyprofile: makeSelectModifyProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modifyProfile', reducer });
const withSaga = injectSaga({ key: 'modifyProfile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModifyProfile);
