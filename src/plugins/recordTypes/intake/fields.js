import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:intakes_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake/domain/lhmc',
          },
        },
        receivedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_lhmc.receivedBy.name',
                defaultMessage: 'Received by',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,person/ulan,organization/local,organization/shared',
              },
            },
          },
        },
        intakeStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_lhmc.intakeStatus.name',
                defaultMessage: 'Intake status',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'intakestatus',
              },
            },
          },
        },
        insuredBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_lhmc.insuredBy.name',
                defaultMessage: 'Insured by',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'insuredByValues',
              },
            },
          },
        },
        premiumGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          premiumGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.intakes_lhmc.premiumGroup.name',
                  defaultMessage: 'Premium',
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
            premiumCurrency: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.intakes_lhmc.premiumCurrency.name',
                    defaultMessage: 'Currency',
                  },
                  fullName: {
                    id: 'field.intakes_lhmc.premiumCurrency.fullName',
                    defaultMessage: 'Premium currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            premiumValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  name: {
                    id: 'field.intakes_lhmc.premiumValue.name',
                    defaultMessage: 'Value',
                  },
                  fullName: {
                    id: 'field.intakes_lhmc.premiumValue.fullName',
                    defaultMessage: 'Premium value',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        insuredValueGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          insuredValueGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.intakes_lhmc.insuredValueGroup.name',
                  defaultMessage: 'Insured value',
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
            insuredValueCurrency: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.intakes_lhmc.insuredValueCurrency.name',
                    defaultMessage: 'Currency',
                  },
                  fullName: {
                    id: 'field.intakes_lhmc.insuredValueCurrency.fullName',
                    defaultMessage: 'Insured value currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            insuredValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  name: {
                    id: 'field.intakes_lhmc.insuredValue.name',
                    defaultMessage: 'Value',
                  },
                  fullName: {
                    id: 'field.intakes_lhmc.insuredValue.fullName',
                    defaultMessage: 'Insured value',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        inventoriedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_lhmc.inventoriedBy.name',
                defaultMessage: 'Inventoried by',
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
        intakeCondition: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_lhmc.intakeCondition.name',
                defaultMessage: 'Condition',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'condition',
              },
            },
          },
        },
      },
    },
  };
};
