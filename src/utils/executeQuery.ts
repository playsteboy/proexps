import Database, { type QueryResult } from "@tauri-apps/plugin-sql";

export async function executeQuery<T>(query: string, params: any[] = []): Promise<T | QueryResult> {
  const db = await Database.load("sqlite:proexps.db");
  
  let result;
  if (query.trim().toUpperCase().startsWith("SELECT")) {
      result = await db.select<T>(query, params);
  } else {
      result = await db.execute(query, params);
  }
  
  await db.close();
  return result;
}
