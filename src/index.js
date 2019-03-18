/* global cspaceUIPluginProfileLHMC */
/* The cspaceUIPluginProfileLHMC global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
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
  plugins: plugins.map(plugin => plugin()),
});
