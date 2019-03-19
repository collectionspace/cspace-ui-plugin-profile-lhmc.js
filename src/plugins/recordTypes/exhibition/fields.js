import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:exhibitions_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/exhibition/domain/lhmc',
          },
        },
        restrictions: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.exhibitions_lhmc.restrictions.name',
                defaultMessage: 'Restrictions',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
    },
  };
};
