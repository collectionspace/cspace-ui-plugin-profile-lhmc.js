import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    exhibition: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
