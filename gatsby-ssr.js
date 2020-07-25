import { jsx, InitializeColorMode } from 'theme-ui'

export { wrapRootElement } from './src/gatsby-plugin-theme-ui/provider'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
