function startTest() {

  document.getElementById("ping").innerHTML = "Testing...";
  document.getElementById("download").innerHTML = "Testing...";
  document.getElementById("upload").innerHTML = "Testing...";

  setTimeout(function() {

    let ping = Math.floor(Math.random() * 50) + 10;
    let download = Math.floor(Math.random() * 150) + 20;
    let upload = Math.floor(Math.random() * 80) + 10;

    document.getElementById("ping").innerHTML = ping + " ms";
    document.getElementById("download").innerHTML = download + " Mbps";
    document.getElementById("upload").innerHTML = upload + " Mbps";

  }, 2000);
}
