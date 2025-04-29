const colors = ["#FF5C5C", "#63B5FB", "#F7B247", "#B1D199", "#AA9AFF"];

export const pickRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
