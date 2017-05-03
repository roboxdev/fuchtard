import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { CardMedia } from 'react-toolbox/lib/card';
import { visibleFoodCategoriesWithAvatarSelector } from 'core/selectors/app';

import styles from 'styles/TiledFoodMenu.css';


const Tile = ({category: {title, avatar}}) =>
    <div className={styles.tile}>
        <CardMedia
            theme={{cardMedia: styles.cardMedia}}
            aspectRatio="wide"
            image={avatar}
        />
        <div className={styles.title}>
            {title}
        </div>
    </div>;



export class TiledFoodMenu extends React.Component {
    render() {
        return (
            <div className={styles.menuWrapper}>
                <nav className={styles.tiledFoodMenu}>
                        {this.props.foodCategories.map(
                            (category) =>
                                <Link key={category.url}
                                      to={`/${category.slug}/`}
                                      className={styles.link}
                                >
                                    <div className={styles.tileWrapper}>
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