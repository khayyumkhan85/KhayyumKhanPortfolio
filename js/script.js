/* =========================================================
   KHAYYUM KHAN PATHAN PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

const projectModal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");

const projectButtons =
    document.querySelectorAll(".project-details-btn");

const revealElements =
    document.querySelectorAll(".reveal");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking navigation */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.dataset.target,
                        10
                    );

                let current = 0;

                const increment =
                    Math.max(
                        1,
                        Math.floor(target / 70)
                    );

                const updateCounter = () => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent =
                            target.toLocaleString();

                        return;

                    }

                    counter.textContent =
                        current.toLocaleString();

                    requestAnimationFrame(
                        updateCounter
                    );

                };

                updateCounter();

                counterObserver.unobserve(
                    counter
                );

            });

        },
        {
            threshold: 0.6
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    macbfe: {

        category:
            "ENTERPRISE PLATFORM",

        title:
            "Mac Buy Flow Evolution",

        description:
            "A scalable pricing aggregation and product-selection platform designed to support Apple's Mac purchase experience across the Apple Online Store and Mobile Apps.",

        technologies: [
            "Java",
            "Spring Boot",
            "Microservices",
            "REST APIs",
            "Redis",
            "AWS",
            "Amazon EKS",
            "SOA",
            "Event-Driven Architecture",
            "Multithreading"
        ],

        highlights: [

            "Architected the end-to-end pricing aggregation service for configurable Mac products.",

            "Designed APIs supporting pricing computation, delta pricing and dynamic product selection.",

            "Developed a product selection algorithm that determines the optimal buyable configuration from user-selected options.",

            "Defined Service-Oriented and Event-Driven Architecture for scalable and loosely coupled services.",

            "Optimized critical execution paths using asynchronous processing, batching, multithreading and non-blocking I/O.",

            "Improved API throughput from approximately 1,000 TPS to more than 3,000 TPS.",

            "Introduced distributed Redis caching to reduce latency and repeated backend computation.",

            "Designed Kubernetes cache coordination using event-driven mechanisms and researched leader election strategies.",

            "Planned Amazon EKS pod sizing and scaling strategies for production and staging environments.",

            "Produced executive-level performance analysis reports and architectural recommendations."

        ]

    },


    food: {

        category:
            "MICROSERVICES • CLOUD",

        title:
            "Food Delivery Application",

        description:
            "An end-to-end enterprise food delivery application demonstrating a scalable microservices architecture, service discovery, cloud deployment, database integration and automated delivery pipelines.",

        technologies: [

            "Java",
            "Java 8",
            "Spring Boot",
            "Microservices",
            "Eureka",
            "MapStruct",
            "AngularJS",
            "MySQL",
            "MongoDB",
            "Docker",
            "AWS",
            "AWS RDS",
            "AWS EKS",
            "Jenkins",
            "SonarQube",
            "ArgoCD"

        ],

        highlights: [

            "Developed backend microservices using Java, Java 8 and Spring Boot for an end-to-end food delivery platform.",

            "Designed DTO-based service contracts and used MapStruct for efficient object mapping.",

            "Integrated Eureka for service discovery and registration.",

            "Built AngularJS-based micro frontend capabilities for consuming backend service data.",

            "Implemented comprehensive unit testing using JUnit and Mockito.",

            "Performed API and functional testing using Postman.",

            "Containerized services using Docker for consistent and portable deployments.",

            "Integrated MySQL on AWS RDS and MongoDB for distributed data management.",

            "Deployed containerized services using AWS EKS and Kubernetes manifest files.",

            "Integrated AWS Load Balancer for scalable traffic distribution.",

            "Implemented Jenkins-based CI pipelines and SonarQube quality checks.",

            "Implemented continuous deployment using Kubernetes and AWS ArgoCD."

        ]

    },


    sentinel: {

        category:
            "AI • API GOVERNANCE",

        title:
            "API Sentinel — AI-Powered API Contract Intelligence & Governance Platform",

        description:
            "A platform-engineering solution that continuously analyzes OpenAPI contracts, detects API drift and breaking changes, evaluates consumer impact, and uses AI-assisted reasoning to generate migration recommendations and contract tests.",

        technologies: [

            "Java",
            "Spring Boot",
            "Gradle",
            "OpenAPI",
            "Kafka",
            "Redis",
            "PostgreSQL",
            "GenAI",
            "Spring AI",
            "MCP",
            "React",
            "Docker",
            "Kubernetes"

        ],

        highlights: [

            "Designed an API contract intelligence platform for detecting OpenAPI contract drift and breaking changes.",

            "Built contract analysis capabilities that compare API versions and identify additions, removals and incompatible modifications.",

            "Designed dependency and consumer impact analysis to determine which downstream services may be affected by an API change.",

            "Implemented risk scoring to prioritize API changes based on compatibility and consumer impact.",

            "Integrated AI-assisted analysis to explain contract changes in developer-friendly language.",

            "Designed AI-generated migration recommendations and remediation guidance for breaking API changes.",

            "Generated contract-test recommendations to improve API compatibility validation.",

            "Designed event-driven contract processing using Apache Kafka.",

            "Used Redis for fast access to contract metadata and analysis results.",

            "Used PostgreSQL for persistent governance and dependency information.",

            "Designed React-based dashboards for API health, contract changes and risk visualization.",

            "Designed CI governance workflows to identify API compatibility issues before production deployment.",

            "Explored Spring AI and Model Context Protocol (MCP) for intelligent developer workflows."

        ]

    },


    microservices: {

        category:
            "MICROSERVICES ARCHITECTURE",

        title:
            "Microservices Solutioning Program",

        description:
            "An ecommerce-focused microservices solution designed around domain decomposition, independent services and centralized configuration management.",

        technologies: [

            "Java",
            "Spring Boot",
            "Microservices",
            "REST APIs",
            "Centralized Configuration"

        ],

        highlights: [

            "Pioneered a microservices architecture for ecommerce platform functionality.",

            "Identified business subdomains and mapped them into independently deployable services.",

            "Led development of required services using Java and Spring Boot.",

            "Integrated microservices with an external centralized configuration server.",

            "Enabled real-time property updates without requiring application redeployment.",

            "Demonstrated scalable service communication and configuration management patterns."

        ]

    },


    vehicle: {

        category:
            "IOT • EMBEDDED SYSTEMS",

        title:
            "Fingerprint Authentication for Smart Vehicle Security",

        description:
            "An embedded vehicle-security solution that combines fingerprint authentication with an SMS-based alert mechanism to prevent unauthorized vehicle access.",

        technologies: [

            "Embedded C",
            "ATMEGA16",
            "Fingerprint Sensor",
            "IoT",
            "SMS Alerts"

        ],

        highlights: [

            "Developed an embedded C program using an ATMEGA16 microcontroller.",

            "Implemented fingerprint registration and authentication for vehicle access.",

            "Designed authentication logic to prevent unauthorized vehicle access.",

            "Implemented SMS alerts for unauthorized authentication attempts.",

            "Integrated hardware-level control logic for the vehicle security workflow."

        ]

    }

};


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(projectId) {

    const project =
        projects[projectId];

    if (!project) {
        return;
    }


    const technologyHTML =
        project.technologies
            .map(
                tech =>
                    `<span>${tech}</span>`
            )
            .join("");


    const highlightsHTML =
        project.highlights
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join("");


    modalContent.innerHTML = `

        <span class="modal-category">
            ${project.category}
        </span>

        <h2>
            ${project.title}
        </h2>

        <p class="modal-description">
            ${project.description}
        </p>


        <div class="modal-section">

            <h3>
                KEY CONTRIBUTIONS
            </h3>

            <ul>
                ${highlightsHTML}
            </ul>

        </div>


        <div class="modal-section">

            <h3>
                TECHNOLOGIES
            </h3>

            <div class="modal-tech">
                ${technologyHTML}
            </div>

        </div>

    `;


    projectModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   PROJECT BUTTON EVENTS
========================================================= */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        openProject(projectId);

    });

});


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);


modalOverlay.addEventListener(
    "click",
    closeProjectModal
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(
                    targetId
                );

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   TILT EFFECT FOR PROJECT CARDS
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -1.5;

            const rotateY =
                ((x - centerX) / centerX) * 1.5;

            card.style.transform =
                `translateY(-7px)
                 perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
