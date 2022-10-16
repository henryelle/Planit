function toggleAddMenu() {
    var form = document.getElementById("task-form");
    console.log(form.style.display)
    if(form.style.display == "" || form.style.display == "none") {
      form.style.display = "block";
      return;
    }
    if(form.style.display == "block") {
      form.style.display = "none";
      return;
    }
  }