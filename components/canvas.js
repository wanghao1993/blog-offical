// 节点类，表示线条中的一个点
function Node() {
  this.x = 0; // x坐标
  this.y = 0; // y坐标
  this.vx = 0; // x方向速度
  this.vy = 0; // y方向速度
}

// 振荡类
function N(e) {
  this.init(e || {});
}

N.prototype = {
  // 初始化振荡参数
  init: function (e) {
    this.phase = e.phase || 0; // 相位
    this.offset = e.offset || 0; // 偏移
    this.frequency = e.frequency || 0.001; // 频率
    this.amplitude = e.amplitude || 1; // 振幅
  },
  // 更新振荡值
  update: function () {
    this.phase += this.frequency;
    e = this.offset + Math.sin(this.phase) * this.amplitude;
    return e;
  },
  // 返回当前振荡值
  value: () => e,
};

// 线条类
function Line(e) {
  this.init(e || {});
}

Line.prototype = {
  // 初始化线条参数
  init: function (e) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05; // 弹性系数
    this.friction = E.friction + 0.01 * Math.random() - 0.005; // 摩擦力
    this.nodes = []; // 节点数组
    for (let t, n = 0; n < E.size; n++) {
      t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  // 更新线条节点位置
  update: function () {
    let e = this.spring;
    let t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (let n, i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  },
  // 绘制线条
  draw: function () {
    let e;
    let t;
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }

    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  },
};

// 鼠标移动事件处理
function onMousemove(e) {
  function o() {
    lines = [];
    for (let e = 0; e < E.trails; e++) {
      lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
    }
    console.log(lines);
  }
  function c(e) {
    if (e.touches) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }
  function l(e) {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }
  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove);
  document.addEventListener("mousemove", c);
  document.addEventListener("touchmove", c);
  document.addEventListener("touchstart", l);
  c(e);
  o();
  render();
}

// 渲染函数
function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(f.update())},90%,50%,0.25)`;
    ctx.lineWidth = 1;
    for (let e, t = 0; t < E.trails; t++) {
      e = lines[t];
      e.update();
      e.draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

// 调整画布尺寸
function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

// 全局变量和配置
let ctx;
let f;
let e = 0;
const pos = {};
let lines = [];
const E = {
  debug: true, // 调试模式
  friction: 0.5, // 摩擦力
  trails: 20, // 轨迹数量
  size: 50, // 节点数量
  dampening: 0.25, // 阻尼系数
  tension: 0.98, // 拉力系数
};

// 导出渲染Canvas的函数
export const renderCanvas = () => {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.running = true;
  ctx.frame = 1;
  f = new N({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("touchstart", onMousemove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  resizeCanvas();
};
