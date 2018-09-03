document.addEventListener("DOMContentLoaded", async () => {
    const ColorPicker = (await import(/* webpackChunkName: "color-picker" */'./color-picker/ColorPicker')).ColorPicker;
    ColorPicker.initialize();

    document.querySelector(".current-project-react-component-container > button").addEventListener("click", async () => {
        const container = document.querySelector(".current-project-react-component-container");
        container.innerHTML = "";

        const CounterRenderer = (await import(/* webpackChunkName: "counter" */'./counter/Counter')).CounterRenderer;
        CounterRenderer.render(container);
    });    
});