import React from 'react';
import {connect} from 'react-redux';

import {actions as uiActions} from 'reducers/ui';

import styles from 'styles/PageTitle.css';


export const PageTitleUpdater = connect()(
    class extends React.Component {
        static defaultProps = {
            title: '',
        };

        componentDidMount() {
            this.setPageTitle();
        };

        componentDidUpdate(prevProps) {
            if (prevProps.title !== this.props.title) {
                this.setPageTitle();
            }
        }

        setPageTitle = () => {
            const {title, dispatch} = this.props;
            dispatch(uiActions.setPageTitle(title));
        };

        render() {
            return null;
        }
    }
);


const PageTitle = ({title}) => <div className={styles.title}>{title}</div>;

export default connect(
    state => ({
        title: state.ui.pageTitle,
    }),
)(PageTitle)