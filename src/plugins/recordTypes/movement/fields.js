import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:movements_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/domain/lhmc',
          },
        },
        tempLocAuthorizedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_lhmc.tempLocAuthorizedBy.name',
                defaultMessage: 'Temp location authorized by',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,person/ulan',
              },
            },
          },
        },
      },
    },
  };
};
