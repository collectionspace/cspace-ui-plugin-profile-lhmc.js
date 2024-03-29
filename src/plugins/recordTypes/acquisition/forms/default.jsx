const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDateGroup" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="receivedGroupList" subpath="ns2:acquisitions_lhmc">
              <Field name="receivedGroup">
                <Field name="receivedBy" />
                <Field name="receivedDate" />
              </Field>
            </Field>

            <Field name="acquisitionDateGroupList">
              <Field name="acquisitionDateGroup" />
            </Field>

            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>
          </Col>

          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="transferOfTitleNumber" />

            <Panel name="priceInformation">
              <InputTable name="groupPurchasePrice">
                <Field name="groupPurchasePriceCurrency" />
                <Field name="groupPurchasePriceValue" />
              </InputTable>

              <InputTable name="objectPurchasePrice">
                <Field name="objectPurchasePriceCurrency" />
                <Field name="objectPurchasePriceValue" />
              </InputTable>
            </Panel>

            <Field name="acquisitionReason" />
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Panel>
              <Row>
                <Field name="approvalGroup" />
                <Field name="approvalIndividual" />
                <Field name="approvalStatus" />
                <Field name="approvalDate" />
              </Row>
              <Field name="approvalNote" />
            </Panel>
          </Field>
        </Field>
        <Field name="acquisitionNote" />
        <Field name="acquisitionProvisos" />

        <Row>
          <Field name="acquisitionFundingList">
            <Field name="acquisitionFunding">
              <Field name="acquisitionFundingCurrency" />
              <Field name="acquisitionFundingValue" />
              <Field name="acquisitionFundingSource" />
              <Field name="acquisitionFundingSourceProvisos" />
            </Field>
          </Field>
        </Row>

        <Field name="creditLine" />
      </Panel>

      <Panel name="objectCollectionInformation" collapsible collapsed>
        <Row>
          <Field name="fieldCollectionEventNames">
            <Field name="fieldCollectionEventName" />
          </Field>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
