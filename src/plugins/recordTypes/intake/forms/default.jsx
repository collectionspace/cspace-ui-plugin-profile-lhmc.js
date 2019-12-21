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
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />
            <Field name="entryDate" />
            <Field name="receivedBy" subpath="ns2:intakes_lhmc" />
            <Field name="entryReason" />

            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="returnDate" />
            <Field name="currentOwner" />

            <InputTable name="depositor">
              <Field name="depositor" />
              <Field name="depositorsRequirements" />
            </InputTable>

            <Field name="intakeStatus" subpath="ns2:intakes_lhmc" />
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>

        <Field name="entryNote" />
        <Field name="packingNote" />
      </Panel>

      <Panel name="valuation" collapsible collapsed>
        <Row>
          <Field name="valuer" />
          <div />
        </Row>
      </Panel>

      <Panel name="insurance" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="insurers">
              <Field name="insurer" />
            </Field>

            <Field name="insurancePolicyNumber" />
            <Field name="insuranceRenewalDate" />

            <Field name="premiumGroupList" subpath="ns2:intakes_lhmc">
              <Field name="premiumGroup">
                <Field name="premiumCurrency" />
                <Field name="premiumValue" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="insuranceNote" />
            <Field name="insuredBy" subpath="ns2:intakes_lhmc" />

            <Field name="insuredValueGroupList" subpath="ns2:intakes_lhmc">
              <Field name="insuredValueGroup">
                <Field name="insuredValueCurrency" />
                <Field name="insuredValue" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="location" collapsible collapsed>
        <Field name="currentLocationGroupList">
          <Field name="currentLocationGroup">
            <Field name="currentLocation" />
            <Field name="currentLocationFitness" />
            <Field name="currentLocationNote" />
          </Field>
        </Field>

        <Row>
          <Field name="locationDate" />
          <Field name="inventoriedBy" subpath="ns2:intakes_lhmc" />
        </Row>
      </Panel>

      <Panel name="condition" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="conditionCheckMethods">
              <Field name="conditionCheckMethod" />
            </Field>

            <Field name="conditionCheckReasons">
              <Field name="conditionCheckReason" />
            </Field>

            <Field name="conditionCheckersOrAssessors">
              <Field name="conditionCheckerOrAssessor" />
            </Field>
          </Col>

          <Col>
            <Field name="conditionCheckDate" />
            <Field name="conditionCheckReferenceNumber" />
            <Field name="intakeCondition" subpath="ns2:intakes_lhmc" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
