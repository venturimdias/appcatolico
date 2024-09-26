import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY  || '');

//@ts-ignore
export const { data: dataListaMusica, error: errorListaMusica } : { data: IList[], error: any } = await supabase.from("musica").select();
