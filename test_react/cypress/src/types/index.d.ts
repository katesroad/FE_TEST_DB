import { CSSProp } from 'styled-components'

/**
 * Enable css property on dom element
 * For example
 * ```js
 *  <div css={`
 *    color:red;
 *  `}> </div>
 * ```
 * Doc: https://github.com/styled-components/styled-components/issues/2528
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

export interface IToDo {
  id: number
  userId: number
  title: string
  completed: boolean
}
