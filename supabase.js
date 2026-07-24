import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qhyuhsnavoxnunparqua.supabase.co";
const supabaseKey = "sb_secret_VLiG5SnVfqJaHm6m1KpzBQ_6emBMisB";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);