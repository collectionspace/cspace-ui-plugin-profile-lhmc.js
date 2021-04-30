# Change Log

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
