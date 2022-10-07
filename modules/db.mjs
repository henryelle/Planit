// var SUPABASE_URL = 'https://jsqcjolulesciklixsfz.supabase.co'
// var SUPABASE_KEY =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcWNqb2x1bGVzY2lrbGl4c2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMTI5MjksImV4cCI6MTk3OTg4ODkyOX0.EFcB75c7Wv1ykOs0K6VQZmDdR334dkVCVPXkenHZeII'

// var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
// window.userToken = null

import { createClient } from '../@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jsqcjolulesciklixsfz.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcWNqb2x1bGVzY2lrbGl4c2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMTI5MjksImV4cCI6MTk3OTg4ODkyOX0.EFcB75c7Wv1ykOs0K6VQZmDdR334dkVCVPXkenHZeII")

// Make a request
let { data: test, error } = await supabase
  .from('test')
  .select('*')

export const data = supabase.data;
console.log(data);
/*
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
*/