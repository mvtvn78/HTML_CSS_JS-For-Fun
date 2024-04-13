const my_audio = document.getElementById("my_audio");
const poster = document.getElementById("poster");
const svg1 = document.getElementById("svg_controls1");
const svg2 = document.getElementById("svg_controls2");
const svg3 = document.getElementById("svg_controls3");
const svg4 = document.getElementById("svg_controls4");
const svg5 = document.getElementById("svg_controls5");
const control = document.getElementsByClassName("control");
const M_bar = document.getElementById("points");
const removeChildSpecific = (child) => {
  try {
    if (control[0].hasChildNodes(child)) {
      console.log("Đã xóa thành công", child.id);
      control[0].removeChild(child);
    }
  } catch (err) {
    console.table({
      err: err.message,
      child: child.id,
    });
  }
};
const handleVolumeChange = () => {
  console.log(my_audio.volume);
  if (my_audio.volume === 1) {
    removeChildSpecific(svg5);
    removeChildSpecific(svg4);
    control[0].appendChild(svg3);
  }
  if (my_audio.volume === 0) {
    removeChildSpecific(svg3);
    removeChildSpecific(svg4);
    control[0].appendChild(svg5);
  }
  if (my_audio.volume > 0 && my_audio.volume < 1) {
    removeChildSpecific(svg5);
    removeChildSpecific(svg3);
    control[0].appendChild(svg4);
  }
};
const anim_Play = () => {
  poster.style.animation =
    "rotate_music_discs 8s infinite alternate-reverse linear";
};
const anim_Pause = () => {
  poster.style.animation = "none";
};
poster.onclick = () => {
  my_audio.paused ? my_audio.play() : my_audio.pause();
};
my_audio.addEventListener("pause", () => {
  anim_Pause();
  control[0].removeChild(svg2);
  control[0].appendChild(svg1);
});
my_audio.addEventListener("play", () => {
  anim_Play();
  control[0].removeChild(svg1);
  control[0].appendChild(svg2);
  handleVolumeChange();
});
my_audio.addEventListener("volumechange", (e) => {
  handleVolumeChange();
});
svg1.onclick = () => {
  my_audio.play();
};
svg2.onclick = () => {
  my_audio.pause();
};
svg3.onclick = () => {
  my_audio.volume = 0.6;
};
svg4.onclick = () => {
  my_audio.volume = 0;
};
svg5.onclick = () => {
  my_audio.volume = 1;
};
my_audio.addEventListener("timeupdate", (e) => {
  setTimeout(() => {
    M_bar.value = (my_audio.currentTime / my_audio.duration) * 100;
  }, 0);
});
M_bar.onclick = (e) => {
  my_audio.pause();
  const value = e.target.value;
  my_audio.currentTime = value * (my_audio.duration / 100);
  my_audio.play();
};
