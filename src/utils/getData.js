export default url => {
  return fetch(url).then(r => r.json());
};
