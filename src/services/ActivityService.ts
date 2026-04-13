import ActivityRepository from '../repositories/ActivityRepository';
import Activity from '../models/ActivityModel';
import type { QueryResult } from "@tauri-apps/plugin-sql";
import ActivitySearchModel from '../models/ActivitySearchModel';
class ActivityService {
    private activityRepository: ActivityRepository;
    constructor(activityRepository: ActivityRepository) {
        this.activityRepository = activityRepository;
    }
    async getActivities(activitySearchModel: ActivitySearchModel): Promise<Activity[]> {
    let activities: Activity[] = await this.activityRepository.getActivities();
    if (activitySearchModel.getName()) {
        activities = activities.filter(activity => 
            activity.getName()?.toLowerCase().includes(activitySearchModel.getName()?.toLowerCase() || '')
        );
    }

    if (activitySearchModel.getMoneyIn() !== undefined) {
        activities = activities.filter(activity => activity.getMoneyIn() === activitySearchModel.getMoneyIn());
    }

    if (activitySearchModel.getMoneyOut() !== undefined) {
        activities = activities.filter(activity => activity.getMoneyOut() === activitySearchModel.getMoneyOut());
    }

    if (activitySearchModel.getDate() !== undefined) {
        activities = activities.filter(activity => 
            activity.getDate()?.toDateString() === activitySearchModel.getDate()?.toDateString()
        );
    }

    if (activitySearchModel.getCurrency() !== undefined) {
        activities = activities.filter(activity => 
            activity.getCurrency()?.toLowerCase() === activitySearchModel.getCurrency()?.toLowerCase()
        );
    }

    return activities;
}

    async addActivity(activity: Activity): Promise<QueryResult> {
        return await this.activityRepository.addActivity(activity);
    }
    async updateActivity(activity: Activity): Promise<QueryResult> {
        return await this.activityRepository.updateActivity(activity);
    }
    async deleteActivity(activityId: number): Promise<QueryResult> {
        return await this.activityRepository.deleteActivity(activityId);
    }
    async computeTotalMoneyLeft(activitySearchModel: ActivitySearchModel): Promise<number> {
    const activities = await this.getActivities(activitySearchModel);
    const ratesToMGA: Record<string, number> = {
        'MGA': 1,
        'MGF': 0.2, 
        'EUR': 4850.50,
        'USD': 4500.00 
    };


    const totalInMGA = activities.reduce((total, activity) => {
        const currency = activity.getCurrency()?.toUpperCase() || 'MGA';
        const rate = ratesToMGA[currency] || 1;
        const balance = (activity.getMoneyIn() || 0) - (activity.getMoneyOut() || 0);
        return total + Math.round(balance * rate);
    }, 0);

    return totalInMGA;
}
        
}
const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);

export default activityService;
