import * as controller from './controller';
import { Router } from 'express';

const router = Router();

router.get('/', controller.getAllNgo);
router.get('/:id', controller.getNgoById);
router.post('/', controller.createNgo);
router.put('/:id', controller.updateNgo);
router.delete('/:id', controller.deleteNgo);

export default router;