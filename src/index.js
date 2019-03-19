/* global cspaceUIPluginProfileLHMC */
/* The cspaceUIPluginProfileLHMC global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import culturalCareExtensionPlugin from 'cspace-ui-plugin-ext-culturalcare';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/lhmc.css';

module.exports = () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '501',
  pluginInfo: {
    cspaceUIPluginProfileLHMC: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileLHMC.name',
          defaultMessage: 'Local History and Material Culture profile',
        },
      }),
      version: cspaceUIPluginProfileLHMC.packageVersion,
    },
  },
  plugins: [
    culturalCareExtensionPlugin(),
    ...plugins.map(plugin => plugin()),
  ],
});
