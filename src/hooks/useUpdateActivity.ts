import React from "react";
import { useState } from "react";
import activityService from "../services/ActivityService";
export default function useUpdateActivity() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateActivity = async (activity) => {
        setLoading(true);
        setError(null);
        try {
            await activityService.updateActivity(activity);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { updateActivity, loading, error };
}
