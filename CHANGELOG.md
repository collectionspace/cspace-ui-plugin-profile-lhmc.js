# Change Log

## v8.0.0

v8.0.0 adds support for CollectionSpace 8.1, and requires cspace-ui version 10.

### Breaking Changes

- On the record editor form for Object records:
  - The field Production Place Verbatim (`objectProductionPlacesVerbatim`) has been added. If this version of the local history and materials profile is used with an older CollectionSpace server, values entered in these fields will not be saved.
  - The field Object Count Unit (`objectCountUnit`) has been added to the field group Object Count Group. If this version of the local history and materials profile is used with an older CollectionSpace server, values entered in these fields will not be saved.
  - The field group Publised Related Links (`publishedRelatedLinkGroupList/publishedRelatedLinkGroup`) has been added. If this version of the local history and materials profile is used with an older CollectionSpace server, values entered in these fields will not be saved.
  - The field Phase has been removed from the default template
  - The field Sex has been removed from the default template
  - The field group Form (`forms/form`) has been removed from the default template

## v7.0.0

v7.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The number of objects field (`numberOfObjects`) has been replaced with the repeating object count group (`objectCountGroupList/objectCountGroup`). If this version of the local history and material culture profile is used with an older CollectionSpace server, values entered in the repeating group will not be saved.
  - The field collection place field (`fieldCollectionPlace`) has been replaced with the repeating field collection places (`fieldCollectionPlaces/fieldCollectionPlace`). If this version of the local history and material culture profile is used with an older CollectionSpace server, values entered in the repeating field will not be saved.

- On the record editor form for Person records:
  - Various associated authority fields have been added, in the Associated Authorities panel. If this version of the local history and material culture profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

- On the record editor form for Place records:
  - Various associated authority fields have been added, in the Associated Authorities panel. If this version of the local history and material culture profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

## v6.0.0

v6.0.0 adds support for CollectionSpace 7.2.

### Breaking Changes

The record editor form for Object records now includes the following new fields, added in CollectionSpace 7.2. To use this version of the local history and material culture profile with an older CollectionSpace server, these fields should be hidden; otherwise, any values entered will not be saved.

- Description Level (`descriptionLevel`)
- Object Name Controlled (`objectNameList/objectNameGroup/objectNameControlled`)
- Material Controlled (`materialGroupList/materialGroup/materialControlled`)
- Apparel Size (`apparelSizes/apparelSize`)
- Production Era (`objectProductionEras/objectProductionEra`)
- Content controlled event or period/era (`contentEvents/contentEvent`)
- Associated controlled event or period/era (`assocEvents/assocEvent`)

### Other Changes

- Message overrides for fields in the Location/Movement/Inventory procedure inherited from core are removed.
- The message for the LHMC-specific tempLocAuthorizedBy field is changed from "Temp location authorized by" to "Location authorized by".

## v5.0.0

### Breaking Changes

- v5.0.0 requires cspace-ui version 7, and a CollectionSpace 7.1 server. On the record editor form for Object records, copyright fields have been added. These fields are defined in cspace-ui 7.0.0/CollectionSpace 7.1, but not in prior versions. To use this version of cspace-ui-plugin-profile-lhmc with an older version of CollectionSpace, these fields should be hidden; otherwise, any values entered will not be saved.

## v4.0.0

### Breaking Changes

- v4.0.0 requires cspace-ui version 6. On the record editor form for Object records, the annotation field group (`annotationGroupList`) has been added. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-lhmc with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

## v3.1.0

- Added the Named Collection field to Object record editor forms (only if using cspace-ui version 5).
- Enabled the Work authority.

## v3.0.0

v3.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

- v3.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

- A new field, `fieldCollectionFeature`, has been added to the record editor form for object records. This field exists in CollectionSpace 5.2, but not in prior versions of CollectionSpace. To use this version of cspace-ui with an older version of the CollectionSpace server, this new field should be hidden; otherwise, any value entered will not be saved.
