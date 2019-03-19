export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    panel: {
      ...extensions.culturalcare.collectionobject.messages.panel,
    },
  };
};
