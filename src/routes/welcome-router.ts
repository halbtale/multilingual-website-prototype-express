import ExpressPromiseRouter from 'express-promise-router';
import { welcome } from '../controllers/welcome-controller';

const router = ExpressPromiseRouter();

router.route('/').get(welcome)

export default router;
