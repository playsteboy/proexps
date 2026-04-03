import { useState } from "react";
import activityService from "../services/ActivityService";
export default function useShowActivity() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    const show = async () => {
        setLoading(true);
        try {
            const data = await activityService.getActivities();
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