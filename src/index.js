import "regenerator-runtime/runtime.js"
import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);