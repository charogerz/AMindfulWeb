const accessibilityMenuStyles = `    :root {
        --acc_color_1: #000;
        --acc_color_2: #fff;
        --border_radius: 25px;
    }

    .hidden {
        display: none !important;
    }

    #accessibility-modal, #accessibility-modal * {
        transition: all 0.3s ease 0s;
        font-family: 'Urbanist', sans-serif;
        font-size: 18px;
    }

    #accessibility-modal {
        position: fixed;
        top: 5vh;
        left: 0;
        width: 100%;
        height: 90vh;
        background: var(--acc_color_2);
        z-index: 1000;
        justify-content: center;
        border-radius: 0 var(--border_radius) var(--border_radius) 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: clip;
    }

    #accessibility-modal #closeBtn {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: var(--border_radius);
        background: var(--acc_color_2);
        cursor: pointer;
        overflow: clip;
        border: none;
    }

    #accessibility-modal.left #closeBtn {
        top: 0;
        right: 0;
        margin: 15px 0;
    }

    #accessibility-modal.right #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal.top #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal.bottom #closeBtn {
        top: 0;
        left: 0;
        margin: 15px;
    }

    #accessibility-modal #closeBtn box-icon {
        top: 0;
        left: 0;
        position: absolute;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #accessibility-modal.left {
        left: 0;
        right: auto;
        max-width: 500px;
        border-radius: 0 var(--border_radius) var(--border_radius) 0;
    }

    #accessibility-modal.right {
        right: 0;
        left: auto;
        max-width: 500px;
        border-radius: var(--border_radius) 0 0 var(--border_radius);
    }

    #accessibility-modal.top {
        top: 0;
        left: 1%;
        width: 98%;
        height: auto;
        max-height: 90vh;
        border-radius: 0 0 var(--border_radius) var(--border_radius);
    }

    #accessibility-modal.bottom {
        top: auto;
        bottom: 3%;
        left: 3%;
        width: 98%;
        height: auto;
        max-height: 90vh;
        border-radius: var(--border_radius) var(--border_radius) 0 0;
    }

    #accessibility-modal.close {
        width: 50px;
        height: 50px;
        border-radius: var(--border_radius);
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: clip;
        margin: 5px;
    }

    #accessibility-modal.close .acc-item {
        opacity: 0;
    }

    #accessibility-modal.close #closeBtn {
        position: absolute;
        width: 50px;
        height: 50px;
        border: none;
        background: none;
        color: var(--acc_color_2);
        background: var(--acc_color_1);
        font-size: 20px;
        cursor: pointer;
        margin: 0;
    }

    #accessibility-modal.close #closeBtn box-icon {
        top: 0;
        left: 0;
        position: absolute;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #accessibility-modal.close:hover #closeBtn {
        filter: opacity(0.8);
    }

    #accessibility-modal #headerContent {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 80px);
        height: 50px;
        background: var(--acc_color_1);
        color: var(--acc_color_2);
        border-radius: var(--border_radius);
        margin: 10px 10px 10px 70px;
    }

    #accessibility-modal.left #headerContent {
        margin: 10px 70px 10px 10px;
    }

    #accessibility-modal.right #headerContent {
        margin: 10px 10px 10px 70px;
    }

    #accessibility-modal #headerContent p {
        font-size: 20px;
        font-weight: 600;
    }

    #accessibility-modal.close #headerContent {
        display: none;
    }

    #accessibility-tools {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: auto;
        transition: all 0.3s ease 2s;
    }

    .acc-item {
        min-width: 120px;
        width: 33%;
        max-width: 200px;
        height: auto;
        margin: 0;
        cursor: pointer;
    }

    .acc-item:hover .acc-child {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--acc_color_1);
    }

    .acc-item:hover .acc-child.active {
        filter: opacity(0.8);
        border: 1px solid var(--acc_color_2);
    }

    .acc-child {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        aspect-ratio: 1/1;
        background: var(--acc_color_2);
        border-radius: var(--border_radius);
        margin: 10px;
        padding: 10px 10px 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--acc_color_1);
    }

    .acc-child.active {
        background: var(--acc_color_1);
        color: var(--acc_color_2);
        box-shadow: none;
        border: 1px solid var(--acc_color_1);
    }

    .acc-child .check-icon {
        display: flex;
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 1px;
        border-radius: 50%;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
        opacity: 0;
    }

    .acc-child.active .check-icon {
        opacity: 1;
    }

    .acc-progress-parent {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 10px;
    }

    .acc-progress-child {
        min-width: 30%;
        width: 48%;
        max-width: 48%;
        height: 3px;
        margin: 0 1%;
        background: var(--acc_color_1);
        border-radius: 5px;
    }

    .acc-child.active .acc-progress-child {
        background: var(--acc_color_2);
        opacity: 0.5;
    }

    .acc-child.active .acc-progress-child.active {
        opacity: 1;
    }

    /*Accessibility Tools*/
    .invert {
        filter: invert(1);
    }

    .grayscale {
        filter: grayscale(1);
    }

    .underline-style-0 a {
        text-decoration: none;
        background: black !important;
        color: yellow !important;
        font-weight: bolder;
    }

    .underline-style-0 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-1 a {
        text-decoration: none;
        background: #FFD740 !important;
        color: #005A9C !important;
        font-weight: bolder;
    }

    .underline-style-1 a::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #FFD740;
        border-left: 3px solid #FFD740;
        transition: all 0.3s ease;
    }

    .underline-style-1 a:hover::before {
        width: 100%;
        height: 100%;
        border: 5px solid #FFD740;
    }

    .underline-style-1 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-2 a {
        font-weight: bolder;
    }

    .underline-style-2 a:hover {
        text-decoration: underline !important;
    }

    .underline-style-2 a::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        background: #FFD740;
        bottom: 0;
    }

    .hide-images img {
        display: none;
    }

    /*Apply two color filters*/

    .invert.grayscale {
        filter: invert(1) grayscale(1);
    }


`;
const accessibilityMenuHTML = `<div id="accessibility-modal" class="bottom close" tabindex="1">
    <button id="closeBtn" style="z-index: 99999;" title="Accessibility settings" aria-label="Accessibility settings">
        <box-icon type='solid' color='white' name='universal-access'></box-icon>
    </button>
    <div id="headerContent">
        <p>Accessibility Tools</p>
    </div>
    <main>
    <div id="accessibility-tools">

        <div class="acc-item">
            <div class="acc-child" id="invert-colors">
                <box-icon name='adjust' type='solid'></box-icon>
                <p>Invert Colors</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="grayscale">
                <box-icon name='droplet-half' type='solid'></box-icon>
                <p>Grayscale</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="underline">
                <box-icon name='expand-horizontal'></box-icon>
                <p>Links Highlight</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="font-size">
                <box-icon name='font-size'></box-icon>
                <p>Font Size</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="line-height">
                <box-icon name='expand-vertical'></box-icon>
                <p>Line Height</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <div class="acc-item">
            <div class="acc-child" id="letter-spacing">
                <box-icon name='expand-horizontal'></box-icon>
                <p>Letter Spacing</p>
                <div class="acc-progress-parent hidden">
                    <div class="acc-progress-child acc-progress-child-1"></div>
                    <div class="acc-progress-child acc-progress-child-2"></div>
                    <div class="acc-progress-child acc-progress-child-3"></div>
                </div>
            </div>
        </div>

        <!-- hide images -->
        <div class="acc-item">
            <div class="acc-child" id="hide-images">
                <box-icon type='solid' name='landscape'></box-icon>
                <p>Click Image to Hide</p>
            </div>
        </div>

    </div>
    </main>
</div><script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>`;

document.addEventListener("DOMContentLoaded", function () {

    // Load Boxicons script
    const boxiconsScript = document.createElement("script");
    boxiconsScript.src = "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";
    document.body.appendChild(boxiconsScript);

    const accessibilityMenuStyleElement = document.createElement("style");
    accessibilityMenuStyleElement.innerHTML = accessibilityMenuStyles;
    document.head.appendChild(accessibilityMenuStyleElement);

    document.body.insertAdjacentHTML("beforeend", accessibilityMenuHTML);

    //accessibility tool
    const accessibilityModal = document.getElementById('accessibility-modal');
    const closeBtn = document.getElementById('closeBtn');
    const accessibilityTools = document.getElementById('accessibility-tools');

    closeBtn.addEventListener('click', () => {
        accessibilityModal.classList.toggle('close');
        closeBtn.innerHTML = accessibilityModal.classList.contains('close') ? '<box-icon type="solid" color="white" name="universal-access"></box-icon>' : accessibilityModal.classList.contains('top') ? '<box-icon type="solid" color="black" name="chevrons-up"></box-icon>' : accessibilityModal.classList.contains('bottom') ? '<box-icon type="solid" color="black" name="chevrons-down"></box-icon>' : accessibilityModal.classList.contains('left') ? '<box-icon type="solid" color="black" name="chevrons-left"></box-icon>' : accessibilityModal.classList.contains('right') ? '<box-icon type="solid" color="black" name="chevrons-right"></box-icon>' : '';
        accessibilityTools.style.display = accessibilityModal.classList.contains('close') ? setTimeout(() => {
            accessibilityTools.style.display = 'none';
        }, 200) : 'flex';
    });

    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('.acc-child').classList.toggle('active');
            item.querySelectorAll('box-icon').forEach(icon => {
                icon.setAttribute('color', item.querySelector('.acc-child').classList.contains('active') ? 'white' : 'black');
            });
        });
    });

    const docElemnt = document.querySelector('html');

    document.querySelector('#invert-colors').addEventListener('click', () => {
        const item = document.querySelector('#invert-colors');
        docElemnt.classList.toggle('invert');
    });

    document.querySelector('#grayscale').addEventListener('click', () => {
        const item = document.querySelector('#grayscale');
        docElemnt.classList.toggle('grayscale');
    });

    let underlineClickCount = 0;
    document.querySelector('#underline').addEventListener('click', () => {
        const item = document.querySelector('#underline');
        if (underlineClickCount === 3) {
            underlineClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.classList.remove('underline');
            docElemnt.classList.remove('underline-style-0');
            docElemnt.classList.remove('underline-style-1');
            docElemnt.classList.remove('underline-style-2');
        } else {
            item.classList.remove('active');
            if (underlineClickCount === 0) {
                docElemnt.classList.add('underline');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
                docElemnt.classList.add('underline-style-0');
                docElemnt.classList.remove('underline-style-1');
                docElemnt.classList.remove('underline-style-2');
            } else if (underlineClickCount === 1) {
                docElemnt.classList.remove('underline-style-0');
                docElemnt.classList.add('underline-style-1');
                docElemnt.classList.remove('underline-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (underlineClickCount === 2) {
                docElemnt.classList.remove('underline-style-0');
                docElemnt.classList.remove('underline-style-1');
                docElemnt.classList.add('underline-style-2');
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            underlineClickCount++;
        }

    });

    let fontSizeClickCount = 0;
    document.querySelector('#font-size').addEventListener('click', () => {
        const item = document.querySelector('#font-size');
        if (fontSizeClickCount === 3) {
            fontSizeClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.fontSize = '';
        } else {
            item.classList.remove('active');
            if (fontSizeClickCount === 0) {
                docElemnt.style.fontSize = '1.3rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (fontSizeClickCount === 1) {
                docElemnt.style.fontSize = '1.5rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (fontSizeClickCount === 2) {
                docElemnt.style.fontSize = '1.8rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            fontSizeClickCount++;
        }

    });

    let lineHeightClickCount = 0;
    document.querySelector('#line-height').addEventListener('click', () => {
        const item = document.querySelector('#line-height');
        if (lineHeightClickCount === 3) {
            lineHeightClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.lineHeight = '';
        } else {
            item.classList.remove('active');
            if (lineHeightClickCount === 0) {
                docElemnt.style.lineHeight = '1.5';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (lineHeightClickCount === 1) {
                docElemnt.style.lineHeight = '1.8';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (lineHeightClickCount === 2) {
                docElemnt.style.lineHeight = '2';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            lineHeightClickCount++;
        }

    });

    let letterSpacingClickCount = 0;
    document.querySelector('#letter-spacing').addEventListener('click', () => {
        const item = document.querySelector('#letter-spacing');
        if (letterSpacingClickCount === 3) {
            letterSpacingClickCount = 0;
            item.querySelector('.acc-progress-parent').classList.add('hidden');
            item.classList.add('active');
            docElemnt.style.letterSpacing = '';
        } else {
            item.classList.remove('active');
            if (letterSpacingClickCount === 0) {
                docElemnt.style.letterSpacing = '0.1rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.add('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (letterSpacingClickCount === 1) {
                docElemnt.style.letterSpacing = '0.2rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.add('active');
                item.querySelector('.acc-progress-child-3').classList.remove('active');
            } else if (letterSpacingClickCount === 2) {
                docElemnt.style.letterSpacing = '0.3rem';
                item.querySelector('.acc-progress-parent').classList.remove('hidden');
                item.querySelector('.acc-progress-child-1').classList.remove('active');
                item.querySelector('.acc-progress-child-2').classList.remove('active');
                item.querySelector('.acc-progress-child-3').classList.add('active');
            }
            letterSpacingClickCount++;
        }

    });

    document.querySelector('#hide-images').addEventListener('click', () => {
        docElemnt.classList.toggle('hide-images');
    });

});