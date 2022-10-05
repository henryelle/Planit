import { createClient } from '/../node_modules/@supabase/supabase-js/src/index.ts'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
let { data: test, error } = await supabase
  .from('test')
  .select('id')
console.log(data)