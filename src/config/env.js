// en esta carpeta el manejo de variables de entorno
/*import env from 'dotenv'
import envvar from 'env-var';

env.config();

 export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}*/
// app.js

import env from 'dotenv';
import envvar from 'env-var';

env.config();

const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
};

export { envs };


