
export default (str) => {
  const re = /---:\w+/ig;
  const data = str.split(re).slice(1);
  const keys = str.match(re);

  return keys.reduce(
    (r, key, index) => ({
      ...r,
      [key.replace('---:', '')]: data[index],
    }),
    {}
  );
};
