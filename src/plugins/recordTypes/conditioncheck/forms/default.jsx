const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible>
        <Cols>
          <Col>
            <Field name="conditionCheckRefNumber" />
            <Field name="conditionCheckAssessmentDate" />
            <Field name="conditionCheckMethod" />
          </Col>
          <Col>
            <Field name="conditionCheckReason" />
            <Field name="conditionChecker" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectConditionAndTechAssessmentInfo" collapsible collapsed>
        <Row>
          <Field name="objectAuditCategory" />
          <Field name="conservationTreatmentPriority" />
          <Field name="nextConditionCheckDate" />
        </Row>

        <Field name="completenessGroupList">
          <Field name="completenessGroup">
            <Field name="completeness" />
            <Field name="completenessDate" />
            <Field name="completenessNote" />
          </Field>
        </Field>

        <Field name="hazardGroupList">
          <Field name="hazardGroup">
            <Field name="hazard" />
            <Field name="hazardDate" />
            <Field name="hazardNote" />
          </Field>
        </Field>

        <Field name="techAssessmentGroupList">
          <Field name="techAssessmentGroup">
            <Field name="techAssessment" />
            <Field name="techAssessmentDate" />
          </Field>
        </Field>

        <Field name="conditionCheckLHMCGroupList" subpath="ns2:conditionchecks_lhmc">
          <Field name="conditionCheckLHMCGroup">
            <Field name="conditionLHMC" />
            <Field name="conditionFacetLHMC" />
            <Field name="conditionDateLHMC" />
            <Field name="conditionNoteLHMC" />
          </Field>
        </Field>

        <InputTable name="maintenance">
          <Field name="maintenanceDate" subpath="ns2:conditionchecks_lhmc" />
          <Field name="maintenanceCycle" subpath="ns2:conditionchecks_lhmc" />
          <Field name="maintenanceNote" subpath="ns2:conditionchecks_lhmc" />
        </InputTable>

        <Field name="envConditionNoteGroupList">
          <Field name="envConditionNoteGroup">
            <Field name="envConditionNote" />
            <Field name="envConditionNoteDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="securityRecommendations" />
            <Field name="storageRequirements" />
          </Col>

          <Col>
            <Field name="envRecommendations" />
            <Field name="packingRecommendations" />
            <Field name="specialRequirements" />
            <Field name="legalRequirements" />
          </Col>
        </Cols>

        <Field name="legalReqsHeldGroupList">
          <Field name="legalReqsHeldGroup">
            <Field name="legalReqsHeld" />
            <Field name="legalReqsHeldBeginDate" />
            <Field name="legalReqsHeldEndDate" />
            <Field name="legalReqsHeldNumber" />
            <Field name="legalReqsHeldRenewDate" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="salvagePriorityCodeGroupList">
              <Field name="salvagePriorityCodeGroup">
                <Field name="salvagePriorityCode" />
                <Field name="salvagePriorityCodeDate" />
              </Field>
            </Field>
          </Col>

          <Col />
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
