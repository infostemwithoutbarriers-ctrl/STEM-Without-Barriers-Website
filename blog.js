/* =========================================================
   STEM WITHOUT BARRIERS
   BLOG SYSTEM
========================================================= */


/* =========================================================
   ARTICLE DATABASE
========================================================= */

const articles = [
    {
        id: "ocean",
        title: "Can We Turn Ocean Water into Drinking Water?",
        category: "Science",
        author: "Arwa Arfidi",
        date: "August 10, 2026",
        readTime: "6 min read",
        image: "Blog/ocean-drinking.png",
        excerpt:
            "We all know that the ocean covers most of our planet, but can we actually drink it?",
        content: `

        <h2>The Ocean: A Hidden Source of Freshwater</h2>

        <p>Earth is covered by ocean, but most ocean water is too salty to drink.
        So, how can we turn it into freshwater? Scientists use desalination to remove sat and other 
        impurities from seawater. With the help of STEM, this technology could provide freshwater to communities facing water shortages.
        </p>

        <h2>How Does Desalination Work?</h2>
        
        <p>
        Desalination is the process of turning salty seawater into freshwater. One of the most common methods is reverse osmosis.
        In this process, seawater is pushed through a special membrane. The tiny pores allow. water molecules to pass 
        through while blocking most of the salt and other impurities. This leaves us with cleaner, usable freshwater.
        </p>

        <h2>The STEM Behind It</h2>
        
        <p>
        Desalination brings together science, technology, engineering, and mathematics to solve real-world problem. 
        Scientists study how salt and water behave, while engineers design systems that can filter huge amounts of seawater.
        Technology makes the process faster and more efficient, helping provide freshwater where it is needed most.
        </p>

        <h2>Why is Desalination Important?</h2>
        
        <p>
        Desalination can provide freshwater in places where clean water is limited. It can help communities during droughts
        and reduce pressure on natural freshwater sources. 
        </p>

        <h4>
        As technology improves, desalination could become an important part 
        of creating a more water secure future. 
        </h4>

        `
    },

    {
        id: "synthetic-biology",
        title: "Synthetic Biology : A Revolution in Science and Humanitarian Fields",
        category: "Biology",
        author: "Barkhasruti Gogoi",
        date: "August 7, 2026",
        readTime: "5 min read",
        image: "Blog/synthetic-biology-cover.png",
        excerpt:
            "Have you ever heard of how scientists actually generate codes in living organisms instead of a computer? Yes, you heard it right!",
        content: `
        

        <h2>What Exactly is Synthetic Biology?</h2>

            <p>
                As it is currently defined, synthetic biology is the convergence of AI,
                biology, and engineering to create sustainable technology and biological systems. It is considered a pioneering and significant technology of the 21st century. On average, scientists believe it is projected to grow on a massive scale over the next decade.
            </p>

            <p>
             ​Let's dive into how synthetic biology is making a global impact!
            </p>

            <h2>Its Main Focus and Purpose</h2>

            <p>
                • ​From Scratch Design: Scientists can now design biological systems from 
                scratch and redesign existing ones that are no longer practical for current applications
            </p>

            <p>
              • ​Biological Software: They treat biological parts like software 
                modules to make living organisms perform tasks they never evolved to do.
            </p>

            <p>
              • ​Novel Functionalities: They build robust systems to create functionalities 
               and programs that do not currently exist in nature. ​Current Uses and Applications:

            </p>

            <p>
              • ​Environmental Clean-up: The utilization of microbes to create a clean and healthy environment.
            </p>

            <p>
             • ​Pharmaceutical Production: The production of complex drugs that are otherwise
               scarce due to the limited availability of their source flora.
            </p>

            <p>
              • ​Sustainable Consumer Products: The creation of eco-friendly, 
               everyday products, such as bio-derived rose oils and perfumes.

            </p>

            <h2>Key Investors Driving the Shift</h2>

            <p>
              • ​Medical Sectors and Laboratories: They remain the primary
                hubs for early-stage manufacturing and development.
            </p>

            <p>
             • Industrial Companies: They widely recognize these modern
               advancements and are breaking away from traditional manufacturing methods.
            </p>

            <p>
             • Climate and Deep Tech Venture Funds: They believe a shift
               in the STEM field will carve a vital path to lead future growth.

            </p>

            <p>
               <h4>​Synthetic biology represents a new frontier in how humans and the natural world interact,
            highlighting a curious, driven mind eager to learn, innovate, produce, and apply!<h/4>
            </p>
        `
    },


    {
        id: "Figma-Efficient-Design",
        title: "Why is Figma Efficient for Future Designers AND Software Engineers?",
        category: "Technology",
        author: "Kunjing Guan",
        date: "August 4, 2026",
        readTime: "4 min read",
        image: "Blog/figma.png",
        excerpt:
            "Figma is a powerful design tool that is revolutionizing the way designers and developers collaborate.",
        content: `
            <h2>What is Figma?</h2>

            <p>
                Figma has become an essential tool for both future designers and software engineers, 
                streamlining collaboration and bridging the gap between design and development.
                Its cloud-based platform enables real-time teamwork and powerful design features that benefit everyone on a project.
            </p>

            <h2>Teamwork and Workflows</h2>

            <p>
                Live Teamwork: Teams are able to simultaneously view and edit the same file, 
                which reduces the mass emails typically needed for team communication.
                Everyone stays on the same page, literally.
            </p>

            <p>
               Web Browser Access: Teams can use Figma directly in a web browser without 
               worrying about limited storage for software or operating system compatibility. 
               No downloads or installations required — just open a link and start designing.
            </p>

            <h2>Key Features</h2>

            <p>
               DEV Mode: A feature for engineers that gives direct and clean access to specs, 
               measurements, and code snippets, making the handoff from design to development seamless.
            </p>

            <p>
               Auto Layout: Saves time from manual adjustments by automatically resizing text and objects,
               so your designs stay responsive without extra effort.
            </p>

            <p>
              Master Elements: Update a button or navigation bar once, and the changes apply to all 
              instances of that element across your entire project — no more hunting down every copy.
            </p>

            <p>
               Consistency Styles: Main elements and information with colors, text, styles, and numbers keep 
               designs consistent for easy updates across large projects, ensuring a unified visual language 
               throughout.
            </p>
        `

    },


    {
        id: "ai-transforming-education",
        title: "How AI is Transforming the Way We Learn: Opportunities, Challenges, and the Future of Education",
        category: "AI",
        author: "Kamrul Hassan",
        date: "August 5, 2026",
        readTime: "8 min read",
        image: "Blog/ai-transforming-education.png",
        excerpt:
            "When people refer to Artificial Intelligence (AI), we often think of self-driving cars, humanoid robots, or sci-fi blockbusters. ",
        content: `
        <h2>Introduction</h2>

        <p>
            When you hear the term Artificial Intelligence (AI), 
            your mind might jump straight to self-driving cars, humanoid robots, or sci-fi blockbusters.
            But AI isn't just a futuristic concept confined to research labs 
            — it is actively reshaping our classrooms, study routines, and the way students
             and educators interact with knowledge every day.
        </p>

        <p>
        From adaptive learning platforms to intelligent tutoring systems, AI is evolving from a novelty into an essential 
        component of modern education. However, as with any ground-breaking technological shift, its implementation comes 
        with significant opportunities, unique challenges, and critical ethical questions.
        Understanding this balance is essential for the next generation of students entering a tech-driven world.

        <h2>1. The Era of Personalized Learning: Moving Beyond 'One-Size-Fits-All'</h2>
         <p>
          For over a century, traditional education systems have largely operated on a factory-style model: one teacher
          stands in front of a class delivering a single lesson at a fixed pace to twenty, thirty, or even forty students 
          simultaneously. The inherent flaw in this system is obvious — students learn differently.
         </p>

         <p>
         AI breaks this traditional paradigm through adaptive learning systems. Tailored Learning Speeds: AI algorithms continuously analyze a student's 
         performance on quizzes, reading exercises, and practice problems. If a student excels in algebra,
         the system accelerates the material to keep them engaged. 
         </p>

         <p>
         Customized Explanations: Generative AI tools allow students to ask for concepts to be rephrased 
         in ways that match their personal interests. Instant Real-Time Feedback: AI platforms offer 
         instantaneous feedback, explaining why an answer is incorrect the moment a mistake is made.
         </p>

         <h2>2. Democratizing Education and Increasing Accessibility</h2>

         <p>One of the most exciting potential benefits of AI in education is 
         its ability to lower barriers for historically underserved students and learners with disabilities. 
         AI-powered accessibility tools are leveling the playing field: Speech-to-Text & Text-to-Speech tools enable students with
         visual impairments or motor skill challenges to consume and produce written material effortlessly.
         </p>

         <p>Real-Time Subtitling and Translation ensures non-native English speakers and deaf/hard-of-hearing students
          miss no critical information. Dyslexia-Friendly Formats: Adaptive software can automatically reformat 
          reading materials into dyslexia-friendly fonts.
         </p>

         <p>AI tutors — available 24/7 on phones and laptops — provide high-quality, step-by-step guidance to students worldwide
         regardless of socioeconomic status or geographical location, democratizing access to quality tutoring.
         </p>

         <h2>3. The Role of AI for Educators: Burnout Prevention and Engagement</h2>

         <p>It is a common misconception that AI in education exists to replace human teachers. On the contrary, 
         educators are more critical than ever. AI serves as an assistant that frees teachers from tedious 
         administrative burdens: Automated Administrative Work streamlines grading, attendance, and paperwork.
         </p>

         <p>Data-Driven Interventions highlight patterns across classrooms, flagging students who are quietly falling behind.
          Dynamic Lesson Creation lets teachers quickly generate tailored lesson outlines and differentiated worksheets.
         </p>

         <h2>4. The Challenges: Academic Integrity, Bias, and Critical Thinking</h2>

         <p>While the advantages of AI are immense, integrating AI into education comes with critical challenges.
          Over-Reliance Risk: When answers are available at the press of a button, students may skip the productive 
          struggle required for genuine learning.
         </p>

         <p>RAlgorithmic Bias: AI models can inherit human biases and are prone to 'hallucination' — stating false information
          with complete confidence. Students must learn that AI outputs require fact-checking. Digital Divide: AI risks
          widening the achievement gap if hardware and high-speed internet access remain unequally distributed.
         </p>

         <h2>5. Navigating the Future: How Students Can Prepare</h2>

         <p>As AI becomes deeply embedded in the academic world, the most valuable skills will be distinctively human: 
         (1) Critical Inquiry & Prompt Engineering — learning how to ask precise questions and critically evaluate AI answers
         </p>

         <p>(2) Ethics and Media Literacy — identifying bias, verifying sources, and using AI tools responsibly.
          (3) Adaptability and Lifelong Learning — remaining curious, flexible, and open to continuous skill-building.
         </p>

         <h2>Conclusion</h2>

         <p>A Tool, Not a Replacement — Artificial Intelligence is fundamentally changing education, but it is not a silver bullet, 
         nor is it a replacement for human curiosity, creativity, and mentorship. At its best, AI serves as an empowering partner 
         — a tool that removes administrative friction, customizes learning pathways, and expands access to knowledge for students 
         across the globe. By approaching AI with both enthusiasm for its possibilities and healthy skepticism toward its limitations, 
         we can build an educational future where technology enhances human potential rather than replacing it.
         </p>

         <h2>4.Sources & References</h2>

         <h4>>UNESCO – Guidance for Generative AI in Education and Research (2023). Stanford University – 
         Human-Centered Artificial Intelligence (HAI): AI's Role in K-12 Classrooms.
          MIT Teaching Systems Lab – Envisioning the Future of Technology-Enabled Learning. 
          World Economic Forum – The Future of Jobs Report: Emerging Skills and Technologies in Education.
         </h4>

        `
    },


    {
        id: "What-is-ai",
        title: "What is Artificial Intelligence?",
        category: "AI",
        author: "Arwa Arfidi",
        date: "August 6, 2026",
        readTime: "2 min read",
        image: "Blog/what-is-ai.png",
        excerpt:
            "From our computers to our smartphones, AI is becoming an integral part of our daily lives.",
        content: `
        
        <h2>What is AI (Artificial Intelligence)?</h2>

        <p>Artificial Intelligence (AI) is a branch of computer science that enables machines to 
        perform tasks that normally require human intelligence. These tasks include learning, reasoning,
        recognizing patterns, understanding language, and making decisions.
        </p>

        <h2>How does AI (Artificial Intelligence) Work?</h2>

        <p>
        Artificial Intelligence learns from data by recognizing patterns and making decisions using 
        algorithms. As it processes more information, it becomes more accurate through machine learning, 
        allowing it to perform tasks with increasing precision.
        </p>

        `
    },


    {
        id: "volcanos",
        title: "What Causes Volcanos to Erupt?",
        category: "Science",
        author: "Arwa Arfidi",
        date: "August 6, 2026",
        readTime: "2 min read",
        image: "Blog/volcano.png",
        excerpt:
            "We've all seen the dramatic images of volcanic eruptions, but what causes them to happen?",
        content: `

        <h2>What is a Volcano?</h2>

        <p>A volcano is an opening in Earth's crust through which molten rock, gases, 
        and ash escape. Beneath most volcanoes is a chamber filled with magma—hot, melted rock 
        found below the surface. When magma reaches the surface, it is called lava.
        </p>

        <h2>What Causes Volcanos to Erupt?</h2>
        
        <p>
        Most volcanoes are found near the edges of tectonic plates, the giant pieces that make up 
        Earth's outer shell. As these plates move, magma rises through cracks in the crust. Over time,
        gases trapped inside the magma build up pressure. When the pressure becomes stronger than the 
        surrounding rock, the volcano erupts, releasing lava, ash, gases, and volcanic rocks.
        </p>
        `
    },


    {
        id: "science-behind-rainbows",
        title: "The Hidden Science Behind Rainbows",
        category: "Science",
        author: "Arwa Arfidi",
        date: "August 6, 2026",
        readTime: "2 min read",
        image: "Blog/rainbow.png",
        excerpt:
            "Rainbows are one of nature's most beautiful phenomena, but have you ever wondered how they form?",
        content: `
        <h2>What Causes Rainbows to Form?</h2>
        
        <p>Have you ever wondered why a rainbow appears after the rain? Although it looks magical, a rainbow
         is actually created by science. It forms when sunlight shines through tiny water droplets in the air.
         </p>
         
        <p>As the light enters a raindrop, it bends, reflects inside the droplet, and bends again as it leaves. 
        This process separates white sunlight into the seven colors of the rainbow: red, orange, yellow, green, 
        blue, indigo, and violet.
        </p>

      <p>A rainbow appears curved because millions of tiny raindrops reflect sunlight toward our eyes at the
         same angle. Each raindrop acts like a tiny prism, bending and separating sunlight into different colors. 
         When countless droplets do this at the same time, they create the colorful arc we see across the sky.
       </p>

        <p>Interestingly, no two people see exactly the same rainbow because each person views light from a different
         set of raindrops.
         </p>
         
        <h4>
        This means every rainbow is unique, making each sighting a special experience.
         </h4>
       
        `
    },

    {
        id: "ai-budget",
        title: "AI On a Budget",
        category: "AI",
        author: "Arwa Arfidi",
        date: "August 9, 2026",
        readTime: "10 min read",
        image: "Blog/ai-on-a-budget.png",
        excerpt:
            "A No-Fluff Guide to Saving Time and Money in Your Small Business.",
        content: `
        
        <h2>Introduction</h2>

        <p>A few years ago, "using AI in your Business" Sounded like something only tech companies did.
        Not anymore. Today, a bakery owner in a small town can use AI to write her social media captions
        in ten minutes instead of an hour. A local plumber can let an AI chatbot answer customer questions at midnight while he sleeps. 
        A one-person marketing consultancy can use AI to draft client proposald that used to take a full afternoon.
        This isn't about robots taking over. It's about smal business owners getting back their most limited resource:time.
        </p>

        <p>Here's a real example. A friend of mine runs a small online candle shop. She used to spend three hours
        every Sunday writing product descriptions and emails. Now she uses an AI writing tool to draft the first version, 
        tweaks it in her own voice, and the whole thing takes 20 minutes. That's over two extra hours a week — time
        she now spends actually growing her business instead of typing.
        </p>

        <p>That's what this book is about. Not chasing every shiny new AI tool,  but picking a handful that genuinely
        save you time, money, or stress — and using them well. By the end, you'll have a simple, practical plan to 
        bring AI into your business without feeling overwhelmed or needing a tech background.
        </p>

        <h2>The AI Mindset Shift</h2>

        <p>
        Most peoplee think of AI as a tool, like a calculator. But the owners who get the most out of it think of
        it differently: As a Helper on the Team. Here's the shift. Instead of asking "How do I use this AI Tool?", 
        ask "What task do I hate doing every week that I could Hand off?" That one change in thinking makes AI way more 
        useful, way faster. 
        </p>

        <p> Real Example: a small gym owner used to dread writing weekly newsletters to members. it felt like a 
        chore she kept pushing off. once she started treating an ai writing assistant like a helpful assistant — 
        giving it her rough notes and letting it draft the newsletter — she stopped dreading mondays. she still edits it, 
        still adds her own voice, but the blank page problem is gone.
        </p>

        <p>The mistake most business owners make is expecting ai to be perfect right away, 
        then giving up when it isn't. The better mindset: treat it like training a new employee.
        Give clear instructions, check its work, correct it, and it gets better the more you use it. 
        You don't need to be "good at tech" for this. You just need to be willing to delegate the boring stuff.
        </p>
        
        <h2>AI For Customer Service</h2>

        <p>
        If there's one place small businesses lose customers without realizing it, it's slow replies. Someone 
        messages you at 9pm with a question, and by the time you reply the next morning, they've already bought 
        from a competitor.
        </p>

        <p>
        This is where ai chatbots quietly become a lifesaver. They're not there to replace you — they're there to 
        catch the easy stuff. "What are your hours?" "Do you ship to Canada?" "How much is the large size?" 
        questions you've answered a hundred times before.
        </p>

        <p>
        Real example: a small skincare shop owner set up a simple ai chatbot on her website that answered 
        common questions about ingredients, shipping times, and returns. within a month, she noticed she was 
        getting fewer repetitive emails, and customers were checking out faster because they got instant answers
        instead of waiting for her to wake up.
        </p>

        <p> She still handles complaints and tricky situations herself — the human stuff. The chatbot just handles 
        the repetitive 80%, so she can focus her energy on the 20% that actually needs her. That's the real value 
        here: not a robot pretending to be human, just something that quietly clears out the noise so you can
        focus on what matters.
        </p>


        <h2>AI For Marketing & Content</h2>

        <p> Marketing used to mean staring at a blank screen, trying to think of something clever to post. 
        For a lot of small business owners, that blank screen alone is enough to make marketing get skipped 
        entirely for weeks.
        </p>

        <p> AI writing tools fix exactly that problem. You give it a rough idea — even a messy one — 
        and it hands you a first draft in seconds. You're not starting from nothing anymore, just editing.
        </p>

        <p> Real example: a local pottery studio owner used to post on Instagram maybe once a month, 
        mostly because writing captions felt like a chore. She started using an AI tool to generate 
        three caption options based on a photo and a quick note like "New Mug batch, earthy glazes. " 
        She'd pick the one that sounded most like her, tweak a line or two, and post it. 
        Within two months she went from posting monthly to posting three times a week — and 
        her sales from Instagram dms doubled.
        </p>

        <p>The key is she never let the ai post exactly as written. She always added her own voice — 
        a joke, a personal note, something only she would say. That's what keeps content from feeling robotic.
        Marketing doesn't need to feel like a second job. With the right prompt, it can take minutes instead of hours.
        </p>

        <h2>AI For Sales & Money</h2>

        <p>
       Two things quietly drain small business owners: leads that go cold because nobody followed up, 
       and money stuff — invoices, expenses, cash flow — that gets pushed to "later" and never actually done.
        </p>

        <p>
        AI helps with both, and honestly, they solve the same core problem: things falling through the cracks
        because you're busy running the business, not managing admin. On the sales side, ai tools can 
        draft follow-up emails the moment someone shows interest, so leads don't go quiet just because you forgot.
        A small real estate agent started using an ai-powered CRM that auto-drafted a friendly follow-up within a 
        day of a new inquiry. He'd tweak a line, hit send, and within three months he was closing more deals — not 
        from new leads, just fewer old ones slipping away.
        </p>

        <p> On the money side, AI tools can auto-generate invoices, categorize expenses, and flag when cash flow 
        looks tight before it becomes a real problem. A small landscaping business owner used to do her bookkeeping 
        in a panic every tax season. Now an ai tool tracks expenses automatically as they happen, so by the time 
        taxes roll around, most of the work is already done. Neither of these replace you. They just make sure 
        the boring-but-important stuff actually gets done  — instead of quietly costing you money.
        </p>

        <h2>AI For Design & Choosing The Right Tools?</h2>

        <p>
        You don't need to be a designer to make things look professional anymore. ai design tools can generate 
        logos, social graphics, and product mockups just from a short description — no design degree required. 
        Real Example: a candle shop owner needed a new logo but couldn't afford a $500 designer. She used an ai 
        design tool, typed a few words about her brand ("earthy, minimal, warm tones"), and got several options in minutes.
        She picked one, tweaked the colors slightly, and had a logo she was proud of by the end of the afternoon.
        </p>

        <p>The harder question is usually: which tools are actually worth using? With so many AI tools out there, 
        it's easy to waste time (and money) trying everything. A simple rule: start free. Most AI tools offer a 
        free tier that's enough to test if it actually saves you time before you pay for anything. Only upgrade 
        to a paid plan once you've used the free version enough to know it's genuinely useful — not just shiny and 
        new. Ask yourself one question before paying for any tool: "Will this save me more time or money than it 
        costs?" If the answer isn't a clear yes, skip it.
        </p>

        <h2>Avoiding Common Mistakes & Your Action Checklist</h2>

        <h4>A few mistakes trip up almost every small business owner starting with AI. Knowing them in advance 
        saves you time and frustration.</h4>

        <p>
        Mistake 1: Trusting AI output blindly. AI can get facts wrong or sound generic. Always review and edit 
        before sending anything to a customer.
        </p>

        <p>Mistake 2: Over-relying on AI for everything. Customers can tell when replies feel robotic. Keep your 
        voice in the final product, always.
        </p>

        <p>Mistake 3: Ignoring privacy. Don't paste sensitive customer or financial data into AI tools without checking 
        their Privacy Policy first.
        </p>

        <p>Mistake 4: Trying too many tools at once. Pick one or two, actually learn them, before adding more to 
        your workflow.
        </p>

        <p>You don't need to overhaul your whole business overnight. Here's a simple way to start:
        </p>
        
        <h4>Your Action Checklist:</h4>

        <p>
        - Pick one task from this book that eats up the most time each week.
        - Try one free AI tool for that specific task this week.
        - Use it for 7 days before judging if it's worth keeping.
        - Once comfortable, pick a second task to tackle
        - Review your time savings after 30 days.
        - Small, consistent steps beat trying to change everything at once. 
        - Start with one task — momentum builds from there.
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
