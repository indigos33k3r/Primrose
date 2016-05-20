var GRASS = "../images/grass.png",
  ROCK = "../images/rock.png",
  SAND = "../images/sand.png",
  WATER = "../images/water.png",
  DECK = "../images/deck.png",

  env = new Primrose.BrowserEnvironment("Editor3D", {
    skyTexture: "../images/bg2.jpg",
    ambientSound: "../audio/wind.ogg",
    groundTexture: GRASS,
    fullScreenIcon: "../models/monitor.obj",
    VRIcon: "../models/cardboard.obj",
    font: "../fonts/helvetiker_regular.typeface.js"
  }),

  subScene = new THREE.Object3D(),

  editor = null,
  output = null,
  button1 = null,
  editorFrame = null,
  editorFrameMesh = null,
  documentation = null,
  documentationMesh = null,
  stereoImage = null,
  stereoImageMesh = null,

  modA = isOSX ? "metaKey" : "ctrlKey",
  modB = isOSX ? "altKey" : "shiftKey",
  cmdA = isOSX ? "CMD" : "CTRL",
  cmdB = isOSX ? "OPT" : "SHIFT",
  cmdPre = cmdA + "+" + cmdB,

  scriptUpdateTimeout,
  lastScript = null,
  scriptAnimate = null,

  editorCenter = new THREE.Object3D();

env.addEventListener("ready", function () {
  env.scene.add(editorCenter);
  env.scene.add(subScene);

  stereoImage = env.createElement("img");
  stereoImage.id = "StereoImage";
  stereoImage.className = "stereo";
  stereoImage.addEventListener("load", function (evt) {
    stereoImageMesh = env.appendChild(stereoImage);
    stereoImageMesh.rotation.set(0, 75 * Math.PI / 180, 0);
    stereoImageMesh.position.set(-4, env.avatarHeight, -1);
  }, false);
  stereoImage.src = "../images/prong.stereo.jpg";

  var editorSize = isMobile ? 512 : 1024,
    fontSize = isMobile ? 10 : 20;

  editorFrame = new Primrose.Surface({
    id: "EditorFrame",
    bounds: new Primrose.Text.Rectangle(0, 0, editorSize, editorSize)
  });

  editor = new Primrose.Text.Controls.TextBox({
    id: "Editor",
    bounds: new Primrose.Text.Rectangle(0, 0, editorFrame.surfaceWidth, Math.floor(editorFrame.surfaceHeight * 2 / 3)),
    tokenizer: Primrose.Text.Grammars.JavaScript,
    value: getSourceCode(isInIFrame),
    fontSize: fontSize
  });

  output = new Primrose.Text.Controls.TextBox({
    id: "Output",
    bounds: new Primrose.Text.Rectangle(0, editor.surfaceHeight + 25, editorFrame.surfaceWidth, editorFrame.surfaceHeight - editor.surfaceHeight - 25),
    tokenizer: Primrose.Text.Grammars.PlainText,
    hideLineNumbers: true,
    readOnly: true,
    fontSize: fontSize
  });

  button1 = new Primrose.Controls.Button2D({
    id: "ThemeButton",
    bounds: new Primrose.Text.Rectangle(editorFrame.surfaceWidth - 400, output.bounds.top, 400, 45),
    value: "Switch to dark theme",
    backgroundColor: "#ffff00",
    color: "#0000ff"
  });

  button1.addEventListener("click", function () {
    var nextTheme = Primrose.Text.Themes.Default,
      nextString = "Switch to dark theme";
    if (editor.theme.name === nextTheme.name) {
      nextTheme = Primrose.Text.Themes.Dark;
      nextString = "Switch to light theme";
    }
    console.log("Switching to theme: " + nextTheme.name);
    documentation.theme = output.theme = editor.theme = nextTheme;
    button1.value = nextString;
  }, false);

  editorFrame.appendChild(output);
  editorFrame.appendChild(editor);
  editorFrame.appendChild(button1);
  editorFrameMesh = textured(shell(3, 10, 10), editorFrame, {
    opacity: 0.75
  });
  editorFrameMesh.name = "MyWindow";
  editorFrameMesh.position.set(0, 0, 0);
  editorCenter.add(editorFrameMesh);
  env.registerPickableObject(editorFrameMesh);

  documentation = new Primrose.Controls.HtmlDoc({
    id: "Documentation",
    bounds: new Primrose.Text.Rectangle(0, 0, editorSize, editorSize),
    element: "docPage"
  });

  documentationMesh = textured(quad(2, 2), documentation);
  documentationMesh.position.set(-2.2, env.avatarHeight, -1);
  documentationMesh.rotation.set(0, Math.PI / 4, 0);
  env.scene.add(documentationMesh);
  env.registerPickableObject(documentationMesh);

  console.log("INSTRUCTIONS:");
  console.log(" - " + cmdPre + "+E to show/hide editor");
  console.log(" - " + cmdPre + "+X to reload original demo code");
  console.log(" - Z to reset position/sensor");
  console.log();
});

env.addEventListener("update", function (dt) {
  if (!scriptUpdateTimeout) {
    scriptUpdateTimeout = setTimeout(updateScript, 500);
  }

  editorCenter.position.copy(env.player.position);

  if (scriptAnimate) {
    // If quality has degraded, it's likely because the user bombed on a script.
    // Let's help them not lose their lunch.
    if (env.quality === Primrose.Quality.NONE) {
      scriptAnimate = null;
      wipeScene();
    }
    else{
      scriptAnimate.call(env, dt);
    }
  }
});

env.addEventListener("keydown", function (evt) {
  if (evt[modA] && evt[modB]) {
    if (evt.keyCode === Primrose.Keys.E) {
      documentationMesh.visible = editorFrameMesh.visible = !editorFrameMesh.visible;
      documentationMesh.disabled = editorFrameMesh.disabled = !editorFrameMesh.disabled;
      if (!editorFrameMesh.visible && env.currentEditor && env.currentEditor.focused) {
        env.currentEditor.blur();
        env.currentEditor = null;
      }
    }
    else if (evt.keyCode === Primrose.Keys.X) {
      editor.value = getSourceCode(true);
    }
  }

  if (scriptUpdateTimeout) {
    clearTimeout(scriptUpdateTimeout);
    scriptUpdateTimeout = null;
  }
});

window.addEventListener("unload", function () {
  if (editor) {
    var script = editor.value;
    if (script.length > 0) {
      setSetting("code", script);
    }
  }
});

function wipeScene() {
  for (var i = subScene.children.length - 1; i >= 0; --i) {
    subScene.remove(subScene.children[i]);
  }
}

function updateScript() {
  var newScript = editor.value,
    exp;
  if (newScript !== lastScript) {
    scriptUpdateTimeout = null;
    lastScript = newScript;
    if (newScript.indexOf("function update") >= 0 &&
      newScript.indexOf("return update") < 0) {
      newScript += "\nreturn update;";
    }
    try {
      console.log("----- loading new script -----");
      var scriptUpdate = new Function("scene", newScript);
      wipeScene();
      scriptAnimate = scriptUpdate.call(env, subScene);
      if (scriptAnimate) {
        scriptAnimate(0);
      }
      console.log("----- script loaded -----");
      if (!scriptAnimate) {
        console.log("----- No update script provided -----");
      }
      else if (env.quality === Primrose.Quality.NONE) {
        env.quality = Primrose.Quality.MEDIUM;
      }
    }
    catch (exp) {
      console.error(exp);
      scriptAnimate = null;
      throw exp;
    }
  }
}

logger.setup(logger.USER, function (msg) {
  if (output) {
    var data = JSON.parse(msg),
      t = output;
    t.value += data.name + ":> " + data.args[0] + "\n";
    t.selectionStart = t.selectionEnd = t.value.length;
    t.scrollIntoView(t.frontCursor);
  }
});

function clrscr() {
  if (output) {
    var t = output;
    t.value = "";
    t.selectionStart = t.selectionEnd = t.value.length;
    t.scrollIntoView(t.frontCursor);
  }
}

function getSourceCode(skipReload) {
  var defaultDemo = testDemo.toString(),
    src = skipReload && defaultDemo || getSetting("code", defaultDemo);
  // If there was no source code stored in local storage,
  // we use the script from a saved function and assume
  // it has been formatted with 2 spaces per-line.
  if (src === defaultDemo) {
    var lines = src.replace("\r\n", "\n").split("\n");
    lines.pop();
    lines.shift();
    for (var i = 0; i < lines.length; ++i) {
      lines[i] = lines[i].substring(2);
    }
    src = lines.join("\n");
  }
  return src.trim();
}

function testDemo(scene) {
  var WIDTH = 5,
    HEIGHT = 5,
    DEPTH = 5,
    MIDX = WIDTH / 2 - 5,
    MIDY = HEIGHT / 2,
    MIDZ = DEPTH / 2,
    t = 0,
    R = Primrose.Random,
    start = put(hub())
      .on(scene)
      .at(-MIDX, 0, -DEPTH - 2);

  var balls = [];

  for (var i = 0; i < 10; ++i) {
    balls.push(put(brick(DECK))
      .on(start)
      .at(R.int(WIDTH),
      R.int(HEIGHT),
      R.int(DEPTH)));

    balls[i].velocity = v3(
      R.number(0, WIDTH),
      R.number(0, HEIGHT),
      R.number(0, DEPTH));
  }

  function update(dt) {
    t += dt;
    for (var i = 0; i < balls.length; ++i) {
      var ball = balls[i],
        p = ball.position,
        v = ball.velocity;
      p.add(v.clone().multiplyScalar(dt));
      if (p.x < 0 && v.x < 0 || WIDTH <= p.x && v.x > 0) {
        v.x *= -1;
      }
      if (p.y < 1 && v.y < 0 || HEIGHT <= p.y && v.y > 0) {
        v.y *= -1;
      }
      if (p.z < 0 && v.z < 0
        || DEPTH <= p.z && v.z > 0) {
        v.z *= -1;
      }
    }
  }
}