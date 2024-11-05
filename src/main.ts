import './style.css'

//import './topics/01-basic-types.ts'
//import './topics/02-objetc-interfaces.ts'
//import './topics/03-functions.ts'
//import './topics/04-homework-types.ts'
//import './topics/05-basic-destructuring.ts'
//import './topics/06-function-destructuring.ts'
//import './topics/07-import-export.ts'
//import './topics/08-clasess.ts'
//import './topics/09-generics.ts'
import './topics/10-decotators.ts'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hello
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
