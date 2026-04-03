import ActivityRepository from '../repositories/ActivityRepository';
class ActivityService {
    #activityRepository;
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }
    async getActivities() {
        return await this.activityRepository.getActivities();
    }
    async addActivity(activity) {
        return await this.activityRepository.addActivity(activity);
    }
    async updateActivity(activity) {
        return await this.activityRepository.updateActivity(activity);
    }
    async deleteActivity(activityId) {
        return await this.activityRepository.deleteActivity(activityId);
    }
}
const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);

export default activityService;
