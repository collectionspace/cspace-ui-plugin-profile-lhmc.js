import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      condition: {
        disabled: true,
      },
      conditionLHMC: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.conditioncheck.default.conditionLHMC',
            defaultMessage: 'Condition',
          },
        }),
        order: 20,
        sortBy: 'conditionchecks_lhmc:conditionCheckLHMCGroupList/0/conditionLHMC',
        width: 450,
      },
    },
  };
};
