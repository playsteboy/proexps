import { useState } from "react";
import activityService from "../services/ActivityService";
import Activity from "../models/ActivityModel";
import ActivitySearchModel from "../models/ActivitySearchModel";
export default function useShowActivity() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    const show = async (activitySearchModel: ActivitySearchModel) => {
        setLoading(true);
        try {
            const data: Activity[] = await activityService.getActivities(activitySearchModel);
            setActivities(data);
        } catch (error) {
            console.error("Error fetching activities:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        show,
        activities,
        loading
    };
}