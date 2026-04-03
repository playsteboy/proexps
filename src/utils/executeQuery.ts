import Database from "@tauri-apps/plugin-sql";
export async function executeQuery(query, params = []) {
  const db = await Database.load("sqlite:proexps.db");
  
  let result;
  if (query.trim().toUpperCase().startsWith("SELECT")) {
      result = await db.select(query, params);
  } else {
      result = await db.execute(query, params);
  }
  
  await db.close();
  return result;
}