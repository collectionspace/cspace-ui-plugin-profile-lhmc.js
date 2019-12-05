import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TextInput,
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:loansin_common': {
        loanStatusGroupList: {
          // Replaced by loaninStatusLHMCGroupList. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
      },
      'ns2:loansin_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanin/domain/lhmc',
          },
        },
        // TODO: This custom loan status group adds an authorizer field. It was added to the LHMC
        // profile before the loanGroup and loanIndividual fields were added to loanStatusGroup in
        // core. Now that those fields exist in the core loan status group, this custom group can
        // be retired, but existing data will need to be migrated.
        loaninStatusLHMCGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loaninStatusLHMCGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansin_lhmc.loaninStatusLHMCGroup.name',
                  defaultMessage: 'Loan status',
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
            loaninStatusLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_lhmc.loaninStatusLHMC.fullName',
                    defaultMessage: 'Loan status',
                  },
                  name: {
                    id: 'field.loansin_lhmc.loaninStatusLHMC.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'loanoutstatus',
                  },
                },
              },
            },
            loaninStatusDateLHMC: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_lhmc.loaninStatusDateLHMC.fullName',
                    defaultMessage: 'Loan status date',
                  },
                  name: {
                    id: 'field.loansin_lhmc.loaninStatusDateLHMC.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            loaninStatusNoteLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_lhmc.loaninStatusNoteLHMC.fullName',
                    defaultMessage: 'Loan status note',
                  },
                  name: {
                    id: 'field.loansin_lhmc.loaninStatusNoteLHMC.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            loaninStatusAuthorizerLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_lhmc.loaninStatusAuthorizerLHMC.fullName',
                    defaultMessage: 'Loan status authorizer',
                  },
                  name: {
                    id: 'field.loansin_lhmc.loaninStatusAuthorizerLHMC.name',
                    defaultMessage: 'Authorizer',
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
      },
    },
  };
};
