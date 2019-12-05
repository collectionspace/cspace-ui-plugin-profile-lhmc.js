export default (configContext) => {
  const {
    AutocompleteInput,
    OptionPickerInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        otherNumberList: {
          otherNumber: {
            numberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'numbertype',
                  },
                },
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local,place/tgn',
                },
              },
            },
          },
        },
        textualInscriptionGroupList: {
          textualInscriptionGroup: {
            inscriptionContentType: {
              [config]: {
                view: {
                  props: {
                    source: 'lhmcInscriptionTypes',
                  },
                },
              },
            },
            inscriptionContentMethod: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'inscriptionMethods',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/tgn',
                  },
                },
              },
            },
          },
        },
        assocPlaceGroupList: {
          assocPlaceGroup: {
            assocPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/tgn',
                  },
                },
              },
            },
          },
        },
        ownershipPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/tgn',
              },
            },
          },
        },
      },
      ...extensions.culturalcare.collectionobject.fields,
    },
  };
};
