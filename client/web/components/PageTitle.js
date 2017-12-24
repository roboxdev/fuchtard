import React from 'react';
import {connect} from 'react-redux';

import styles from 'styles/PageTitle.css';


const PageTitle = ({title}) => <div className={styles.title}>{title}</div>;

export default connect(
    state => ({
        title: state.ui.pageTitle,
    }),
)(PageTitle)