import style from "./Arrow.module.css";

const Arrow = () => {
    const scrollDown = () => {
        const aboutMeSection = document.getElementById("workstation");
        if (aboutMeSection) aboutMeSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={style.container}>
            <div onClick={scrollDown}>
                <div className={style.arrow}></div>
            </div>
        </div>
    );
};

export default Arrow;