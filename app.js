gsap.registerPlugin(ScrollTrigger);

const timelineLineOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "center center",
    scrub: true,
    pin: true,
    markers: true,
  },
});

timelineLineOne
  .from(".line-one span", {
    y: "50vh",
    opacity: 0,
    stagger: 2,
  })
  .to(".line-one", {
    duration: 3,
    background: "yellow",
  });

const timelineLineTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "center center",
    scrub: true,
    pin: true,
  },
});

timelineLineTwo
  .from(".line-two span:nth-child(1)", {
    x: "-50vw",
    scale: 10,
    opacity: 0,
  })
  .from(
    ".line-two span:nth-child(2)",
    {
      x: "50vw",
      scale: 10,
      opacity: 0,
    },
    "<"
  )
  .to(
    ".line-two span:nth-child(1)",
    {
      keyframes: {
        "25%": { y: 0 },
        "50%": { y: -20 },
        "100%": { y: 0 },
      },
    },
    "=+2"
  )
  .to(
    ".line-two span:nth-child(2)",
    {
      keyframes: {
        "25%": { y: 0 },
        "50%": { y: -20 },
        "100%": { y: 0 },
      },
    },
    "=-20%"
  );

const timelineLineThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "center center",
    scrub: 2,
    pin: true,
  },
});

timelineLineThree
  .from(".line-three span", {
    ease: "power2.out",
    y: "50vw",
    opacity: 0,
    stagger: 2,
  })
  .to(".line-three", {
    backgroundPositionX: "0%",
    duration: 5,
  })
  .to(
    ".line-three span",
    {
      color: "white",
      duration: 4,
    },
    "=-3"
  )
  .to(".line-three .moon", {
    right: "0",
    x: "150px",
    duration: 3,
  });
