import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    place: {
      vocabularies,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
