import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import clsx from "clsx";

const FaqItem = ({ item, index }) => {
    const [activeId, setActiveId] = useState(null);

    // Determine whether the current item is active
    const active = activeId === item.id;

    // Use react-spring to animate the answer's height and opacity
    const slideProps = useSpring({
        opacity: active ? 1 : 0,
        height: active ? "auto" : 0,
        paddingTop: active ? "1rem" : "0",
        paddingBottom: active ? "1rem" : "0",
        config: { tension: 200, friction: 20 },
    });

    return (
        <div className="relative z-2 mb-16">
            <div
                className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
                onClick={() => {
                    setActiveId(activeId === item.id ? null : item.id);
                }}
            >
                <div className="flex-1">
                    <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
                        {index < 10 ? "0" : ""}
                        {index}
                    </div>
                    <div
                        className={clsx(
                            "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
                            active && "max-lg:text-p1"
                        )}
                    >
                        {item.question}
                    </div>
                </div>

                <div
                    className={clsx(
                        "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
                        active && "before:bg-p1 after:rotate-0 after:bg-p1"
                    )}
                >
                    <div className="g4 size-11/12 rounded-full shadow-300" />
                </div>
            </div>

            {/* Wrap the answer with the animated div from react-spring */}
            <animated.div style={slideProps}>
                {active && (
                    <div className="body-3 px-7 py-3.5">{item.answer}</div>
                )}
            </animated.div>

            <div
                className={clsx(
                    "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
                    active && "opacity-100"
                )}
            >
                <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
                <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
            </div>
        </div>
    );
};

export default FaqItem;
