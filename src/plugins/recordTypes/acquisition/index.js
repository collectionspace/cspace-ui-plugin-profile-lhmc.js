import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    acquisition: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
