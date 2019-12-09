function setup() {
  // set the width & height of the sketch
  createCanvas(2550, 3300)

  // draw will be called this many times per second
  //frameRate(60)
}

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    both_fem = loadTable("data/bothfem_ratio.csv", "csv", "header");
    first_author = loadTable("data/firstauthor_ratio.csv", "csv", "header");
    gender_ratio = loadTable("data/gender_ratio.csv", "csv", "header")
    last_author = loadTable("data/lastauthor_ratio.csv", "csv", "header");
    single_fem = loadTable("data/singlefem_ratio.csv", "csv", "header");
    total_counts = loadTable("data/total_counts.csv", "csv", "header");
}

function draw() {
  background(0.0)
  noStroke()
  circle(100, 200, 300)
 }