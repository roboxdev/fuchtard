import React from 'react';
import { connect } from 'react-redux';

import { minimalOrderRequirementSatisfiedSelector, cartIsEmptySelector } from 'core/selectors/app';

import { Link, Route } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';

import Cart from './Cart';
import GiftsForm from './GiftsForm';

import styles from 'styles/SidebarCart.css';


export class SidebarCart extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied, cartIsEmpty} = this.props;
        return <div className={styles.wrapper}>
            <Route path="/checkout/" children={
                ({match, ...rest}) =>
                    match
                        ? null
                        : <div>
                        <Cart/>
                        <GiftsForm/>
                        {minimalOrderRequirementSatisfied
                            ? <Link to="/checkout/">
                                <Button
                                    primary={true}
                                >
                                    Перейти к оформлению
                                </Button>
                            </Link>
                            : <Button
                                primary={true}
                                disabled={true}
                            >
                                Перейти к оформлению
                            </Button>
                        }
                    </div>
            }
            />
        </div>
    }
}

const ConnectedSidebarCart = connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
        cartIsEmpty: cartIsEmptySelector(state),
    })
)(SidebarCart);

// HACK. Pathless routes and withRouter are broken
// Follow this: https://github.com/ReactTraining/react-router/pull/4704
export default () => <Route path='*' component={ConnectedSidebarCart}/>;

