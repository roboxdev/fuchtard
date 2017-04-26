import React from 'react';
import { connect } from 'react-redux';

import { minimalOrderRequirementSatisfiedSelector, cartIsEmptySelector } from 'selectors/app';

import { Link, Route, withRouter } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';

import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';

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

export default withRouter(connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
        cartIsEmpty: cartIsEmptySelector(state),
    })
)(SidebarCart));
