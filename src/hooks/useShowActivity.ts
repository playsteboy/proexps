import { useState } from "react";
import activityService from "../services/ActivityService";
import Activity from "../models/ActivityModel";
export default function useShowActivity() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    const show = async () => {
        setLoading(true);
        try {
            const data: Activity[] = await activityService.getActivities();
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