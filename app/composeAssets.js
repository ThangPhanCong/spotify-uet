importAll(require.context('./commons', true, /\.scss$/));
importAll(require.context('./containers', true, /\.scss$/));

function importAll(r) {
  r.keys().forEach(r);
}