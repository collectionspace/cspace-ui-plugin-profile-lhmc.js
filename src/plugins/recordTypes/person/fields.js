import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
        birthPlace: {
          [config]: {
            messages: {
              // Add a fullName message
              fullName: {
                id: 'field.persons_common.birthPlace.fullName',
                defaultMessage: 'Where born',
              },
            },
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/tgn',
              },
            },
          },
        },
        deathPlace: {
          [config]: {
            messages: {
              // Add a fullName message
              fullName: {
                id: 'field.persons_common.deathPlace.fullName',
                defaultMessage: 'Where died',
              },
            },
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/tgn',
              },
            },
          },
        },
      },
      'ns2:persons_lhmc': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/domain/lhmc',
          },
        },
        relatedPerson: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_lhmc.relatedPerson.name',
                defaultMessage: 'Name',
              },
              fullName: {
                id: 'field.persons_lhmc.relatedPerson.fullName',
                defaultMessage: 'Related person name',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-person-name',
                source: 'person/local,person/ulan,person/shared',
              },
            },
          },
        },
        relationshipType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_lhmc.relationshipType.name',
                defaultMessage: 'Type',
              },
              fullName: {
                id: 'field.persons_lhmc.relationshipType.fullName',
                defaultMessage: 'Related person type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-related-person-type',
                source: 'personrelationship',
              },
            },
          },
        },
        relationshipNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_lhmc.relationshipNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.persons_lhmc.relationshipNote.fullName',
                defaultMessage: 'Related person note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-related-person-note',
              },
            },
          },
        },
        placeOrResidence: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_lhmc.placeOrResidence.name',
                defaultMessage: 'Name',
              },
              fullName: {
                id: 'field.persons_lhmc.placeOrResidence.fullName',
                defaultMessage: 'Place name',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-place',
                source: 'place/local,place/tgn,place/shared',
              },
            },
          },
        },
        placeNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_lhmc.placeNote.name',
                defaultMessage: 'Note',
              },
              fullName: {
                id: 'field.persons_lhmc.placeNote.fullName',
                defaultMessage: 'Place note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-place-note',
              },
            },
          },
        },
        publicationsPersonGroupList: {
          // This whole group was misnamed in 4.x. It's a citation, not a person.
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicationsPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_lhmc.publicationsPersonGroup.name',
                  defaultMessage: 'Publication',
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
            publicationsPerson: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_lhmc.publicationsPerson.name',
                    defaultMessage: 'Name',
                  },
                  fullName: {
                    id: 'field.persons_lhmc.publicationsPerson.fullName',
                    defaultMessage: 'Publication name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/worldcat,citation/shared',
                  },
                },
              },
            },
            publicationsPersonNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_lhmc.publicationsPersonNote.name',
                    defaultMessage: 'Note',
                  },
                  fullName: {
                    id: 'field.persons_lhmc.publicationsPersonNote.fullName',
                    defaultMessage: 'Publication note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};