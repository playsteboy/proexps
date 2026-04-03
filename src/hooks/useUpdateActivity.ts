import { useState } from "react";
import activityService from "../services/ActivityService";
import Activity from "../models/ActivityModel";
export default function useUpdateActivity() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateActivity = async (activity: Activity) => {
        setLoading(true);
        setError(null);
        try {
            await activityService.updateActivity(activity);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    return { updateActivity, loading, error };
}
