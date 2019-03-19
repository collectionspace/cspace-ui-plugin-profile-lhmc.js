import { defineMessages } from 'react-intl';

export default {
  insuredByValues: {
    values: [
      'lender',
      'borrower',
    ],
    messages: defineMessages({
      lender: {
        id: 'option.insuredByValues.lender',
        defaultMessage: 'lender',
      },
      borrower: {
        id: 'option.insuredByValues.borrower',
        defaultMessage: 'borrower',
      },
    }),
  },
};
