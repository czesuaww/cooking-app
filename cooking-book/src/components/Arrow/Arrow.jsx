import style from "./Arrow.module.css";

const Arrow = () => {
    const scrollDown = () => {
        const containerMeSection = document.getElementById("container");
        if (containerMeSection) containerMeSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div role="button" onClick={scrollDown}>
                <div className={style.arrow}></div>
            </div>
        </div>
    );
};

export default Arrow;