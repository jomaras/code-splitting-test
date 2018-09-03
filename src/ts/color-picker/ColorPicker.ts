import './color-picker.scss';

export const ColorPicker = {
    initialize(){
        document.querySelector("#color-picker-app .color-select").addEventListener("change", e => {
            const colorSelector = e.target as HTMLSelectElement;
            const colorContainer = document.querySelector("#color-picker-app .color-container");


            colorContainer.classList.remove("red");
            colorContainer.classList.remove("green");
            colorContainer.classList.remove("blue");

            colorContainer.classList.add(colorSelector.value);
        });
    }
}