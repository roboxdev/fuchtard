import React from 'react';
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import {actions as uiActions} from 'core/reducers/ui';

// TODO: consider refactoring
export const PageTitleUpdaterHOC = compose(
  connect(
    null,
    {
      setPageTitle: uiActions.setPageTitle,
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.setPageTitle(this.props.title);
    },
    componentDidUpdate(prevProps) {
      if (prevProps.title !== this.props.title) {
        this.props.setPageTitle(this.props.title);
      }
    },
    componentWillUnmount() {
      this.props.setPageTitle(this.props.title);
    }
  }),
)(() => null);

export default PageTitleUpdaterHOC;