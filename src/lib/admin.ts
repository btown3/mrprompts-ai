import { supabase } from "@/lib/supabase";

export async function checkAdmin(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", userId)
    .single();

  if (error || !data) return false;
  return true;
}
