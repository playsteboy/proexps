import { useState } from "react";
import activityService from "../services/ActivityService";
import ActivitySearchModel from "../models/ActivitySearchModel";
const useComputeTotalMoneyLeft = () => {
    const [totalMoneyLeft, setTotalMoneyLeft] = useState<number | null>(null);

    const computeTotal = async (activitySearchModel: ActivitySearchModel) => {
        const result = await activityService.computeTotalMoneyLeft(activitySearchModel);
        setTotalMoneyLeft(result);
    };

    return { totalMoneyLeft, computeTotal };
};

export default useComputeTotalMoneyLeft;
