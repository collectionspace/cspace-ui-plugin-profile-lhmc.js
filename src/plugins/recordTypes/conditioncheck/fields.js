import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:conditionchecks_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conditioncheck/domain/lhmc',
          },
        },
        conditionCheckLHMCGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          conditionCheckLHMCGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conditionchecks_lhmc.conditionCheckLHMCGroup.name',
                  defaultMessage: 'Condition',
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
            conditionLHMC: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.conditionchecks_lhmc.conditionLHMC.name',
                    defaultMessage: 'Description',
                  },
                  fullName: {
                    id: 'field.conditionchecks_lhmc.conditionLHMC.fullName',
                    defaultMessage: 'Condition description',
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
            conditionFacetLHMC: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.conditionchecks_lhmc.conditionFacetLHMC.name',
                    defaultMessage: 'Facet',
                  },
                  fullName: {
                    id: 'field.conditionchecks_lhmc.conditionFacetLHMC.fullName',
                    defaultMessage: 'Condition facet',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'conditionfacet',
                  },
                },
              },
            },
            conditionDateLHMC: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.conditionchecks_lhmc.conditionDateLHMC.name',
                    defaultMessage: 'Date',
                  },
                  fullName: {
                    id: 'field.conditionchecks_lhmc.conditionDateLHMC.fullName',
                    defaultMessage: 'Condition date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            conditionNoteLHMC: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.conditionchecks_lhmc.conditionNoteLHMC.name',
                    defaultMessage: 'Note',
                  },
                  fullName: {
                    id: 'field.conditionchecks_lhmc.conditionNoteLHMC.fullName',
                    defaultMessage: 'Condition note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        maintenanceDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_lhmc.maintenanceDate.name',
                defaultMessage: 'Date',
              },
              fullName: {
                id: 'field.conditionchecks_lhmc.maintenanceDate.fullName',
                defaultMessage: 'Maintenance date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        maintenanceCycle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_lhmc.maintenanceCycle.name',
                defaultMessage: 'Cycle',
              },
              fullName: {
                id: 'field.conditionchecks_lhmc.maintenanceCycle.fullName',
                defaultMessage: 'Maintenance cycle',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'maintenancecycle',
              },
            },
          },
        },
        maintenanceNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_lhmc.maintenanceNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.conditionchecks_lhmc.maintenanceNote.fullName',
                defaultMessage: 'Maintenance note',
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
