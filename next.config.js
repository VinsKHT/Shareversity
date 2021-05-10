
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['v5q79FSmHN2pmucZkUxQiE'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  