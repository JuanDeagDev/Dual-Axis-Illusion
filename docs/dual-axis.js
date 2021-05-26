class DualAxis extends HTMLElement {
    constructor() {
        super();
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const v_Highlight = this.getAttribute('V-highlight');
        const h_Highlight = this.getAttribute('H-highlight');
        const p_Highlight = this.getAttribute('Point-highlight');
        const spinDirection = this.getAttribute('Spin-Direction');
        const template = document.createElement('template');

        template.innerHTML = `
        <style>
          *{
              margin: 0em;
              border: 0em;
              padding: 0em;
              box-sizing: border-box;	    
              font-family: 'Poppins', sans-serif;
          }
          html, body {
              min-height: 100%;
          }
          body {
              position: relative;
              overflow: hidden;
          }
          #title{
              font-size: 2.5em;
              font-weight: bold;
          }
          #center{
              display: flex;              
              flex-direction: column;
              align-items: center;
              justify-content: center;
          }
          #buttons{
            display: flex;              
            flex-direction: row;
          }
          input{
              margin: 0em 0.5em;
          }
        </style>
        <div id=center>
        <p id=title>Dual Axis Rotation Illusion</p>
        <div id=buttons>
            <p>Highlight Axis</p>
            <input type="radio" name="radio_HighlightAxis" value="none" id="none" checked>
            <label for="none">None</label>
            <input type="radio" name="radio_HighlightAxis" value="vertical" id="vertical">
            <label for="vertical">Vertical</label>
            <input type="radio" name="radio_HighlightAxis" value="horizontal" id="horizontal">
            <label for="horizontal">Horizontal</label>
        </div>
        <div id=buttons>
            <p>Spin Direction</p>
            <input type="radio" name="radio_SpinDirection" value="positive" id="positive" checked>
            <label for="positive">Positive</label>
            <input type="radio" name="radio_SpinDirection" value="negative" id="negative">
            <label for="negative">Negative</label>
        </div>
        <div id=buttons
            <p>Circle Overlaps</p>
            <input type="checkbox" name="checkbox_circleOverlaps">
        </div>
        <canvas id=canvasElem width="${width}" height="${height}">
        </div>`;


        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('dual-axis', DualAxis);
