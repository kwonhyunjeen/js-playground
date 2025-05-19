const contentEl = document.getElementById("content");

export async function handleRoute() {
  const page = location.hash.replace("#", "") || "home";
  const htmlPath = `/src/${page}/${page}.html`;
  const jsPath = `/src/${page}/${page}.js`;

  try {
    const htmlRes = await fetch(htmlPath);
    contentEl.innerHTML = await htmlRes.text();

    const module = await import(jsPath);
    if (module.init) {
      module.init(); // init 함수가 있다면 실행
    }
  } catch (err) {
    contentEl.innerHTML = "<p>페이지를 불러올 수 없습니다.</p>";
    console.error(err);
  }
}
