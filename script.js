function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;
    // Combining HTML, CSS, and JS
    const outputCode = `${htmlCode}${cssCode}${jsCode}`;
    const outputFrame = document.getElementById('output');

    // Open and write the combined code into the iframe
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(outputCode);
    outputFrame.contentDocument.close();
}
