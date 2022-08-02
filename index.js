function download(filename, data, text) {
  var pom = document.createElement("a");
  pom.setAttribute("href", data + "," + encodeURIComponent(text));
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

const main = () => {
  //   const form = document.querySelector("form");
  const textarea = document.querySelector("textarea");
  //   const button = document.querySelector("button");

  //   let toConvert = "";

  textarea.value = "";
  //   button.disabled = true;

  textarea.addEventListener("blur", (event) => {
    if (event.target.value) {
      //   button.disabled = false;
      download(
        `converted-${Date.now()}.json`,
        "data:application/json;charset=utf-8",
        JSON.stringify([
          {
            text: event.target.value,
          },
        ])
      );
    } else {
      //   button.disabled = true;
    }
  });

  //   button.addEventListener("click", () => {
  //   });
};

main();
