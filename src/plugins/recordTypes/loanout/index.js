import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    loanout: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
