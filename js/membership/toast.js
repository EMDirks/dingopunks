let toastTimer = null;

function hideToast() {
  const toast = document.getElementById("dpaam-toast");
  if (!toast || !toast.classList.contains("dpaam-toast--visible")) return;

  clearTimeout(toastTimer);
  toast.classList.remove("dpaam-toast--entering", "dpaam-toast--pulse");
  toast.classList.add("dpaam-toast--exiting");

  const finish = () => {
    toast.classList.remove("dpaam-toast--visible", "dpaam-toast--exiting");
    toast.hidePopover?.();
  };

  toast.addEventListener(
    "animationend",
    (e) => {
      if (e.animationName === "dpaam-toast-out") finish();
    },
    { once: true },
  );
  toastTimer = setTimeout(finish, 250);
}

export function showToast(message) {
  const toast = document.getElementById("dpaam-toast");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.classList.remove("dpaam-toast--exiting");
  toast.textContent = message;

  const isOpen = toast.classList.contains("dpaam-toast--visible");

  if (isOpen) {
    toast.classList.remove("dpaam-toast--pulse");
    void toast.offsetWidth;
    toast.classList.add("dpaam-toast--pulse");
    toast.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName === "dpaam-toast-pulse") {
          toast.classList.remove("dpaam-toast--pulse");
        }
      },
      { once: true },
    );
  } else {
    toast.showPopover?.();
    toast.classList.remove("dpaam-toast--entering", "dpaam-toast--pulse");
    toast.classList.add("dpaam-toast--visible", "dpaam-toast--entering");
    toast.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName === "dpaam-toast-in") {
          toast.classList.remove("dpaam-toast--entering");
        }
      },
      { once: true },
    );
  }

  toastTimer = setTimeout(() => hideToast(), 1000);
}
