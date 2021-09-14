import Appointment from '../models/Appointment';
import { startOfDay, endOfDay, isAfter } from 'date-fns';
import { Op } from 'sequelize';

class AvailableController {

    async index(req, res) {
        const { date } = req.query;
        if (!date) {
            return res.status(400).json({ error: 'Invalid date' })
        }
        const searchDate = Number(date);
        const appointment = await Appointment.findAll({
            where: {
                provider_id: req.params.providerId,
                canceled_at : null,
                date: {
                    [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
                }
            }
        })
        const schedules = [
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
        ];
        const available = map( time => {
            
        })



        return res.json(appointment)
    }
}

export default new AvailableController()