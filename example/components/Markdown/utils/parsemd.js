import RegExp from 'core-js/fn/regexp/constructor';
import flatMap from 'lodash/flatMap';
import zipWith from 'lodash/zipWith';

export default (componentRe, str) => {
  const regexpG = new RegExp(componentRe, 'g');
  const keys = str.match(regexpG);

  const data = keys.reduce(
    (r, key) => flatMap(r, (v) => v.split(key)),
    [str]
  );

  return zipWith(
    data,
    keys
      .map(key => key.match(componentRe)[1]),
    (md, componentKey) => ({ md, componentKey })
  );
};
