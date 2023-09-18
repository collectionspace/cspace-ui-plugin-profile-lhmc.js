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
      'ns2:loansout_common': {
        loanStatusGroupList: {
          // Replaced by loanoutStatusLHMCGroupList. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
      },
      'ns2:loansout_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/domain/lhmc',
          },
        },
        // TODO: This custom loan status group adds an authorizer field. It was added to the LHMC
        // profile before the loanGroup and loanIndividual fields were added to loanStatusGroup in
        // core. Now that those fields exist in the core loan status group, this custom group can
        // be retired, but existing data will need to be migrated.
        loanoutStatusLHMCGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loanoutStatusLHMCGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_lhmc.loanoutStatusLHMCGroup.name',
                  defaultMessage: 'Loan status',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            loanoutStatusLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_lhmc.loanoutStatusLHMC.fullName',
                    defaultMessage: 'Loan status',
                  },
                  name: {
                    id: 'field.loansout_lhmc.loanoutStatusLHMC.name',
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
            loanoutStatusDateLHMC: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_lhmc.loanoutStatusDateLHMC.fullName',
                    defaultMessage: 'Loan status date',
                  },
                  name: {
                    id: 'field.loansout_lhmc.loanoutStatusDateLHMC.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            loanoutStatusNoteLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_lhmc.loanoutStatusNoteLHMC.fullName',
                    defaultMessage: 'Loan status note',
                  },
                  name: {
                    id: 'field.loansout_lhmc.loanoutStatusNoteLHMC.name',
                    defaultMessage: 'Note',
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
            loanoutStatusAuthorizerLHMC: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_lhmc.loanoutStatusAuthorizerLHMC.fullName',
                    defaultMessage: 'Loan status authorizer',
                  },
                  name: {
                    id: 'field.loansout_lhmc.loanoutStatusAuthorizerLHMC.name',
                    defaultMessage: 'Authorizer',
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
          },
        },
      },
    },
  };
};
