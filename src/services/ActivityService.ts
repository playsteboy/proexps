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
}
const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);

export default activityService;
