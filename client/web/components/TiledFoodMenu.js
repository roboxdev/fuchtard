import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import { CardMedia } from 'react-toolbox/lib/card';

import { visibleCategoriesWithAvatarSelector } from 'core/reducers/categories';

import styles from 'styles/TiledFoodMenu.css';


const Tile = ({
  category: {title, avatar},
  onDelete,
}) => (
  <div className={styles.tile}>
    <CardMedia
      theme={{cardMedia: styles.cardMedia}}
      aspectRatio="wide"
      image={avatar}
    />
    <div className={styles.title}>
      {title}
    </div>
  </div>
);

const TiledFoodMenu = ({
  categories,
}) => (
  <div className={styles.menuWrapper}>
    <nav className={styles.tiledFoodMenu}>
      <Link
        to={`/create_category/`}
        className={styles.link}
      >
        <div className={styles.tileWrapper}>
          <div className={styles.tile}>
              <CardMedia
                theme={{cardMedia: styles.cardMedia}}
                aspectRatio="wide"
                // image={}
              />
              <div className={styles.title}>
                Создать категорию
              </div>
            </div>
        </div>
      </Link>
      {categories.map(
        (category) =>
          <Link
            key={category.url}
            to={`/${category.slug}/`}
            className={styles.link}
          >
            <div className={styles.tileWrapper}>
              <Tile category={category} />
            </div>
          </Link>
      )}
    </nav>
  </div>
);

const TiledFoodMenuHOC = compose(
  connect(
    state => ({
      categories: visibleCategoriesWithAvatarSelector(state),
    }),
  ),
);

export default TiledFoodMenuHOC(TiledFoodMenu);