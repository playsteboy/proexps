import ActivityRepository from '../repositories/ActivityRepository';
import Activity from '../models/ActivityModel';
import type { QueryResult } from "@tauri-apps/plugin-sql";
class ActivityService {
    private activityRepository: ActivityRepository;
    constructor(activityRepository: ActivityRepository) {
        this.activityRepository = activityRepository;
    }
    async getActivities(): Promise<Activity[]> {
        return await this.activityRepository.getActivities();
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
    async computeTotalMoneyLeft(): Promise<number> {
        const activities = await this.getActivities();
        return activities.reduce((total, activity) => {
            const moneyIn = activity.getMoneyIn() || 0;
            const moneyOut = activity.getMoneyOut() || 0;
            return total + moneyIn - moneyOut;
        }
        , 0);
    }
        
}
const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);

export default activityService;
