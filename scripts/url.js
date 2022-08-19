const url = new URL (window.location.href);
//const url = new URL ('https://example.com/path1/path2/index.html?name=Jonathan%20Smith&age=18');

function showUrl (protocol, host, pathname, search, hash) {
  // cut path name for path and filename
  let path = pathname.slice(0, pathname.lastIndexOf('/')+1);
  let filename = pathname.slice(pathname.lastIndexOf('/')+1);
  document.getElementById('protocol').textContent = protocol;
  document.getElementById('host').textContent = '//' + host
  document.getElementById('path').textContent = path;
  document.getElementById('filename').textContent = filename;
  document.getElementById('search').textContent = search;
  document.getElementById('hash').textContent = hash;
}
showUrl (url.protocol, url.host, url.pathname, url.search, url.hash);

function getUrlParam (url) {
  let urlParam = {}
  for (let [key, value] of url.searchParams) {
    urlParam[key] = value;
  }
  console.log("URL parameters:")
  console.log(urlParam);
  return urlParam;
}

function showUrlData (protocol, pathname, parameters) {
  let filename = pathname.slice(pathname.lastIndexOf('/')+1);
  let file = filename.slice(0, filename.lastIndexOf('.'));
  let ext = filename.slice(filename.lastIndexOf('.'));

  document.getElementById('data-protocol').textContent = protocol;
  document.getElementById('data-file').textContent = file;
  document.getElementById('data-ext').textContent = ext;

  for (const [key, value] of Object.entries(parameters)) {
    document.getElementById('data-param').textContent += (`${key}: ${value}, `);
  }
}
showUrlData(url.protocol, url.pathname, getUrlParam (url));
