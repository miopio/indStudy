
function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    both_fem = loadTable("data/bothfem_ratio.csv", "csv", "header");
    first_author = loadTable("data/firstauthor_ratio.csv", "csv", "header");
    gender_ratio = loadTable("data/gender_ratio.csv", "csv", "header");
    last_author = loadTable("data/lastauthor_ratio.csv", "csv", "header");
    single_fem = loadTable("data/singlefem_ratio.csv", "csv", "header");
    total_counts = loadTable("data/total_counts.csv", "csv", "header");
}

function setup() {
  // set the width & height of the sketch
  createCanvas(2000, 2500);
  //createCanvas(2550,2550);
  background(255,255,255);

  // draw will be called this many times per second
  //frameRate(60)

  //gender_ratio variables
  total_fem = gender_ratio.getColumn('female %');
  total_ppl = gender_ratio.getColumn('total');
  year = gender_ratio.getColumn('year');

  //total_count variables
  paper_count = total_counts.getColumn('paper count');
  country_count = total_counts.getColumn('country count');

  //first_author variables
  firstauth_ppl = first_author.getColumn('total');
  firstauth_fem = first_author.getColumn('female %');

  //last_author variables
  lastauth_ppl = last_author.getColumn('total');
  lastauth_fem = last_author.getColumn('female %');

  //single_fem variables
  single_fem_ratio = single_fem.getColumn('single fem %');
  total_single = single_fem.getColumn('total single authors');

  //both_fem variables
  both_fem_ratio = both_fem.getColumn('both fem %');
  total_multiple = both_fem.getColumn('total multiple authors');

  //console.log(total_fem[75]);
  console.log(single_fem.length);
  console.log(both_fem.length);


  total_fem_circles = []
  console.log(year.length);
  for(i = 73; i < 74; i++){
    total_fem[i] = total_fem[i] * 1000;
    colorMode(HSB);
    strokeWeight(2);
    noFill();
    stroke(255, 204, 100);
    //circle(1000, 600, total_fem[i]);
    circle(1000, 600, 100);
    circle(1000, 600, 200);
    circle(1000, 600, 300);
    circle(1000, 600, 400);
    console.log(total_fem[i]);
    //50% and 100% circles
    stroke('red');
    circle(1000,600,1000);
    //circle(1000,600, 500);
    //stroke('orange');
    //triangleSimple(500, 1300, total_ppl[i]/300, total_ppl[i]/300);
    stroke('orange');
    //triangleSimple(400, 2350, paper_count[i]/40, paper_count[i]/40);
    stroke('orange');
    //triangleSimple(400, 2350, paper_count[74]/40, paper_count[74]/40);
    triangleSimple(400, 2350, 10000/40, 10000/40);
    triangleSimple(400, 2350, 20000/40, 20000/40);
    triangleSimple(400, 2350, 30000/40, 30000/40);
    triangleSimple(400, 2350, 40000/40, 40000/40);
    triangleSimple(400, 2350, 50000/40, 50000/40);

    stroke('red');
    triangleSimple(400, 2350, 1000/40, 1000/40);
    triangleSimple(400, 2350, 2000/40, 2000/40);
    triangleSimple(400, 2350, 3000/40, 3000/40);
    triangleSimple(400, 2350, 4000/40, 4000/40);
    triangleSimple(400, 2350, 5000/40, 5000/40);

    //triangle(250,750,total_ppl[i], total_ppl[i], 750, 750);
    stroke('black');
    textSize(36);
    text(year[i], 1500, 200);
    console.log(year[i]);
    //firstauth
    stroke('green');
    //line(100, 100, 100, 100+(firstauth_ppl[i]/20));
    line(50, 100, 50, 100+(500/20));
    line(100, 100, 100, 100+(1000/20));
    line(150, 100, 150, 100+(10000/20));
    //last auth
    stroke('purple');
    //line(200, 100, 200, 100+(lastauth_ppl[i]/20));
    line(200, 100, 200, 100+(20000/20));
    //single auth
    stroke('pink');
    //line(300, 100, 300, 100+(total_single[i]/20));
    line(250, 100, 250, 100+(30000/20));
    //multiple auth
    stroke('lavender');
    //line(400, 100, 400, 100+(total_multiple[i]/20));
    line(300, 100, 300, 100+(40000/20));
    line(350, 100, 350, 100+(50000/20));
    //save("gender_"+year[i]+".jpg");
    save("legend.jpg");
  }
  console.log(year[74]);
  console.log(total_single[74]);
  function triangleSimple(x, y, w, h){
    // A wrapper for standard triangle() command. 
    // triangleSimple has the lower left corner as x,y 
    triangle(x,y, x+w/2, y-h, x+w, y);
  }

  //stroke('orange');
  //triangleSimple(250, 750, total_ppl[i]/10, total_ppl[i]/10);
  //save('myCanvas.jpg');
}

function draw() {
  //background(0.0)
  //noStroke()
  //circle(100, 200, 300);


 }