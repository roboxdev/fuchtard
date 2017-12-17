import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { Link } from 'react-router-dom';
import slug from 'slug';

import { CardMedia } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { actions, visibleCategoriesWithAvatarSelector } from 'core/reducers/categories';

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
    <button onClick={onDelete}>×</button>
  </div>
);

const TiledFoodMenu = ({
  categories,
  createCategory,
  deleteCategory,
  title,
  onTitleChange,
  slug,
  onSlugChange,
}) => (
  <div className={styles.menuWrapper}>
    <Input value={title} onChange={onTitleChange}/>
    <Input value={slug} onChange={v => onSlugChange(v)}/>
    <button onClick={createCategory}>add</button>
    <nav className={styles.tiledFoodMenu}>
      {categories.map(
        (category) =>
          <Link
            key={category.url}
            to={`/${category.slug}/`}
            className={styles.link}
          >
            <div className={styles.tileWrapper}>
              <Tile category={category} onDelete={() => deleteCategory(category.id)}/>
            </div>
          </Link>
      )}
    </nav>
  </div>
);


export default compose(
  connect(
    state => ({
      categories: visibleCategoriesWithAvatarSelector(state),
    }),
    {
      createCategory: actions.create,
      deleteCategory: actions.destroy,
    }
  ),
  withState('title', 'onTitleChange', ''),
  withState('slug', 'onSlugChange', ''),
  withHandlers({
    onTitleChange: ({ onTitleChange, onSlugChange }) => v => {
      onTitleChange(v);
      onSlugChange(slug(v));
    },
    createCategory: ({ createCategory, title, slug, onTitleChange, onSlugChange }) => () => {
      createCategory({
        title,
        slug,
      });
      onTitleChange('');
      onSlugChange('');
    },
  })
)(TiledFoodMenu);