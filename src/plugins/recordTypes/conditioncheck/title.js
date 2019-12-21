export default (configContext) => (data) => {
  const {
    getPart,
    deepGet,
  } = configContext.recordDataHelpers;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'conditionchecks_common');
  const lhmc = getPart(data, 'conditionchecks_lhmc');

  const conditioncheckRefNumber = common && common.get('conditionCheckRefNumber');
  const condition = lhmc && deepGet(lhmc, ['conditionCheckLHMCGroupList', 'conditionCheckLHMCGroup', 0, 'conditionLHMC']);
  const formattedCondition = formatRefName(condition);

  return [conditioncheckRefNumber, formattedCondition].filter((part) => !!part).join(' – ');
};
