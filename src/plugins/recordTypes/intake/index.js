import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    intake: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
