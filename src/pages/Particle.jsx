import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const options1 = {
    autoPlay: true,
    fullScreen: { enable: true, zIndex: 0 },
    background: {
      color: { value: "#ffffff" },
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "bubble" },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        push: { quantity: 4 },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          mix: false,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 1,
          maxSpeed: 50,
          factor: 100,
          easing: "ease-out-quad",
        },
        attract: {
          distance: 200,
          duration: 0.4,
          speed: 1,
          maxSpeed: 50,
          factor: 1,
          easing: "ease-out-quad",
        },
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      shape: {
        type: "image",
        image: [
          {
            name: "apple",
            src: "https://particles.js.org/images/fruits/apple.png",
            width: 32,
            height: 32,
          },
          {
            name: "avocado",
            src: "https://particles.js.org/images/fruits/avocado.png",
            width: 32,
            height: 32,
          },
          {
            name: "banana",
            src: "https://particles.js.org/images/fruits/banana.png",
            width: 32,
            height: 32,
          },
          {
            name: "berries",
            src: "https://particles.js.org/images/fruits/berries.png",
            width: 32,
            height: 32,
          },
          {
            name: "cherry",
            src: "https://particles.js.org/images/fruits/cherry.png",
            width: 32,
            height: 32,
          },
          {
            name: "grapes",
            src: "https://particles.js.org/images/fruits/grapes.png",
            width: 32,
            height: 32,
          },
          {
            name: "lemon",
            src: "https://particles.js.org/images/fruits/lemon.png",
            width: 32,
            height: 32,
          },
          {
            name: "orange",
            src: "https://particles.js.org/images/fruits/orange.png",
            width: 32,
            height: 32,
          },
          {
            name: "peach",
            src: "https://particles.js.org/images/fruits/peach.png",
            width: 32,
            height: 32,
          },
          {
            name: "pear",
            src: "https://particles.js.org/images/fruits/pear.png",
            width: 32,
            height: 32,
          },
          {
            name: "pepper",
            src: "https://particles.js.org/images/fruits/pepper.png",
            width: 32,
            height: 32,
          },
          {
            name: "plum",
            src: "https://particles.js.org/images/fruits/plum.png",
            width: 32,
            height: 32,
          },
          {
            name: "star",
            src: "https://particles.js.org/images/fruits/star.png",
            width: 32,
            height: 32,
          },
          {
            name: "strawberry",
            src: "https://particles.js.org/images/fruits/strawberry.png",
            width: 32,
            height: 32,
          },
          {
            name: "watermelon",
            src: "https://particles.js.org/images/fruits/watermelon.png",
            width: 32,
            height: 32,
          },
          {
            name: "watermelon_slice",
            src: "https://particles.js.org/images/fruits/watermelon_slice.png",
            width: 32,
            height: 32,
          },
        ],
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 16,
      },
    },
    preload: [
      {
        name: "apple",
        src: "https://particles.js.org/images/fruits/apple.png",
        width: 32,
        height: 32,
      },
      {
        name: "avocado",
        src: "https://particles.js.org/images/fruits/avocado.png",
        width: 32,
        height: 32,
      },
      {
        name: "banana",
        src: "https://particles.js.org/images/fruits/banana.png",
        width: 32,
        height: 32,
      },
      {
        name: "berries",
        src: "https://particles.js.org/images/fruits/berries.png",
        width: 32,
        height: 32,
      },
      {
        name: "cherry",
        src: "https://particles.js.org/images/fruits/cherry.png",
        width: 32,
        height: 32,
      },
      {
        name: "grapes",
        src: "https://particles.js.org/images/fruits/grapes.png",
        width: 32,
        height: 32,
      },
      {
        name: "lemon",
        src: "https://particles.js.org/images/fruits/lemon.png",
        width: 32,
        height: 32,
      },
      {
        name: "orange",
        src: "https://particles.js.org/images/fruits/orange.png",
        width: 32,
        height: 32,
      },
      {
        name: "peach",
        src: "https://particles.js.org/images/fruits/peach.png",
        width: 32,
        height: 32,
      },
      {
        name: "pear",
        src: "https://particles.js.org/images/fruits/pear.png",
        width: 32,
        height: 32,
      },
      {
        name: "pepper",
        src: "https://particles.js.org/images/fruits/pepper.png",
        width: 32,
        height: 32,
      },
      {
        name: "plum",
        src: "https://particles.js.org/images/fruits/plum.png",
        width: 32,
        height: 32,
      },
      {
        name: "star",
        src: "https://particles.js.org/images/fruits/star.png",
        width: 32,
        height: 32,
      },
      {
        name: "strawberry",
        src: "https://particles.js.org/images/fruits/strawberry.png",
        width: 32,
        height: 32,
      },
      {
        name: "watermelon",
        src: "https://particles.js.org/images/fruits/watermelon.png",
        width: 32,
        height: 32,
      },
      {
        name: "watermelon_slice",
        src: "https://particles.js.org/images/fruits/watermelon_slice.png",
        width: 32,
        height: 32,
      },
    ],
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      fullScreen: { enable: true, zIndex: 0 },
      background: {
        color: { value: "#ffffff" },
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "bubble" },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          push: { quantity: 4 },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            mix: false,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            speed: 1,
            maxSpeed: 50,
            factor: 100,
            easing: "ease-out-quad",
          },
          attract: {
            distance: 200,
            duration: 0.4,
            speed: 1,
            maxSpeed: 50,
            factor: 1,
            easing: "ease-out-quad",
          },
        },
      },

      preload: [
        {
          name: "apple",
          src: "https://particles.js.org/images/fruits/apple.png",
          width: 32,
          height: 32,
        },
        {
          name: "avocado",
          src: "https://particles.js.org/images/fruits/avocado.png",
          width: 32,
          height: 32,
        },
        {
          name: "banana",
          src: "https://particles.js.org/images/fruits/banana.png",
          width: 32,
          height: 32,
        },
        {
          name: "berries",
          src: "https://particles.js.org/images/fruits/berries.png",
          width: 32,
          height: 32,
        },
        {
          name: "cherry",
          src: "https://particles.js.org/images/fruits/cherry.png",
          width: 32,
          height: 32,
        },
        {
          name: "grapes",
          src: "https://particles.js.org/images/fruits/grapes.png",
          width: 32,
          height: 32,
        },
        {
          name: "lemon",
          src: "https://particles.js.org/images/fruits/lemon.png",
          width: 32,
          height: 32,
        },
        {
          name: "orange",
          src: "https://particles.js.org/images/fruits/orange.png",
          width: 32,
          height: 32,
        },
        {
          name: "peach",
          src: "https://particles.js.org/images/fruits/peach.png",
          width: 32,
          height: 32,
        },
        {
          name: "pear",
          src: "https://particles.js.org/images/fruits/pear.png",
          width: 32,
          height: 32,
        },
        {
          name: "pepper",
          src: "https://particles.js.org/images/fruits/pepper.png",
          width: 32,
          height: 32,
        },
        {
          name: "plum",
          src: "https://particles.js.org/images/fruits/plum.png",
          width: 32,
          height: 32,
        },
        {
          name: "star",
          src: "https://particles.js.org/images/fruits/star.png",
          width: 32,
          height: 32,
        },
        {
          name: "strawberry",
          src: "https://particles.js.org/images/fruits/strawberry.png",
          width: 32,
          height: 32,
        },
        {
          name: "watermelon",
          src: "https://particles.js.org/images/fruits/watermelon.png",
          width: 32,
          height: 32,
        },
        {
          name: "watermelon_slice",
          src: "https://particles.js.org/images/fruits/watermelon_slice.png",
          width: 32,
          height: 32,
        },
      ],
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        shape: {
          type: ["image"], // use "image" as the shape type
          options: {
            image: [
              {
                name: "apple",
                src: "https://particles.js.org/images/fruits/apple.png",
                width: 32,
                height: 32,
              },
              {
                name: "avocado",
                src: "https://particles.js.org/images/fruits/avocado.png",
                width: 32,
                height: 32,
              },
              {
                name: "banana",
                src: "https://particles.js.org/images/fruits/banana.png",
                width: 32,
                height: 32,
              },
              {
                name: "berries",
                src: "https://particles.js.org/images/fruits/berries.png",
                width: 32,
                height: 32,
              },
              {
                name: "cherry",
                src: "https://particles.js.org/images/fruits/cherry.png",
                width: 32,
                height: 32,
              },
              {
                name: "grapes",
                src: "https://particles.js.org/images/fruits/grapes.png",
                width: 32,
                height: 32,
              },
              {
                name: "lemon",
                src: "https://particles.js.org/images/fruits/lemon.png",
                width: 32,
                height: 32,
              },
              {
                name: "orange",
                src: "https://particles.js.org/images/fruits/orange.png",
                width: 32,
                height: 32,
              },
              {
                name: "peach",
                src: "https://particles.js.org/images/fruits/peach.png",
                width: 32,
                height: 32,
              },
              {
                name: "pear",
                src: "https://particles.js.org/images/fruits/pear.png",
                width: 32,
                height: 32,
              },
              {
                name: "pepper",
                src: "https://particles.js.org/images/fruits/pepper.png",
                width: 32,
                height: 32,
              },
              {
                name: "plum",
                src: "https://particles.js.org/images/fruits/plum.png",
                width: 32,
                height: 32,
              },
              {
                name: "star",
                src: "https://particles.js.org/images/fruits/star.png",
                width: 32,
                height: 32,
              },
              {
                name: "strawberry",
                src: "https://particles.js.org/images/fruits/strawberry.png",
                width: 32,
                height: 32,
              },
              {
                name: "watermelon",
                src: "https://particles.js.org/images/fruits/watermelon.png",
                width: 32,
                height: 32,
              },
              {
                name: "watermelon_slice",
                src: "https://particles.js.org/images/fruits/watermelon_slice.png",
                width: 32,
                height: 32,
              },
            ],
          },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 16,
        },
      },
    }),
    []
  );

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </>
  );
}
