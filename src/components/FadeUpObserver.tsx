import { useEffect } from "react";

export default function FadeUpObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-7");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-7",
        "transition-all",
        "duration-500",
        "ease-out"
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
