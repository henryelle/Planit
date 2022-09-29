import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://db.jsqcjolulesciklixsfz.supabase.co', "public-sbp_677283778dff4427b82450b999b07274269bf70c-key")

const { data, error } = await supabase
.from('test')
.select()

console.log(data)