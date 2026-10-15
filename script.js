const toggle = document.getElementById("themeToggle");
const clearBtn = document.getElementById("clearBtn");
const textarea = document.getElementById("messageBox");
const sosBtn = document.getElementById("sosBtn");
const alarm = document.getElementById("alarmSound");
const backspaceBtn = document.getElementById("backspaceBtn");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

clearBtn.addEventListener("click", () => {
    textarea.value = "";
});

backspaceBtn.addEventListener("click", () => {

    textarea.value = textarea.value.slice(0, -1);

    textarea.focus();

});

sosBtn.addEventListener("click", () => {
    alarm.currentTime = 0;
    alarm.play();
});

document.querySelectorAll(".phrase-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const text = btn.textContent;

        if(textarea.value.length > 0){
            textarea.value += " ";
        }

        textarea.value += text;
        textarea.focus();

    });

});