import { useState } from "react";
import activityService from "../services/ActivityService";
import Activity from "../models/ActivityModel";

export default function useSaveActivity() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const saveActivity = async () => {
        const activity: Activity = new Activity(
            "",
            0,
            0,
            new Date(),
            "MGA"
        );
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