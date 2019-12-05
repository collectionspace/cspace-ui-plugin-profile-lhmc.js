import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:acquisitions_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/domain/lhmc',
          },
        },
        receivedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          receivedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_lhmc.receivedGroup.name',
                  defaultMessage: 'Received',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            receivedDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_lhmc.receivedDate.fullName',
                    defaultMessage: 'Received date',
                  },
                  name: {
                    id: 'field.acquisitions_lhmc.receivedDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            receivedBy: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_lhmc.receivedBy.fullName',
                    defaultMessage: 'Received by',
                  },
                  name: {
                    id: 'field.acquisitions_lhmc.receivedBy.name',
                    defaultMessage: 'By',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/ulan,person/shared',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
