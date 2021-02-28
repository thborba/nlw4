import { Router } from 'express';
import { SendMailController } from './src/controllers/SendMailController';
import { SurveysController } from './src/controllers/SurveysController';
import { UserController } from './src/controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendmailController = new SendMailController();


router.post("/sendMail", sendmailController.execute)


router.post("/Users", userController.create);
router.post("/Surveys", surveyController.create);
router.get("/Surveys", surveyController.show);
export { router };