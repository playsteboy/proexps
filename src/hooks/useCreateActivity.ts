import React from "react";
import { useState } from "react";
import activityService from "../services/ActivityService";

export default function useSaveActivity() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const saveActivity = async (activity) => {
        setLoading(true);
        try {
            await activityService.addActivity(activity);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { saveActivity, loading, error };
}