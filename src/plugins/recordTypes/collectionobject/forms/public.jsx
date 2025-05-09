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
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>
        </Row>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <Col>
                  <Field name="title" />
                  <Field name="titleLanguage" />
                </Col>

                <Col>
                  <Field name="titleType" />

                  <Field name="titleTranslationSubGroupList">
                    <Field name="titleTranslationSubGroup">
                      <Field name="titleTranslation" />
                      <Field name="titleTranslationLanguage" />
                    </Field>
                  </Field>
                </Col>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectNameControlled" />
            <Field name="objectName" />
          </Field>
        </Field>
      </Panel>

      <Panel name="desc" collapsible>
        <Field name="materialGroupList">
          <Field name="materialGroup">
            <Field name="materialControlled" />
            <Field name="material" />
          </Field>
        </Field>

        <Field name="measuredPartGroupList">
          <Field name="measuredPartGroup" tabular={true}>
            <Row>
              <Field name="measuredPart" />
              <Field name="dimensionSummary" />
            </Row>
          </Field>
        </Field>

        <Panel name="content" collapsible>
          <Field name="contentDescription" />

          <Cols>
            <Col>
              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              <Field name="contentEvents">
                <Field name="contentEvent" />
              </Field>
            </Col>
            <Col>
              <Field name="contentPersons">
                <Field name="contentPerson" />
              </Field>

              <Field name="contentOrganizations">
                <Field name="contentOrganization" />
              </Field>
           </Col>
          </Cols>
        </Panel>
      </Panel>

      <Panel name="prod" collapsible>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup">
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="rights" collapsible collapsed>
        <Field name="rightsGroupList">
          <Field name="rightsGroup" tabular>
            <Field name="standardizedRightStatement" />
            <Field name="rightStatement" />
          </Field>
        </Field>
      </Panel>

      <Panel name="rightsin" collapsible collapsed>
        <Field name="rightsInGroupList">
          <Field name="rightsInGroup">
            <Panel>
              <Col>
                <Field name="rightReproductionStatement" />
              </Col>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="publishedRelatedLinkGroupList">
          <Field name="publishedRelatedLinkGroup">
            <Field name="relatedLink" />
            <Field name="descriptiveTitle" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
