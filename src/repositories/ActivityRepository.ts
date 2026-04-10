import { executeQuery } from "../utils/executeQuery";
import {initializeDatabase} from "../config/DBConnection";
import Activity from "../models/ActivityModel";
import type { QueryResult } from "@tauri-apps/plugin-sql";
"use strict";
class ActivityRepository {
    constructor() {
        initializeDatabase();
    }
async getActivities(): Promise<Activity[]> {
    try{
        const query = "SELECT id, name, money_in, money_out, date FROM activities";
        const rows = await executeQuery<Record<string, any>[]>(query);
        if (!Array.isArray(rows)) return [];
        return rows.map((row) => new Activity(
            row.name,
            row.money_in||0,
            row.money_out||0,
            new Date(row.date),
            row.id
            ));
    }catch(error){
        console.error("Error fetching activities:", error);
        throw error;
    }
}

async addActivity(activity: Activity): Promise<QueryResult>  {
    try{
        const query = "INSERT INTO activities (name, money_in, money_out, date) VALUES (?, ?, ?, ?)";
    const params = [
        activity.getName(), 
        activity.getMoneyIn(), 
        activity.getMoneyOut(), 
        activity.getDate()];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error adding activity:", error);
        throw error;
    }
}

async updateActivity(activity: Activity): Promise<QueryResult> {
    try{
        const query = "UPDATE activities SET name = ?, money_in = ?, money_out = ?, date = ? WHERE id = ?";
    const params = [
        activity.getName(), 
        activity.getMoneyIn(), 
        activity.getMoneyOut(), 
        activity.getDate(), 
        activity.getId()];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error updating activity:", error);
        throw error;
    }
}

async deleteActivity(activityId:number): Promise<QueryResult>  {
    try{
        const query = "DELETE FROM activities WHERE id = ?";
    const params = [activityId];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error deleting activity:", error);
        throw error;
    }
}
}
export default ActivityRepository;