let splitText;
let words;

// Split the text into words
splitText = new SplitType("#text", {
    type: "words",
});
words = splitText.words;

// Hide all words initially
gsap.set(words, {
    opacity: 0
});

// Typewriter animation
gsap.to(words, {
    opacity: 1,
    duration: 0.1,
    ease: "power1.inOut",
    stagger: 0.1,
});

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.3,
            rotation: 15,
            duration: 0.5,
            ease: "power3.inOut",
            color: "black",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power3.out",
            color: "black",
            textShadow: "none",
        });
    });
});

// Split the text into words
splitText = new SplitType("#text_two", {
    type: "words",
});
words = splitText.words;

// Hide all words initially
gsap.set(words, {
    opacity: 0,
    y: 50
});

// Wave animation
gsap.to(words, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    stagger: {
        each: 0.1,
        from: "center"
    },
});

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.3,
            y: -10,
            duration: 0.5,
            ease: "power3.inOut",
            color: "black",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            color: "black",
            textShadow: "none",
        });
    });
});

// Split the text into words
splitText = new SplitType("#text_three", {
    type: "words",
});
words = splitText.words;

// Hide all words initially
gsap.set(words, {
    opacity: 0,
    y: 50,
    rotation: 45,
});

// Complex entrance animation
gsap.to(words, {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 1.5,
    ease: "back.out(1.7)",
    stagger: {
        each: 0.1,
        from: "start"
    },
});

// Add event listeners to each word for hover effects
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.5,
            duration: 0.4,
            ease: "elastic.out(1, 0.3)",
            color: "red",
            textShadow: "2px 2px 10px rgba(255, 0, 0, 0.8)",
            yoyo: true,
            // repeat: 1,
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            duration: 0.4,
            ease: "elastic.out(1, 0.3)",
            color: "black",
            textShadow: "none",
        });
    });
});

// Split the text into words
splitText = new SplitType("#text_four", {
    type: "words",
});
words = splitText.words;