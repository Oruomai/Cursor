const cursor = document.querySelector(".cursor");
const cursor_dot = document.querySelector(".cursor_dot");

document.addEventListener
("mousemove", (e) =>
    {
        cursor.style.cssText = cursor_dot.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
    }
);