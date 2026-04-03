import { useState } from "react";
import activityService from "../services/ActivityService";
import Activity from "../models/ActivityModel";

export default function useSaveActivity() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const saveActivity = async (activity: Activity) => {
        setLoading(true);
        try {
            await activityService.addActivity(activity);
        } catch (err) {
            setError(err as string);
        } finally {
            setLoading(false);
        }
    };

    return { saveActivity, loading, error };
}