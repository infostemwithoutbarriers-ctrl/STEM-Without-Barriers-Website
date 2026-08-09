/* =========================================================
   STEM WITHOUT BARRIERS
   BLOG SYSTEM
========================================================= */


/* =========================================================
   ARTICLE DATABASE
========================================================= */

const articles = [

    {
        id: "future-of-ai",
        title: "The Future of Artificial Intelligence",
        category: "AI",
        author: "STEM Without Barriers",
        date: "August 8, 2026",
        readTime: "5 min read",
        image: "images/blog-ai.jpg",
        excerpt:
            "Artificial intelligence is changing the way we learn, work, create, and solve problems.",
        content: `
            <p>
                Artificial intelligence is quickly becoming one of the
                most influential technologies of our generation. From
                education to medicine, AI is creating new ways to solve
                problems and understand the world around us.
            </p>

            <h2>What is artificial intelligence?</h2>

            <p>
                Artificial intelligence refers to computer systems that
                can perform tasks that normally require human intelligence.
                These tasks can include recognizing patterns, learning
                from information, understanding language, and making
                predictions.
            </p>

            <h2>Why does AI matter?</h2>

            <p>
                AI has applications across nearly every STEM field.
                Engineers use it to optimize designs, scientists use it
                to analyze large datasets, and medical professionals use
                AI-assisted tools to identify patterns in health data.
            </p>

            <p>
                As AI continues to develop, understanding how it works
                and how it should be used responsibly will become
                increasingly important.
            </p>
        `
    },


    {
        id: "chemistry-everyday-life",
        title: "Chemistry in Our Everyday Lives",
        category: "Chemistry",
        author: "STEM Without Barriers",
        date: "August 7, 2026",
        readTime: "4 min read",
        image: "images/blog-chemistry.jpg",
        excerpt:
            "Chemistry isn't just something that happens in a laboratory. It's happening around us every day.",
        content: `
            <p>
                Chemistry is everywhere. The food we eat, the materials
                around us, the air we breathe, and even the processes
                happening inside our bodies are connected to chemistry.
            </p>

            <h2>Chemistry in everyday life</h2>

            <p>
                When you cook food, chemical reactions change its
                structure and properties. When metal rusts, a chemical
                reaction is taking place. Even the process your body uses
                to turn food into energy depends on chemistry.
            </p>

            <h2>Why learning chemistry matters</h2>

            <p>
                Understanding chemistry helps us understand the world
                at a molecular level. It also connects directly to fields
                including medicine, engineering, environmental science,
                and materials science.
            </p>
        `
    },


    {
        id: "biology-human-body",
        title: "The Amazing Science of the Human Body",
        category: "Biology",
        author: "STEM Without Barriers",
        date: "August 6, 2026",
        readTime: "5 min read",
        image: "images/blog-biology.jpg",
        excerpt:
            "From cells to organ systems, the human body is an incredible biological system.",
        content: `
            <p>
                The human body contains trillions of cells working
                together to keep us alive. Every cell has specialized
                functions that contribute to the larger biological system.
            </p>

            <h2>Cells: the building blocks of life</h2>

            <p>
                Cells are the basic structural and functional units of
                living organisms. Different types of cells perform
                different jobs, from transporting oxygen to communicating
                information.
            </p>

            <h2>Biology connects everything</h2>

            <p>
                Biology helps us understand organisms, ecosystems,
                genetics, evolution, and the complex interactions that
                make life possible.
            </p>
        `
    },


    {
        id: "physics-everywhere",
        title: "Physics Is Everywhere",
        category: "Physics",
        author: "STEM Without Barriers",
        date: "August 5, 2026",
        readTime: "4 min read",
        image: "images/blog-physics.jpg",
        excerpt:
            "From roller coasters to the motion of planets, physics helps explain the world around us.",
        content: `
            <p>
                Physics is the study of matter, energy, motion, forces,
                and the fundamental rules that govern our universe.
            </p>

            <h2>Physics in everyday life</h2>

            <p>
                Every time you ride a bicycle, throw a ball, turn on a
                light, or hear music, you're experiencing physics.
            </p>

            <h2>Why physics matters</h2>

            <p>
                Physics provides the foundation for many areas of
                engineering, astronomy, electronics, energy, and
                technology.
            </p>
        `
    },


    {
        id: "engineering-problem-solving",
        title: "Engineering: Turning Problems Into Possibilities",
        category: "Engineering",
        author: "STEM Without Barriers",
        date: "August 4, 2026",
        readTime: "5 min read",
        image: "images/blog-engineering.jpg",
        excerpt:
            "Engineers use creativity, science, and problem-solving to design solutions to real-world challenges.",
        content: `
            <p>
                Engineering is about using scientific and mathematical
                knowledge to design solutions to problems.
            </p>

            <h2>The engineering mindset</h2>

            <p>
                Engineers ask questions, identify constraints, design
                solutions, test their ideas, and improve their designs.
                Failure is often part of the process.
            </p>

            <h2>Engineering is everywhere</h2>

            <p>
                Bridges, aircraft, medical devices, computer systems,
                renewable energy technologies, and countless other
                innovations are the result of engineering.
            </p>
        `
    },


    {
        id: "technology-changing-world",
        title: "How Technology Is Changing the World",
        category: "Technology",
        author: "STEM Without Barriers",
        date: "August 3, 2026",
        readTime: "5 min read",
        image: "images/blog-technology.jpg",
        excerpt:
            "Technology continues to transform the way people communicate, learn, work, and solve problems.",
        content: `
            <p>
                Technology has transformed nearly every part of modern
                life. Computers, smartphones, communication networks,
                and digital tools have changed how information moves
                around the world.
            </p>

            <h2>Technology and education</h2>

            <p>
                Digital tools can provide students with new ways to
                explore ideas, practice skills, and access educational
                resources.
            </p>
        `
    },


    {
        id: "medical-technology",
        title: "The Role of Technology in Modern Medicine",
        category: "Medical",
        author: "STEM Without Barriers",
        date: "August 2, 2026",
        readTime: "5 min read",
        image: "images/blog-medical.jpg",
        excerpt:
            "Technology is helping researchers and medical professionals better understand and support human health.",
        content: `
            <p>
                Medical science increasingly relies on technology to
                collect information, develop treatments, and improve
                patient care.
            </p>

            <h2>Medical engineering</h2>

            <p>
                Biomedical engineers combine biology, medicine,
                mathematics, and engineering to develop technologies
                such as prosthetics, diagnostic tools, and medical
                devices.
            </p>
        `
    },


    {
        id: "stem-careers",
        title: "Exploring Careers in STEM",
        category: "Careers",
        author: "STEM Without Barriers",
        date: "August 1, 2026",
        readTime: "6 min read",
        image: "images/blog-careers.jpg",
        excerpt:
            "STEM careers go far beyond the traditional jobs you may already know.",
        content: `
            <p>
                STEM includes an enormous range of careers. Scientists,
                engineers, programmers, physicians, researchers,
                mathematicians, designers, and many other professionals
                contribute to STEM fields.
            </p>

            <h2>There isn't one STEM path</h2>

            <p>
                Some STEM careers involve building physical systems,
                while others focus on research, healthcare, software,
                education, or solving environmental challenges.
            </p>

            <h2>Explore what interests you</h2>

            <p>
                The best place to begin exploring STEM careers is by
                asking what kinds of problems you enjoy solving and what
                topics make you curious.
            </p>
        `
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const articleGrid =
    document.getElementById("articleGrid");

const searchInput =
    document.getElementById("searchInput");

const articleCount =
    document.getElementById("articleCount");

const noResults =
    document.getElementById("noResults");

const categoryButtons =
    document.querySelectorAll(".category-button");


let selectedCategory = "All";


/* =========================================================
   DISPLAY ARTICLES
========================================================= */

function displayArticles() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredArticles =
        articles.filter(article => {

            const matchesCategory =
                selectedCategory === "All" ||
                article.category === selectedCategory;


            const matchesSearch =
                article.title.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm) ||
                article.excerpt.toLowerCase().includes(searchTerm) ||
                article.author.toLowerCase().includes(searchTerm);


            return matchesCategory && matchesSearch;

        });


    articleGrid.innerHTML = "";


    articleCount.textContent =
        `${filteredArticles.length} ${
            filteredArticles.length === 1
                ? "article"
                : "articles"
        } available`;


    if (filteredArticles.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    filteredArticles.forEach(article => {

        const card =
            document.createElement("article");

        card.className = "article-card";


        card.addEventListener("click", () => {

            window.location.href =
                `article.html?article=${article.id}`;

        });


        card.innerHTML = `

            <div class="article-image">

                <span class="article-category">
                    ${article.category}
                </span>

                <img
                    src="${article.image}"
                    alt="${article.title}"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="article-content">

                <h2>
                    ${article.title}
                </h2>

                <p class="article-excerpt">
                    ${article.excerpt}
                </p>


                <div class="article-meta">

                    <span>
                        By ${article.author}
                    </span>

                    <span class="read-more">
                        Read →
                    </span>

                </div>

            </div>

        `;


        articleGrid.appendChild(card);

    });

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        selectedCategory =
            button.dataset.category;


        displayArticles();

    });

});


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    displayArticles
);


/* =========================================================
   INITIAL LOAD
========================================================= */

displayArticles();