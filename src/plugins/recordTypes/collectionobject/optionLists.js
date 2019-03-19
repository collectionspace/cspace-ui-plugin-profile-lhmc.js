import { defineMessages } from 'react-intl';

export default {
  objectStatuses: {
    values: [
      'copy',
      'forgery',
      'holotype',
      'original',
      'paralectotype',
      'paratype',
      'type',
    ],
    messages: defineMessages({
      original: {
        id: 'option.objectStatuses.original',
        defaultMessage: 'original',
      },
    }),
  },
  // The options for textual inscription types are customized for lhmc, but the ones for
  // non-textual inscription types aren't, so add a new option list instead of modifying the
  // inscriptionTypes option list.
  lhmcInscriptionTypes: {
    values: [
      'hallmark',
      'stamp',
      'signature',
      'maker\'s-mark',
      'paper-tag',
      'cloth-label',
    ],
    messages: defineMessages({
      hallmark: {
        id: 'option.lhmcInscriptionTypes.hallmark',
        defaultMessage: 'hallmark',
      },
      stamp: {
        id: 'option.lhmcInscriptionTypes.stamp',
        defaultMessage: 'stamp',
      },
      signature: {
        id: 'option.lhmcInscriptionTypes.signature',
        defaultMessage: 'signature',
      },
      'maker\'s-mark': {
        id: 'option.lhmcInscriptionTypes.maker\'s-mark',
        defaultMessage: 'maker\'s mark',
      },
      'paper-tag': {
        id: 'option.lhmcInscriptionTypes.paper-tag',
        defaultMessage: 'paper tag',
      },
      'cloth-label': {
        id: 'option.lhmcInscriptionTypes.cloth-label',
        defaultMessage: 'cloth label',
      },
    }),
  },
  inscriptionMethods: {
    values: [
      'engraved',
      'painted',
      'stenciled',
      'etched',
      'embossed',
      'stamped',
      'embroidered',
      'pen-and-ink',
      'pencil',
    ],
    messages: defineMessages({
      engraved: {
        id: 'option.inscriptionMethods.engraved',
        defaultMessage: 'engraved',
      },
      painted: {
        id: 'option.inscriptionMethods.painted',
        defaultMessage: 'painted',
      },
      stenciled: {
        id: 'option.inscriptionMethods.stenciled',
        defaultMessage: 'stenciled',
      },
      etched: {
        id: 'option.inscriptionMethods.etched',
        defaultMessage: 'etched',
      },
      embossed: {
        id: 'option.inscriptionMethods.embossed',
        defaultMessage: 'embossed',
      },
      stamped: {
        id: 'option.inscriptionMethods.stamped',
        defaultMessage: 'stamped',
      },
      embroidered: {
        id: 'option.inscriptionMethods.embroidered',
        defaultMessage: 'embroidered',
      },
      'pen-and-ink': {
        id: 'option.inscriptionMethods.pen-and-ink',
        defaultMessage: 'pen & ink',
      },
      pencil: {
        id: 'option.inscriptionMethods.pencil',
        defaultMessage: 'pencil',
      },
    }),
  },
};
