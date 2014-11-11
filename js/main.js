
// var material = new THREE.ShaderMaterial({
//                 uniforms: uniforms,
//                 attributes: attributes,
//     vertexShader: document.getElementById( 'vertexshader' ).textContent,
//     fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
//                 blending: THREE.AdditiveBlending,
//                 depthTest: false,
//                 transparent: true
//             })


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight * 9/16 );
renderer.setClearColor( 0xECF0F1 );
var container = document.getElementById('container');
container.appendChild( renderer.domElement );


var mouse = { x: 0, y: 0 }, INTERSECTED;



var oldX = 0;
var oldY = 0;
var mouseX = 0;
var mouseY = 0;

/*

Particle System

*/

var geometry = new THREE.CircleGeometry( 2, 32 );

var raycaster = new THREE.Raycaster();




camera.position.z = 5;

var particleCount = 5466,
    particles = new THREE.Geometry();
    


var colors = [];
// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 800 - 350,
      pY = Math.random() * 800 - 350,
      pZ = Math.random() * 800 - 250,

      particle = new THREE.Vector3(pX, pY, pZ);
      particle.id = p;

  // add it to the geometry
  particles.vertices.push(particle);
  colors[ p ] = new THREE.Color();
  colors[p].setRGB( 0.35, 0.35, 0.35 );
}

particles.colors = colors;

var pMaterial = new THREE.PointCloudMaterial({
      size: 10,
      vertexColors: THREE.VertexColors,
      // map: THREE.ImageUtils.loadTexture(
      //  "particle.png"
      // )
    });

// create the particle system
var particleSystem = new THREE.PointCloud(
    particles,
    pMaterial);


// add it to the scene
scene.add(particleSystem);


/*

Event Listeners

*/

document.addEventListener('mousewheel', clickListener, false);
document.addEventListener('mousedown', mouseDownListener, false);
document.addEventListener('mousemove', mouseMoveListener, false);
document.addEventListener('mouseup', mouseUpListener, false);

var sa = document.getElementById("sa");
var incap = document.getElementById("incap");
var forced = document.getElementById("forced");
var noone = document.getElementById("noone");
var unclear = document.getElementById("unclear");
var remember = document.getElementById("remember");
var responsible = document.getElementById("responsible");



sa.addEventListener("click", saListener, false);
incap.addEventListener("click", incListener, false);
forced.addEventListener("click", forcListener, false);
noone.addEventListener("click", nonListener, false);
unclear.addEventListener("click", uncListener, false);
remember.addEventListener("click", remListener, false);
responsible.addEventListener("click", respListener, false);

function respListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 260; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#225378");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function remListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 173; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#1695A3");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function uncListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 231; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#EB7F00");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function nonListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 205; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#ACF0F2");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function forcListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 131; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#D90000");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function saListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 657; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#FF8C00");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function incListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 526; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#04756F");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}

function incListener(event) {
  for (var p = 0; p < particleCount; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setRGB( 0.35, 0.35,0.35);
    particles.colors = colors;
  }
  for (var p = 0; p < 526; p++) {
    particles.vertices.push(particle);
    colors[ p ] = new THREE.Color();
    colors[p].setStyle("#3498DB");
    particles.colors = colors;
    particleSystem.geometry.colorsNeedUpdate = true;
  }
}


var isDrag = false;
var oldX = 0;


function clickListener(event) {
  if (event.deltaY >= 0) {
    camera.position.z += 5;
  } else {
    camera.position.z -= 5;
  }
}

function mouseDownListener(event) {
  isDrag = true;
  
}

function mouseMoveListener(event) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  if (isDrag) {
    console.log(event.pageX - event.x);
  }
 
}

function mouseUpListener(event) {
  isDrag = false;
}



function csaData() {
  var her = "";
  if (Math.random() < 0.119) {
    her = "She was sexually assaulted.";
    if (Math.random() < 0.80) {
      her = "She was sexually assaulted while incapacitated.";

      // Did not want anyone to know .286
      if (Math.random() < 0.286) {
        her += "<br> She didn't want anyone to know.";
      }

      if (Math.random() < 0.665) {
        her += "<br> She didn't think it was serious.";
      }

      if (Math.random() < 0.359) {
        her += "<br> She was unclear whether it was a crime.";
      }

      if (Math.random() < 0.311) {
        her += "<br> She didn't really remember.";
      }

      if (Math.random() < 0.359) {
        her += "<br> She thought it was her fault.";
      }
    } else {
      her = "She was forcibly sexually assaulted.";
      if (Math.random() < 0.417) {
        her += "<br> She didn't want anyone to know.";
      }

      if (Math.random() < 0.556) {
        her += "<br> She didn't think it was serious.";
      }

      if (Math.random() < 0.368) {
        her += "<br> She was unclear whether it was a crime.";
      }


    }
  } else {
    her = "She was never assaulted.";
  } 

  return her;
}


var numStatements = 0;

function animate() {	
	particleSystem.rotation.y += 0.002;

  var pCount = particleCount;

  while (pCount--) {

    // get the particle
    var particle =
      particles.vertices[pCount];

    var pX = (Math.random() * 2-1)*Math.random()*0.24,
        pY = (Math.random() * 2-1)*Math.random()*0.24,
        pZ = (Math.random() * 2-1)*Math.random()*0.24,
        v = new THREE.Vector3(pX, pY, pZ);

    particle.addVectors(particle, v);
   
  }

  particleSystem.geometry.verticesNeedUpdate = true;


  var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 ).unproject( camera );

  raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );


  var intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      INTERSECTED = intersects[ 0 ].object;

      var statement1 = document.getElementById('statement1');
      var statement2 = document.getElementById('statement2');

      if (numStatements === 0) {
        statement1.innerHTML = " <center>" + "<p>" + csaData() + "</p>";
        statement2.innerHTML = "";
        numStatements += 1;
      } else {
        statement2.innerHTML = " <center>" + "<p>" + csaData() + "</p>";
        numStatements = 0;
      }
      


     
    }
  } else {
    INTERSECTED = null;
  }


	renderer.render( scene, camera );
  requestAnimationFrame( animate );
}


animate();


