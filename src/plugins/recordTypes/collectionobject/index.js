import fields from './fields';
import forms from './forms';
import messages from './messages';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      fields: fields(configContext),
      forms: forms(configContext),
      messages: messages(configContext),
    },
  },
});
