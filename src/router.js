import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import multer from 'multer';
import multerConfig from './config/multer';
import File from './app/controllers/FileController'

import Auth from './app/middlewares/auth'



const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);


routes.use(Auth)
routes.put('/users', UserController.update);
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);
routes.post('/files', upload.single('file'),File.store);

routes.get('/providers', ProviderController.index);
routes.get('/schedules', ScheduleController.index);
routes.get('/notification', NotificationController.index);
routes.put('/notification/:id', NotificationController.update);


export default routes;