const { data, error } = await supabase
.from('test')
.select()

function test(){
    window.alert(data)
}