import mapKeys from 'lodash/mapKeys';

export const isSlug = (s) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);

export const getSlugKeyedObj = obj => mapKeys(obj, v => v && v.slug);