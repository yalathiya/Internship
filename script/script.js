// Loading content of weeks
function loadWeek(week) {
  // Use AJAX or fetch to load content dynamically
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // If the request is successful, insert the content into the 'weekContent' div
      document.getElementById("weekContent").innerHTML = xhr.responseText;
      console.log(xhr.responseText);
    }
  };

  // Replace 'weeks/week1.html' with the actual path to your HTML file
  xhr.open("GET", week, true);
  xhr.send();
}
