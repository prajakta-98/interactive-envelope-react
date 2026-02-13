import { useState } from "react";
import { motion as Motion } from "framer-motion";

const scatteredHearts = [
  {
    id: 1,
    size: 70,
    color: "#ee3f62",
    x: 4,
    y: -356,
    rotate: -6,
    float: 8,
    duration: 4,
    delay: 0,
  },
  {
    id: 2,
    size: 34,
    color: "#f4b9d8",
    x: -92,
    y: -332,
    rotate: -18,
    float: 7,
    duration: 3.6,
    delay: 0.16,
  },
  {
    id: 3,
    size: 34,
    color: "#f4b9d8",
    x: 92,
    y: -330,
    rotate: 18,
    float: 7,
    duration: 3.5,
    delay: 0.26,
  },
  {
    id: 4,
    size: 20,
    color: "#fd7197",
    x: -146,
    y: -312,
    rotate: -26,
    float: 6,
    duration: 3.2,
    delay: 0.4,
  },
  {
    id: 5,
    size: 20,
    color: "#f4b9d8",
    x: 146,
    y: -308,
    rotate: 24,
    float: 6,
    duration: 3.1,
    delay: 0.5,
  },
  {
    id: 6,
    size: 42,
    color: "#f3bdd9",
    x: -344,
    y: -220,
    rotate: -14,
    float: 8,
    duration: 3.7,
    delay: 0.52,
  },
  {
    id: 7,
    size: 40,
    color: "#f3bdd9",
    x: 344,
    y: -216,
    rotate: 12,
    float: 8,
    duration: 3.7,
    delay: 0.58,
  },
  {
    id: 8,
    size: 44,
    color: "#ee3f62",
    x: -328,
    y: -126,
    rotate: -10,
    float: 8,
    duration: 3.5,
    delay: 0.65,
  },
  {
    id: 9,
    size: 42,
    color: "#ee3f62",
    x: 328,
    y: -122,
    rotate: 10,
    float: 8,
    duration: 3.4,
    delay: 0.72,
  },
];

const heartShapePath =
  "M32 58C24.6 51.2 18.4 44.3 14.5 36.3C10.3 27.9 9.4 19.2 11.7 12.5C13.8 6.5 18.5 3.8 23.2 4.8C27.9 5.8 31 10.1 31.8 17.1C32.6 10.1 35.7 5.8 40.4 4.8C45.1 3.8 49.8 6.5 51.9 12.5C54.2 19.2 53.3 27.9 49.1 36.3C45.2 44.3 39.4 51.2 32 58Z";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_26%_14%,_#f8d788_0%,_#f4bf66_52%,_#eba954_100%)] px-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_45%)]" />

      <Motion.div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen((current) => !current);
          }
        }}
        role="button"
        tabIndex={0}
        whileTap={{ scale: 0.995 }}
        className="relative mx-auto aspect-[16/11] w-[min(94vw,820px)] cursor-pointer outline-none"
        style={{ perspective: "2000px" }}
      >
        <div className="absolute inset-x-[12%] bottom-[11%] top-[27%] rounded-[40px] bg-[#9f4f67]/35 blur-[58px]" />
        {/* Letter Content */}
        <Motion.div
          animate={{ y: isOpen ? -132 : 52 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-letter-body absolute left-1/2 top-[25%] w-[66%] max-w-[640px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#fdf4f7]/70 bg-[#e8ece9] p-5 text-[#4a2a35] shadow-[0_28px_48px_rgba(100,33,58,0.34)] md:p-7"
          style={{
            zIndex: isOpen ? 72 : 18,
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
          }}
        >
          <h2 className="font-heading text-center text-[24px] leading-[1.2] text-[#4b2a35] md:text-[24px]">
            A tiny UI surprise 💖
          </h2>

          <p className="mt-3 text-center text-[16px] leading-[1.45] text-[#5c3b47]/90 md:text-[16px]">
            This is my little React + Framer Motion experiment:
            <br />
            Hover → letter pops up → hearts float → smooth transitions.
          </p>

          <p className="mt-3 text-center text-[16px] leading-[1.45] text-[#5c3b47]/90 md:text-[16px]">
            I’m building one mini-feature regularly to sharpen my frontend
            skills:
          </p>

          <p className="mt-2 text-center text-[16px] leading-[1.45] text-[#5c3b47]/90 md:text-[16px]">
            Animations • Component UI • Clean CSS • Interaction design
          </p>

          <p className="mt-3 text-center text-[16px] leading-[1.45] text-[#5c3b47]/90 md:text-[16px]">
            If you enjoy this, connect with me - I’m always happy to meet
            fellow developers &amp; designers.
          </p>

          <p className="mt-2 text-center text-[24px] leading-[1.45] text-[#5c3b47]/90 md:text-[16px]">
            Also, I’m open to new UI developer / Fullstack opportunities.
          </p>
        </Motion.div>

        <div
          className={`pointer-events-none absolute left-1/2 top-[63%] overflow-visible ${
            isOpen ? "z-[76]" : "z-20"
          }`}
        >
          {scatteredHearts.map((heart) => (
            <Motion.div
              key={heart.id}
              initial={false}
              className="absolute left-1/2 top-0 -translate-x-1/2"
              animate={
                isOpen
                  ? {
                      x: [
                        heart.x - heart.float * 0.22,
                        heart.x + heart.float * 0.18,
                        heart.x - heart.float * 0.12,
                        heart.x,
                      ],
                      y: [
                        heart.y + heart.float * 0.15,
                        heart.y - heart.float * 0.55,
                        heart.y + heart.float * 0.2,
                        heart.y - heart.float * 0.05,
                      ],
                      opacity: [0, 0.92, 1, 0.9],
                      scale: [0.4, 1, 1.02, 1],
                      rotate: [
                        heart.rotate - 5,
                        heart.rotate + 4,
                        heart.rotate - 2,
                        heart.rotate + 1,
                      ],
                    }
                  : {
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0.34,
                      rotate: heart.rotate - 8,
                    }
              }
              transition={
                isOpen
                  ? {
                      duration: heart.duration,
                      delay: heart.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : { duration: 0.22, ease: "easeOut" }
              }
            >
              <svg
                width={heart.size}
                height={heart.size}
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <path d={heartShapePath} fill={heart.color} />
              </svg>
            </Motion.div>
          ))}
        </div>

        <div className="absolute inset-x-[8%] bottom-[8%] z-10 h-[68%] rounded-b-[6px] bg-[#f56f94] shadow-[0_30px_55px_rgba(124,42,72,0.28)]" />

        <Motion.div
          animate={{ rotateX: isOpen ? -178 : 0 }}
          transition={{ duration: 0.72, ease: [0.36, 0, 0.12, 1] }}
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: isOpen ? 12 : 60,
          }}
          className="pointer-events-none absolute inset-x-[8%] top-[24%] h-[40%]"
        >
          <div
            className="h-full w-full bg-[#fb7ea2] shadow-[0_12px_25px_rgba(124,42,72,0.2)]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </Motion.div>

        <Motion.div
          animate={
            isOpen
              ? { opacity: 0, y: 12, scale: 0.86 }
              : { opacity: 1, y: [0, -3, 0], scale: [1, 1.04, 1] }
          }
          transition={
            isOpen
              ? { duration: 0.24, ease: "easeOut" }
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
          className="pointer-events-none absolute left-1/2 top-[63%] z-[61] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-[radial-gradient(circle_at_30%_24%,_#ffd5e3_0%,_#f76f98_56%,_#de3b70_100%)] shadow-[0_12px_22px_rgba(134,33,76,0.35)] ring-4 ring-[#ffdce8]/80 md:h-[66px] md:w-[66px]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path d={heartShapePath} fill="#fff5f8" />
            </svg>
          </div>
        </Motion.div>

        <div
          className="absolute bottom-[8%] left-[8%] z-40 h-[68%] w-[42%] bg-[#f86f98]"
          style={{ clipPath: "polygon(0 0, 100% 58%, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute bottom-[8%] right-[8%] z-40 h-[68%] w-[42%] bg-[#f56892]"
          style={{ clipPath: "polygon(0 58%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="absolute bottom-[8%] left-1/2 z-[45] h-[30%] w-px -translate-x-1/2 bg-[#d94c78]" />
      </Motion.div>

      <Motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 text-center text-xs uppercase tracking-[0.28em] text-[#8c4e35]"
      >
        {isOpen ? "" : "Hover envelope to open"}
      </Motion.p>
    </main>
  );
};

export default Envelope;
