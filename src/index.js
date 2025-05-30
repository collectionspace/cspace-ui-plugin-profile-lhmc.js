/* global cspaceUIPluginProfileLHMC */
/* The cspaceUIPluginProfileLHMC global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import culturalCareExtensionPlugin from 'cspace-ui-plugin-ext-culturalcare';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/lhmc.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '501',
  // normally this is done in each recordType config but with so many it's a little cleaner here
  recordTypes: {
    consultation: {
      disabled: true,
    },
    dutyofcare: {
      disabled: true,
    },
    nagprainventory: {
      disabled: true,
    },
    repatriationrequest: {
      disabled: true,
    },
    summarydocumentation: {
      disabled: true,
    },
    heldintrust: {
      disabled: true,
    },
    restrictedmedia: {
      disabled: true,
    },
  },
  pluginInfo: {
    cspaceUIPluginProfileLHMC: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileLHMC.name',
          defaultMessage: 'Local History and Material Culture profile',
        },
      }),
      packageName: cspaceUIPluginProfileLHMC.packageName,
      packageVersion: cspaceUIPluginProfileLHMC.packageVersion,
      buildNum: cspaceUIPluginProfileLHMC.buildNum,
      repositoryUrl: cspaceUIPluginProfileLHMC.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileLHMC.packageVersion,
    },
  },
  plugins: [
    culturalCareExtensionPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
