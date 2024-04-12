const btn_Play = document.getElementById("play");
const btn_Pause = document.getElementById("pause");
const video = document.getElementById("myvideo");
const container = document.getElementById("Container");
const lab_dur = document.getElementById("dur");
const lab_time = document.getElementById("time");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const volumeManager = document.getElementById("vol_manager");
const ConvertSecond = (second) => {
  if (second > 60) {
    let hour = parseInt(second / 3600);
    let minus = parseInt(second % 3600) / 60;
    return {
      converted: true,
      hours: hour,
      minutes: Number(minus.toFixed(2)),
    };
  }
  return {
    converted: false,
    second: Number(second.toFixed(0)),
  };
};
video.addEventListener("play", (e) => {
  container.removeChild(btn_Play);
  container.appendChild(btn_Pause);
});
video.addEventListener("pause", (e) => {
  container.removeChild(btn_Pause);
  container.appendChild(btn_Play);
});
btn_Play.addEventListener("click", (e) => {
  video.play();
});
btn_Pause.addEventListener("click", (e) => {
  video.pause();
});
video.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
video.addEventListener("timeupdate", () => {
  let {
    converted: converted1,
    hours: hours1,
    minutes: minnutes1,
    second: second1,
  } = ConvertSecond(video.currentTime);
  if (converted1 && hours1) {
    lab_time.innerHTML = `${hours1}:${minnutes1} -`;
  } else if (!second1) {
    lab_time.innerHTML = `${minnutes1} -`;
  } else {
    lab_time.innerHTML = `${second1} -`;
  }
  let { converted, hours, minutes, second } = ConvertSecond(video.duration);
  if (converted && hours) {
    lab_dur.innerHTML = `${hours}:${minutes}`;
  } else if (!second) {
    lab_dur.innerHTML = `${minutes}`;
  } else {
    lab_dur.innerHTML = `${second}`;
  }
  progress.value = video.currentTime / (video.duration / 100);
});
progress.addEventListener("change", (e) => {
  const target = e.target.value;
  const duration = video.duration;
  video.currentTime = target * (duration / 100);
});
volume.addEventListener("mouseover", (e) => {
  volumeManager.style.opacity = 1;
  volumeManager.onmousemove = () => {
    volumeManager.style.opacity = 1;
  };
  volumeManager.onmouseleave = () => {
    volumeManager.style.opacity = 0;
  };
});
volume.addEventListener("mouseleave", (e) => {
  volumeManager.style.opacity = 0;
});
volume.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
volumeManager.addEventListener("change", (e) => {
  const value = e.target.value;
  video.volume = value / 100;
});
