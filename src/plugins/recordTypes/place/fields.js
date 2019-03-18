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
      'ns2:places_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/domain/lhmc',
          },
        },
        placeWidth: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_lhmc.placeWidth.name',
                defaultMessage: 'Width',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        placeLength: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_lhmc.placeLength.name',
                defaultMessage: 'Length',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
