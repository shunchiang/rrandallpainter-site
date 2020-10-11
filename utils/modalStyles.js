export const photoModalStyle = 
{
    content: {
        width: "100%",
        height: "100%",
        top: "50%",
        left: "50%",
        bottom: 0,
        right: 0,
        transform: "translate(-50%,-50%)",
        padding: 0,
        border: "none",
        overflow: "hidden",
        backgroundColor: "transparent",
        borderColor: "transparent",
        pointerEvents: "none"
    },
    overlay: {
        zIndex: 5,
        backgroundColor: "rgba(255, 255, 255, 0.37)",
    },
};

export const uploadModalStyle = 
{
    content: {
        width: "95%",
        position: "absolute",
        bottom: "0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflow: "auto",
        bottom: "auto",
        backgroundColor: "#3a3a3a",
        borderRadius: "0",
        borderColor: "transparent",
        maxHeight: "80vh",
    },
    overlay: {
        zIndex: 5,
        backgroundColor: "rgba(255, 255, 255, 0.37)",
    },
};

export const tagsModalStyle = 
{
    content: {
        width: "95%",
        height: "80%",
        top: "50%",
        left: "50%",
        overflow: "hidden",
        bottom: 0,
        right: 0,
        backgroundColor: "#3a3a3a",
        transform: "translate(-50%,-50%)",
        padding: "0.5em",
        border: "none",
        boxSizing: "border-box",
},
    overlay: {
        zIndex: 5,
        backgroundColor: "rgba(255, 255, 255, 0.37)"
}
}