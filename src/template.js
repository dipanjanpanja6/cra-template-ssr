export default function template(title, initialState = {}, content = "") {
  let page = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta charset="utf-8" />
    <link rel="icon" href="media/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="media/logo192.png" />
    <link rel="manifest" href="assets/manifest.json" />
    <title> ${title} </title>
    <link rel="stylesheet" href="assets/index.css">
    <link rel="stylesheet" href="assets/App.css">
</head>

<body>
    <div class="content">
        <div id="app" class="wrap-inner">${content}</div>
    </div>
    <script>
        window.__STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="assets/client.js"></script>
</body>`

  return page
}
