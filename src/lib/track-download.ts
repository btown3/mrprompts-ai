import { supabase } from "./supabase";

export async function trackDownload(userId: string, slug: string) {
  await supabase.from("downloads").upsert(
    { user_id: userId, slug },
    { onConflict: "user_id,slug" }
  );
}
