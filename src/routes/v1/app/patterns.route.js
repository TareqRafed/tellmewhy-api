import express from 'express';
import { getPatterns } from '../../../controllers';

const router = express.Router();

router.route('patterns/').get(getPatterns);

export default router;
