import pathToRegexp from 'path-to-regexp';
import queryString from 'query-string';


export const toPath = (path, data, params={}) => `${pathToRegexp.compile(path)(data)}?${queryString.stringify(params)}`;

const paths = {
  index: '/',
  schedules: '/schedules',
  about: '/about',
  contacts: '/contacts',
  quoteRequest: '/quote'
};

export default paths;
