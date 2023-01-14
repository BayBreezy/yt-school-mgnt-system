module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
  },

  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },

  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
  //...
});
