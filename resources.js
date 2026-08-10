/* =========================================================
   STEM WITHOUT BARRIERS
   RESOURCE LIBRARY
   ========================================================= */


/* =========================================================
   RESOURCE DATABASE
   =========================================================

   TO ADD A RESOURCE:

   1. Put the PDF in the "resources" folder.
   2. Put the cover image in the "images" folder.
   3. Copy a resource object.
   4. Change the information.
   5. Add a comma after the previous object.

   DEADLINES:

   Only Scholarships, Internships, Programs, and
   Competitions need deadlines.

   Example:

   deadline: "2026-10-15"

   Once that date passes, the resource automatically
   disappears from the public library.

   Resources without deadlines remain visible.
*/


const resources = [

    /* =====================================================
       EXAMPLE STEM ACTIVITY
       ===================================================== */

    {
        title: "Build a Straw Bridge",

        category: "STEM Activities",

        level: "Beginner",

        time: "30–45 minutes",

        materials: "Straws, tape, scissors",

        pdf: "resources/straw-bridge.pdf",

        cover: "resources/straw-bridge.png",

        description:
            "Design and build a bridge using simple materials while exploring engineering, structural design, creativity, and problem-solving."
    },


    /* =====================================================
       EXAMPLE COLORING PAGE
       ===================================================== */

    {
        title: "Coloring Book of Emotions",

        category: "Coloring Pages",

        level: "Beginner",

        time: "90–120 minutes",

        materials: "Crayons, colored pencils, or markers",

        pdf: "resources/Coloring Book of Emotions.pdf",

        cover: "resources/Coloring Book of Emotions.png",

        author: "STEM Without Barriers",

        description:
            "A creative STEM coloring activity designed to introduce students to emotions and feelings in a fun and accessible way."
    },


    /* =====================================================
       EXAMPLE STEM LESSON
       ===================================================== */

    {
        title: "🦠 Viruses",

        category: "STEM Lessons",

        level: "Beginner",

        time: "1-5 minutes",

        materials: "Pencil, paper, and curiosity",

        pdf: "resources/viruses.png",

        cover: "resources/viruses.png",

         author: "Arwa Afridi",

        description:
            "Explore what engineers do, how engineering solves real-world problems, and the different fields students can explore."
    },


    /* =====================================================
       EXAMPLE WORKSHEET
       ===================================================== */

    {
        title: "Intro to STEM Challenge Worksheet",

        category: "STEM Worksheets",

        level: "Beginner",

        time: "30-45 minutes",

        materials: "Pencil, creativity, curiosity, and materials of your choosing!",

        pdf: "resources/introstem.pdf",

        cover: "resources/introstem.png",

         author: "STEM Without Barriers",

        description:
            "Discover STEM  and reflect on your interests, skills, and passions that help us solve problems in the world."
    },


    /* =====================================================
       EXAMPLE SCHOLARSHIP
       ===================================================== */

    {
        title: "NSHSS Foundation STEM Scholarship",

        category: "Scholarships",

        level: "High School",

        time: "15 minutes",

        materials: "Application materials",

        deadline: "2026-10-20",

        applyLink: "https://www.nshss.org/scholarships/s/nshss-foundation-stem-scholarship-2026/",

        pdf: "resources/nshss.jpg",

        cover: "resources/NSHSS.png",

        description:
            "A scholarship opportunity for students interested in pursuing education and future careers in STEM."
    },


    /* =====================================================
       EXAMPLE INTERNSHIP
       ===================================================== */

    {
        title: "OSTEM Internship",

        category: "Internships",

        level: "High School",

        time: "20 minutes",

        materials: "Resume and application materials",

        deadline: "2026-09-14",

        applyLink: "https://www.nasa.gov/learning-resources/internship-programs/?utm_source=chatgpt.com",

        pdf: "resources/ostem-internship.png",

        cover: "resources/nasa.png",

        description:
            "An internship opportunity designed to give students exposure to STEM careers, professional environments, and real-world experiences."
    },


    /* =====================================================
       EXAMPLE PROGRAM
       ===================================================== */

    {
        title: "International STEM Research Challenge",

        category: "Programs",

        level: "Middle & High School",

        time: "Varies",

        materials: "Internet Access",

        deadline: "2026-09-15",

        applyLink: "https://www.highschoolcompetition.org/apply",
    
        pdf: "resources/isr.png",

        cover: "resources/ISRC.png",


        description:
            "A STEM-focused program designed to help students develop knowledge, skills, confidence, and connections."
    },


    /* =====================================================
       EXAMPLE COMPETITION
       ===================================================== */

    {
        title: "Youth International Mathematics Olympiad (YIMO)",

        category: "Competitions",

        level: "Middle & High School",

        time: "Varies",

        materials: "Internet Access",

        deadline: "2026-08-27",

        applyLink: "https://www.yimo-official.org",

        pdf: "resources/yim.png",

        cover: "resources/yimo.png",

        description:
            "A STEM competition where students can challenge themselves, demonstrate their creativity, and apply STEM knowledge."
    }

];



/* =========================================================
   CATEGORIES
   ========================================================= */

const resourceCategories = [

    "All",

    "Coloring Pages",

    "STEM Activities",

    "STEM Lessons",

    "STEM Worksheets",

    "Scholarships",

    "Internships",

    "Programs",

    "Competitions"

];



/* =========================================================
   OPPORTUNITY CATEGORIES
   ========================================================= */

const opportunityCategories = [

    "Scholarships",

    "Internships",

    "Programs",

    "Competitions"

];



/* =========================================================
   CHECK DEADLINE
   ========================================================= */

function isOpportunity(resource) {

    return opportunityCategories.includes(
        resource.category
    );

}


function hasExpired(resource) {

    if (!isOpportunity(resource)) {

        return false;

    }


    if (!resource.deadline) {

        return false;

    }


    const today = new Date();

    today.setHours(0, 0, 0, 0);


    const deadline = new Date(
        resource.deadline + "T23:59:59"
    );


    return deadline < today;

}



/* =========================================================
   GET ACTIVE RESOURCES
   ========================================================= */

function getActiveResources() {

    return resources.filter(resource => {

        return !hasExpired(resource);

    });

}



/* =========================================================
   AUTOMATIC DESCRIPTION
   ========================================================= */

function getResourceDescription(resource) {

    if (
        resource.description &&
        resource.description.trim() !== ""
    ) {

        return resource.description;

    }


    return `
        Explore this ${resource.category.toLowerCase()}
        resource designed for ${resource.level.toLowerCase()}
        learners. This resource takes approximately
        ${resource.time.toLowerCase()} and helps students
        build STEM knowledge, confidence, and curiosity.
    `.replace(/\s+/g, " ").trim();

}



/* =========================================================
   FORMAT DEADLINE
   ========================================================= */

function formatDeadline(dateString) {

    if (!dateString) {

        return "";

    }


    const date = new Date(
        dateString + "T00:00:00"
    );


    return date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

}



/* =========================================================
   SEARCH RESOURCES
   ========================================================= */

function searchResources(searchTerm) {

    const term =
        searchTerm.toLowerCase().trim();


    const activeResources =
        getActiveResources();


    if (!term) {

        return activeResources;

    }


    return activeResources.filter(resource => {

        const description =
            getResourceDescription(resource)
                .toLowerCase();


        return (

            resource.title
                .toLowerCase()
                .includes(term)

            ||

            resource.category
                .toLowerCase()
                .includes(term)

            ||

            resource.level
                .toLowerCase()
                .includes(term)

            ||

            resource.materials
                .toLowerCase()
                .includes(term)

            ||

            description.includes(term)

        );

    });

}



/* =========================================================
   FILTER BY CATEGORY
   ========================================================= */

function filterResources(category) {

    const activeResources =
        getActiveResources();


    if (category === "All") {

        return activeResources;

    }


    return activeResources.filter(resource => {

        return resource.category === category;

    });

}



/* =========================================================
   SEARCH + FILTER
   ========================================================= */

function getFilteredResources(
    searchTerm = "",
    category = "All"
) {

    let filtered =
        getActiveResources();


    /* CATEGORY */

    if (category !== "All") {

        filtered =
            filtered.filter(resource => {

                return resource.category === category;

            });

    }


    /* SEARCH */

    if (searchTerm.trim() !== "") {

        const term =
            searchTerm.toLowerCase().trim();


        filtered =
            filtered.filter(resource => {

                const description =
                    getResourceDescription(resource)
                        .toLowerCase();


                return (

                    resource.title
                        .toLowerCase()
                        .includes(term)

                    ||

                    resource.category
                        .toLowerCase()
                        .includes(term)

                    ||

                    resource.level
                        .toLowerCase()
                        .includes(term)

                    ||

                    resource.materials
                        .toLowerCase()
                        .includes(term)

                    ||

                    description.includes(term)

                );

            });

    }


    return filtered;

}



/* =========================================================
   CREATE RESOURCE CARD
   ========================================================= */

function createResourceCard(resource) {

    const description =
        getResourceDescription(resource);


    const deadlineHTML =
        resource.deadline

            ? `
                <div class="resource-deadline">
                    <span>📅</span>
                    Deadline:
                    ${formatDeadline(resource.deadline)}
                </div>
              `

            : "";


    const opportunityBadge =
        isOpportunity(resource)

            ? `
                <span class="resource-opportunity-badge">
                    Opportunity
                </span>
              `

            : "";


    return `

        <article
            class="resource-card"
            data-title="${resource.title}"
        >


            <div class="resource-card-image">

    <img
        src="${resource.cover || ''}"
        alt="${resource.title} cover"
        loading="lazy"
        onerror="this.style.display='none';"
    >

    <span class="resource-category-badge">
        ${resource.category}
    </span>

    ${opportunityBadge}

</div>


            <div class="resource-card-content">


                <h3>
                    ${resource.title}
                </h3>


                <p>
                    ${description}
                </p>
${
    resource.author
        ? `
            <p class="resource-author-card">
                Created by ${resource.author}
            </p>
          `
        : ""
}

                <div class="resource-card-meta">

                    <span>
                        🎓 ${resource.level}
                    </span>

                    <span>
                        ⏱️ ${resource.time}
                    </span>

                </div>


                ${deadlineHTML}


                <button
                    class="resource-view-button"
                    data-resource="${resource.title}"
                >
                    View Resource →
                </button>


            </div>

        </article>

    `;

}



/* =========================================================
   RENDER FILTER BUTTONS
   ========================================================= */

function renderFilters() {

    const filterContainer =
        document.getElementById(
            "resource-filters"
        );


    if (!filterContainer) {

        return;

    }


    filterContainer.innerHTML =
        resourceCategories.map(category => {

            return `

                <button
                    class="resource-filter-button ${
                        category === "All"
                            ? "active"
                            : ""
                    }"
                    data-category="${category}"
                >
                    ${category}
                </button>

            `;

        }).join("");

}



/* =========================================================
   RENDER RESOURCE GRID
   ========================================================= */

function renderResources(
    searchTerm = "",
    category = "All"
) {

    const grid =
        document.getElementById(
            "resource-grid"
        );


    const emptyState =
        document.getElementById(
            "resource-empty"
        );


    const count =
        document.getElementById(
            "resource-count"
        );


    if (!grid) {

        return;

    }


    const filtered =
        getFilteredResources(
            searchTerm,
            category
        );


    grid.innerHTML =
        filtered.map(createResourceCard).join("");


    if (count) {

        count.textContent =
            `${filtered.length} ${
                filtered.length === 1
                    ? "resource"
                    : "resources"
            } available`;

    }


    if (emptyState) {

        emptyState.style.display =
            filtered.length === 0
                ? "block"
                : "none";

    }


    attachResourceCardEvents();

}



/* =========================================================
   OPEN RESOURCE MODAL
   ========================================================= */

function openResource(resource) {

    const modal =
        document.getElementById(
            "resource-modal"
        );


    const title =
        document.getElementById(
            "modal-resource-title"
        );


    const category =
        document.getElementById(
            "modal-resource-category"
        );


    const description =
        document.getElementById(
            "modal-resource-description"
        );
const author =
    document.getElementById(
        "modal-resource-author"
    );

    const level =
        document.getElementById(
            "modal-resource-level"
        );


    const time =
        document.getElementById(
            "modal-resource-time"
        );


    const materials =
        document.getElementById(
            "modal-resource-materials"
        );


    const cover =
        document.getElementById(
            "modal-resource-cover"
        );


    const pdf =
        document.getElementById(
            "resource-pdf"
        );


    const download =
        document.getElementById(
            "modal-download"
        );


    const apply =
        document.getElementById(
            "modal-apply"
        );


    const deadlineWrapper =
        document.getElementById(
            "modal-deadline-wrapper"
        );


    const deadline =
        document.getElementById(
            "modal-resource-deadline"
        );



    title.textContent =
        resource.title;


    category.textContent =
        resource.category;


    description.textContent =
        getResourceDescription(resource);
if (author) {
    if (resource.author) {
        author.textContent =
            `Created by ${resource.author}`;
        author.style.display = "block";
    } else {
        author.textContent = "";
        author.style.display = "none";
    }
}

    level.textContent =
        resource.level;


    time.textContent =
        resource.time;


    materials.textContent =
        resource.materials;


    cover.src =
        resource.cover;


    cover.alt =
        `${resource.title} cover`;


    pdf.src =
        resource.pdf;


    download.href =
        resource.pdf;



    /* DEADLINE */

    if (resource.deadline) {

        deadlineWrapper.style.display =
            "flex";

        deadline.textContent =
            formatDeadline(resource.deadline);

    }

    else {

        deadlineWrapper.style.display =
            "none";

    }



    /* APPLY LINK */

    if (
        resource.applyLink &&
        isOpportunity(resource)
    ) {

        apply.href =
            resource.applyLink;

        apply.style.display =
            "inline-flex";

    }

    else {

        apply.style.display =
            "none";

    }



    /* OPEN */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =========================================================
   CLOSE RESOURCE MODAL
   ========================================================= */

function closeResourceModal() {

    const modal =
        document.getElementById(
            "resource-modal"
        );


    const pdf =
        document.getElementById(
            "resource-pdf"
        );


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    /* Stop PDF from continuing in background */

    pdf.src = "";

}



/* =========================================================
   RESOURCE CARD EVENTS
   ========================================================= */

function attachResourceCardEvents() {

    const buttons =
        document.querySelectorAll(
            ".resource-view-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const title =
                    button.dataset.resource;


                const resource =
                    getActiveResources()
                        .find(item =>
                            item.title === title
                        );


                if (resource) {

                    openResource(resource);

                }

            }
        );

    });

}



/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        let currentCategory =
            "All";


        let currentSearch =
            "";



        /* FILTERS */

        renderFilters();



        /* INITIAL RESOURCES */

        renderResources();



        /* SEARCH */

        const searchInput =
            document.getElementById(
                "resource-search"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                event => {

                    currentSearch =
                        event.target.value;


                    renderResources(
                        currentSearch,
                        currentCategory
                    );

                }
            );

        }



        /* CATEGORY FILTERS */

        const filterContainer =
            document.getElementById(
                "resource-filters"
            );


        if (filterContainer) {

            filterContainer.addEventListener(
                "click",
                event => {

                    const button =
                        event.target.closest(
                            ".resource-filter-button"
                        );


                    if (!button) {

                        return;

                    }


                    currentCategory =
                        button.dataset.category;


                    document
                        .querySelectorAll(
                            ".resource-filter-button"
                        )
                        .forEach(filter => {

                            filter.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    renderResources(
                        currentSearch,
                        currentCategory
                    );

                }
            );

        }



        /* CLOSE BUTTON */

        const closeButton =
            document.getElementById(
                "resource-modal-close"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeResourceModal
            );

        }



        /* CLICK OUTSIDE */

        const overlay =
            document.querySelector(
                ".resource-modal-overlay"
            );


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeResourceModal
            );

        }



        /* ESCAPE KEY */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeResourceModal();

                }

            }
        );

    }
);



/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.resources =
    resources;

window.resourceCategories =
    resourceCategories;

window.getActiveResources =
    getActiveResources;

window.getFilteredResources =
    getFilteredResources;

window.getResourceDescription =
    getResourceDescription;

window.formatDeadline =
    formatDeadline;

// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Space Coloring Book",
        category: "Coloring Pages",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "resources/Space Coloring Book.pdf",
        cover: "resources/Space Coloring Book Cover.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to introduce students to space in a fun and accessible way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Alphabet of Animals Coloring Book",
        category: "Coloring Pages",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "resources/Coloring Book Alphabet of Animals.pdf",
        cover: "resources/Animal Alphabet Coloring Book.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to introduce students to different animals using the alphabet in a fun and accessible way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Paper Rockets STEM Challenge",
        category: "STEM Activities",
        level: "Beginner",
        time: "30-45 minutes",
        materials: "Plastic Straws, tape, scissors, paper, pencil, and paper cutouts",
        pdf: "resources/paper-rockets.pdf",
        cover: "resources/paper-rocket.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM activity designed to introduce students to paper rocketry in a fun and accessible way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Summer Coloring Book",
        category: "Coloring Pages",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "resources/Summer Coloring Book.pdf",
        cover: "resources/Summer Coloring Book.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to highlight different aspects of summer in a fun and cute way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Spring Coloring Book",
        category: "Coloring Pages",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "resources/Spring Coloring Book.pdf",
        cover: "resources/Spring Coloring Book.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to highlight different aspects of spring in a fun and cute way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Alphabet of Foods Coloring Book",
        category: "Coloring Pages",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "resources/Coloring Book Alphabet of Foods.pdf",
        cover: "resources/Coloring Book Alphabet of Foods Cover.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to highlight different aspects of the alphabet using foods in a fun and cute way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "What is Space Exploration?",
        category: "STEM Lessons",
        level: "Beginner",
        time: "1-5 minutes",
        materials: "Pencil, paper, and curiosity",
        pdf: "resources/what-is-space-exploration.png", 
        cover: "resources/what-is-space-exploration.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to highlight different aspects of the alphabet using foods in a fun and cute way."
    });
}
// Add missing resource to the resources array
if (typeof resources !== "undefined" && Array.isArray(resources)) {
    resources.push({
        title: "Coloring Book Alphabet of Places",
        category: "Coloring Book",
        level: "Beginner",
        time: "90-120 minutes",
        materials: "Crayons, colored pencils, or markers",
        pdf: "Places.pdf", 
        cover: "resources/Coloring Book Alphabet of Place.png",
        author: "STEM Without Barriers",
        description:
            "A creative STEM coloring activity designed to highlight different aspects of the alphabet using places in a fun and cute way."
    });
}
