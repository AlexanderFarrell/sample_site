function RenderPage(html) {
    document.getElementById('page').innerHTML = html;
}

function Home() {
    RenderPage("<h1>Welcome to the Home Page</h1>")
}

function About() {
    RenderPage("<h1>About Alex</h1>")
}

function Order() {
    RenderPage("<h1>Select your Pizza</h1>")
}

Home();