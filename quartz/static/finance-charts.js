(function () {
  var BASE_URL = "https://chaebin-park.github.io/finance-wiki/data/prices/";
  var chartInstances = new WeakMap();

  function loadChartJs() {
    return new Promise(function (resolve, reject) {
      if (window.Chart) return resolve();
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js";
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function initCharts() {
    var containers = document.querySelectorAll(".finance-price-chart");
    if (!containers.length) return;

    try {
      await loadChartJs();
    } catch (e) {
      return;
    }

    containers.forEach(async function (container) {
      if (container.dataset.initialized) return;
      container.dataset.initialized = "true";

      var ticker = container.dataset.ticker;
      var canvas = container.querySelector("canvas");
      if (!ticker || !canvas) return;

      try {
        var resp = await fetch(BASE_URL + ticker + ".json");
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        var data = await resp.json();

        var last = data.closes[data.closes.length - 1];
        var first = data.closes[0];
        var isUp = last >= first;
        var color = isUp ? "rgba(34,197,94,1)" : "rgba(239,68,68,1)";
        var bgColor = isUp ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)";

        // destroy previous instance if navigating back
        if (chartInstances.has(canvas)) {
          chartInstances.get(canvas).destroy();
        }

        var chart = new Chart(canvas, {
          type: "line",
          data: {
            labels: data.dates,
            datasets: [{
              data: data.closes,
              borderColor: color,
              backgroundColor: bgColor,
              fill: true,
              tension: 0.3,
              pointRadius: 0,
              borderWidth: 1.5,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                grid: { display: false },
                ticks: { maxTicksLimit: 6, font: { size: 11 }, color: "#888" },
              },
              y: {
                position: "right",
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: { font: { size: 11 }, color: "#888" },
              },
            },
          },
        });
        chartInstances.set(canvas, chart);
      } catch (e) {
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.innerHTML = '<span style="color:#bbb;font-size:12px;">차트 로딩 실패 (' + ticker + ')</span>';
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initCharts);
  document.addEventListener("nav", initCharts); // Quartz SPA re-navigation
})();
