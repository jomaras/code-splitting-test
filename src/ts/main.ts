document.addEventListener("DOMContentLoaded", async () => {
    const ColorPicker = (await import(/* webpackChunkName: "color-picker" */'./color-picker/ColorPicker')).ColorPicker;
    ColorPicker.initialize();

    document.querySelector(".current-project-react-component-container > button").addEventListener("click", async () => {
        const container = document.querySelector(".current-project-react-component-container");
        container.innerHTML = "";

        const CounterRenderer = (await import(/* webpackChunkName: "counter" */'./counter/Counter')).CounterRenderer;
        CounterRenderer.render(container);
    });

    document.querySelector(".external-component-container > button").addEventListener("click", async () => {
        const container = document.querySelector(".external-component-container");
        container.innerHTML = "";

        const EmailValidatorRenderer = (await import(/* webpackChunkName: "email-validator" */'typescript-components-test/src/email-validator/EmailValidator')).EmailValidatorRenderer;
        EmailValidatorRenderer.render(container);
    });
});