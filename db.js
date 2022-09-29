import { createClient } from '/node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://db.jsqcjolulesciklixsfz.supabase.co', "public-sbp_677283778dff4427b82450b999b07274269bf70c-key")

// Make a request
const { data: test, error } = await supabase.from('test').select('*')


console.log(data)