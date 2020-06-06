// JS - ./js/common.js
import './assets/js/common'

// CSS (example)
//import './assets/css/main.css'

// SCSS
import './assets/scss/main.scss'

// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'


//requireAll block
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
//requireAll block end