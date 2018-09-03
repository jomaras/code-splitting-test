document.addEventListener("DOMContentLoaded", async () => {
    const ColorPicker = (await import(/* webpackChunkName: "color-picker" */'./color-picker/ColorPicker')).ColorPicker;
    ColorPicker.initialize();
});