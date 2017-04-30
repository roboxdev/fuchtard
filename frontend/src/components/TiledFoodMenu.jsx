import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import { visibleFoodCategoriesWithAvatarSelector } from 'selectors/app';

import styles from 'styles/TiledFoodMenu.css';


const Tile = ({category: {title, avatar}}) => <Card theme={{card: styles.card}}>
    <CardTitle theme={{cardTitle: styles.cardTitle}}
        title={title}
    />
    <CardMedia
        aspectRatio="wide"
        image={avatar}
    />
</Card>;



export class TiledFoodMenu extends React.Component {
    render() {
        return (
            <div className={styles.z1}>
                <nav className={styles.a1}>
                        {this.props.foodCategories.map(
                            (category) =>
                                <Link key={category.url}
                                      to={`/${category.slug}/`}
                                      className={styles.b1}
                                >
                                    <div className={styles.c1}>
                                        <Tile category={category}/>
                                    </div>
                                </Link>
                        )}
                </nav>
            </div>
        )
    }
}


export default connect(
    state => ({
        foodCategories: visibleFoodCategoriesWithAvatarSelector(state),
    })
)(TiledFoodMenu);