/* Code Stack 1 */
// const file = document.getElementById("file");
// const name_File = document.getElementById("name_file");
// const total_File = document.getElementById("total_file");
// const type_File = document.getElementById("type_file");
// const image_Out = document.getElementById("out_Img");
// // stackOverflow
// function formatBytes(bytes, decimals = 2) {
//   if (!+bytes) return "0 Bytes";
//   //  B/c 1kb = 1024 bytes
//   const k = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = [
//     "Bytes",
//     "KiB",
//     "MiB",
//     "GiB",
//     "TiB",
//     "PiB",
//     "EiB",
//     "ZiB",
//     "YiB",
//   ];
//   const i = Math.floor(Math.log(bytes) / Math.log(k));
//   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
// }
// file.onchange = (e) => {
//   const value = e.target.files[0];
//   const objectURL = window.URL.createObjectURL(value);
//   console.log(value, objectURL);
//   image_Out.src = objectURL;
//   // Destroy afterwards when image load
//   image_Out.onload = () => {
//     window.URL.revokeObjectURL(objectURL);
//   };
//   name_File.innerHTML = `Selected Name  ${value.name}`;
//   total_File.innerHTML = `Total Size ${formatBytes(value.size)}`; // return bytes
//   type_File.innerHTML = `Type File ${value.type}`;
//   console.log(window.URL.length);
// };
/* Code Stack 2 */
const file = document.getElementById("file");
file.ondrop = () => {
  console.log("Oke");
};
