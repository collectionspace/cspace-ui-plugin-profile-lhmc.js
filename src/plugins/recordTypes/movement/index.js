import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    movement: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
