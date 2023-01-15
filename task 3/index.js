<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<title>Page Title</title>
</head>
<body>

<h1>Excersice Tracker App</h1>


<div class="topnav">

    <div class="topnav-right">
      <a href="#Home">Home</a>
      <a href="#Activity">Activity</a>
    </div>
  </div>
  <div class="card-group">
    <div class="card">
      <img src="images\images.jfif" class="card-img-top" alt="..." width="40px" height="500px">
      <div class="card-body">
        <h5 class="card-title">Artistic Yoga</h5>
        <p class="card-text">Mon,Wed,Fri.</p>
        <p class="card-text"><small class="text-muted">06:30pm-7:45pm.</small></p>
      </div>
    </div>
    <div class="card">
      <img src="images\download.jfif" class="card-img-top" alt="..." width="40px" height="500px">
      <div class="card-body">
        <h5 class="card-title">Artistic Aerobics</h5>
        <p class="card-text">Mon,Wed,Fri.</p>
        <p class="card-text"><small class="text-muted">06:30pm-7:45pm.</small></p>
      </div>
    </div>
    <div class="card">
      <img src="images\images-yoga.jfif" class="card-img-top" alt="..." width="40px" height="500px">
      <div class="card-body">
        <h5 class="card-title">Artistic Zumba</h5>
        <p class="card-text">Mon,Wed,Fri.</p>
        <p class="card-text"><small class="text-muted">06:30pm-7:45pm.</small></p>
      </div>
    </div>
  </div>
  <form action="/action_page.php">
    <label for="Duration">Name</label>
    <input type="text" id="fname" name="fname" placeholder="Name"><br><br>
    <label for="Duration">Description</label>
    <input type="text" id="lname" name="lname" placeholder="Description"><br><br>

    <label for="cars">Choose a Activity:</label>
    <select name="cars" id="cars">
      <option value="run">run</option>
      <option value="bicycle ride">bicycle ride</option>
      <option value="swim">swim</option>
      <option value="walk">walk</option>
      <option value="hike">hike</option>
    </select>
    <br><br>
    <label for="Duration">Duration</label>
    <input type="date" id="datepicker" name="datepicker"> <br><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
