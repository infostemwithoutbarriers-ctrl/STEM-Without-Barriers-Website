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
        id: "green-movement",
        title: "Join The Green Movement",
        category: ["Science", "Biology"],
        author: "Arwa Arfidi",
        date: "August 11, 2026",
        readTime: "4 min read",
        image: "Blog/green-movement.png" ,
        excerpt:
            "Plants are living organisims that make up the world around us! But is there more we don't know about them?",
        content: `
        
        <h2>The World Of Plants</h2>

        <p>Plants are all around us, from the grass beneath our feet to the trees above us.
        They come in countless shapes, sizes, and colours, and each has its own way of surviving and
        growing.</p>

        <p>Plants provide food, shelter, oxygen, and many of the resources we depend on every day. 
        They are a small but powerful part of the natural world.</p>

        <h2>Did You Know?</h2>

        <p>
        - Bamboo is one of the fastest-growing plants in the world and can grow remarkably quickly.

        - Sunflowers can track the movement of the Sun as they grow. 

        - Some plants can communicate with nearby plants using chemical signals. 

        - Plants can respond to touch — some species fold their leaves or change their growth when touched.
        </p>

        <h4>Let's plant one today! From an incredible little seed, something beautiful can grow.<h4>

        <h4>Let's plant a tree & save the Earth</h4>

        <h2>Plant Today. Grow Tomorrow</h2>

        `

    
    },
    


    {
        id: "brain-fog" ,
        title: "What is Brain Fog and How to Prevent it?",
        category: ["Medical", "Biology", "Science"],
        author: "Umber Kaila",
        date: "August 11, 2026",
        readTime: "6 min read",
        image: "Blog/brain-fog.png",
        excerpt:
            "Brain Fog is often referred to a heavy, clody haze in your mind.",
        content: `

        <p>Have you ever had sluggish thoughts, your brain feels slow your reaction takes longer or you feel 
        drained but you haven’t done any hard physical movement or you have read a page 3 times but can’t 
        remember what the page was saying or when you forget simples task such as appointments, chores or even 
        recent conversation slip through your mind. No you are not lazy, No you are not extremely tired, No the 
        stress is not coming from your job. You are just experiencing brain fog.
        </p> 
        
        <h2>What is Brain Fog?</h2>

        <p>Brain fog is when your mind feels slow, fuzzy or tired, this usually happens when everyday habits or 
        health issues disrupt your mental clarity causing poor sleep, high stress and poor nutrition. It is 
        not a disease, it is just a sign that your brain is tired or lacking energy.
        </p>

        <h2>How to Prevent it?</h2>

        <p>
        The ways you can prevent brain fog is by improving daily habits like getting 7 to 9 hours of sleep per 
        day, trying going to bed at the same time and also waking up at the same time everyday . Take 30 minutes 
        of your day to take a rest break to clear your mind from heavy tasks. Reduce screen time before bed to 
        help your brain fully wind down.
        </p>

        <p>
        Eat a balanced meal. Eat whole foods like vegetables, fruits,nuts, lean protein, avoid high sugar 
        instead eat healthy fat. Eat high protein meals to avoid energy crashing and to help your blood sugar. 
        Drink enough water throughout the day because dehydration directly causes mental fatigue. 
        </p>

        <p>
        Take 30 minutes of your day to do some type of physical movement, this could include taking a walk, going 
        for a run or even going to the gym as physical movement will help boost blood flow to the brain. Take at 
        least a 10 minute walk outside because this anchors your body clock. Practice deep breathing exercise, go 
        on short walks, or meditate whenever you are feeling stressed. Lower your intake of caffeine and alcohol 
        because these substances disrupt natural energy and sleep cycle. 
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
        id: "immune-system",
        title: "The Immune System: How Your Body Protects You",
        category: ["Science", "Biology", "Medical"],
        author: "Arwa Arfidi",
        date: "August 17, 2026",
        readTime: "4 min read",
        image: "Blog/immunity.png" ,
        excerpt:
            "Every second, every day, our body is surrounded by a world that is unseen. Our immune systems are running constantly everyday just to keep us alive. But, how exactly is it working to protect us?",
        content: `
        
        <h2>The invisible Caretakers</h2>

        <p>Tiny organisms surround us—in the air we breathe, on the surfaces we touch, in the food we eat, and 
        even on our own skin. Many of these microorganisms are harmless, but some can enter our bodies and cause 
        disease.</p>

        <h4>So, how does our body know which microorganisms are dangerous?</h4>

        <p>The answer lies within one of the most remarkable systems in our body: the immune system. The immune 
        system is a complex network of cells, tissues, organs, and chemical signals that work together to protect 
        our bodies against harmful pathogens. It continuously monitors our body, identifies unfamiliar substances, 
        and responds when a threat or pathogen enters.
        </p>

        <p>But the immune system does not begin fighting only after we become sick. Our bodies have several layers of 
        protection that work together to stop harmful organisms before they can cause problems.
        </p>

        <h2>Your Body's First Line of Defense</h2>

        <p>Before an invading pathogen even meets an immune cell, it has to get past your body's first defenses. 
        Your body is surrounded by physical and chemical barriers designed to prevent harmful microorganisms from 
        entering.
        </p>

        <h4>Skin: Your Protective Shield</h4>

        <p>Your skin is one of your body's most important defenses. It forms a tough physical barrier that separates the 
        inside of your body from the outside environment. Healthy skin makes it difficult for many microorganisms to enter. 
        It also produces substances that can make the surface less suitable for certain harmful microbes.
        </p>

        <h4>Tears: More Than Just Water</h4>

        <p> Your eyes have their own protective system. Tears continuously wash the surface of the eye and contain substances 
        that can damage certain bacteria. Every blink helps spread this protective fluid across your eyes.
        </p>

        <h4>Mucus: The Sticky Trap<h4>

        <p>Inside parts of your respiratory system, mucus helps trap dust, particles, and microorganisms. Tiny hair-like 
        structures called cilia can then move the mucus away from deeper parts of the respiratory tract, helping keep unwanted 
        particles from reaching your lungs.
        </p>

        <h2>Identification of a Threat By Immune System</h2>

        <p>Sometimes, however, a pathogen manages to get past the body's outer defenses. This is when the immune system 
        begins a stronger and more active response. Our body contains specialized immune cells that can recognize signs 
        of danger. When a potential pathogen is detected, these cells can release chemical signals that help coordinate 
        the immune response.
        </p>

        <h4>Step 1: Detect</h4>

        <p>Immune cells identify structures or substances associated with pathogens. This allows the immune system to 
        recognize that something unfamiliar may be present.
        </p>

        <h4>Step 2: Signal</h4>

        <p>Chemical signals are released to alert other immune cells and help bring them to the area 
        where the pathogen has been detected.
        </p>

        <h4>Step 3: Respond</h4>

        <p>Different immune cells have different jobs. Some surround and destroy harmful microorganisms, while others 
        coordinate the immune response and help activate other immune cells. White blood cells play an important role in 
        identifying and fighting infections.
        </p>

        <h2>A System That Remembers</h2>

        <p>The immune response is not a chaotic battle. It is a carefully coordinated process in which millions of immune 
        cells communicate and work together. But the immune system has another remarkable ability: it can remember certain 
        pathogens it has encountered before.
        </p>

        <p>This is known as immune memory. If the same pathogen enters the body again, the immune system can recognize it and 
        respond more quickly and effectively. The immune system doesn't just defend the body—it learns from the past.
        </p>

        <h3>Did You Know?</h3>

        <p>Your skin is the largest organ in your body, and it acts as one of your first defenses against harmful microorganisms. 
        It creates a physical barrier that helps prevent many pathogens from entering your body in the first place.
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
        id: "human-heart",
        title: "The Human Heart",
        category: "Biology",
        author: "Kanak Dhami",
        date: "August 10, 2026",
        readTime: "7 min read",
        image: "Blog/human-heart.png",
        excerpt:
            "The Human Heart Beats Around 100,000 Times Per Day, But Is There More To It?",
        content: `

        <h4> The Human Heart beats around 100,000 times a day, it's also the about the size of a closed fist. But what else is there to know about it? 
        The heart is a muscular organ that continuously pumps blood throughout the body"</h4>

        <h2>What's Inside The Heart?</h2>

        <p>The human heart is divided into four chambers that work together to maintain
        continuous blood circulation.</p>

        <h4>Right Atrium</h4>

        <p>Receives oxygen-poor blood returning from the body through the superior and inferior vena cava.
        </p>

        <h4>Right Ventricle</h4>

        <p> Pumps this blood towards the lungs through the pulmonary artery, where it can receive fresh oxygen.
        </p>

        <h4>Left Atrium</h4>

        <p>Receives oxygen-rich blood from the lungs through the pulmonary veins.
        </p>

        <h4>Left Ventricle</h4>

        <p>The strongest chamber. It pumps oxygen-rich blood through the aorta to the entire body.
        </p>

        <h4>The Values - One Way Doors</h4>

        <p> The tricuspid, pulmonary, mitral and aortic valves open and close with the heartbeat. 
        They prevent blood from flowing backwards.
        </p>

        <h2>The Journey of a Drop of Blood</h4>

        <h4>1. From The Body</h4>

        <p>After delivering oxygen to tissues, blood becomes oxygen-poor and returns to the heart through the vena cava.
        </p>

         <h4>2. Into The Right Side</h4>

        <p>It enters the right atrium, moves through the tricuspid valve and reaches the right ventricle.
        </p>

         <h4>3. To The Lungs</h4>

        <p>The right ventricle pumps it through the pulmonary artery to the lungs.
        </p>

         <h4>4. Oxygen Pick-Up </h4>

        <p>In the lungs, carbon dioxide is released and oxygen is absorbed.
        </p>

         <h4>5. Back To The Heart</h4>

        <p>Oxygen-rich blood returns through the pulmonary veins and enters the left atrium.
        </p>

         <h4>6. Out To The Body</h4>

        <p>It moves into the left ventricle and is pumped through the aorta to supply the entire body.
        </p>

        <h2>How Does The Heart Beat?"</h2>

        <h4>Your Heart Has It's Own Electrical System</h4>

        <p>The heart doesn't need someone to tell it when to beat. Special cells generate and conduct 
        electrical signals that coordinate each heartbeat.</p>

        <h4>The Signal Starts Here ↓</h4>

        <h4>SA NODE</h4>

        <p>The sinoatrial node acts as the heart's natural pacemaker. It generates an electrical 
        impulse that causes the atria to contract.</p>

        <h4>AV NODE ↓</h4>

        <p>The signal reaches the atrioventricular node, where it is briefly delayed. 
        This gives the ventricles time to fill with blood..</p>
        
        <h4>BUNDLE OF HIS</h4>

        <h4>PURKINJE FIBRES ↓</h4>

        <p>The electrical signal spreads through the ventricles, causing them to contract and pump blood out.
        </p>

        <h2>Systole + Diastole</h4>

        <p>Systole: The heart contracts and pumps blood out.</p>

        <p>Diastole: The heart relaxes and fills with blood.</p>

        <p>Together, these phases form the cardiac cycle.</p>

        <h2>See It In Action</h4>

        <p>An ECG (electrocardiogram) records the electrical activity of the heart and produces the familiar 
        wave pattern seen in medical monitoring.</p>

        <h2>Who Supplies The Heart Issue</h2>

        <p>It might seem strange, but the heart cannot simply take all the oxygen it needs from the blood 
        passing through its chambers.
        </p>

        <p>The heart muscle receives its own oxygen-rich blood through the coronary arteries. These vessels branch 
        from the aorta and spread across the surface of the heart, supplying the cardiac muscle with oxygen and nutrients.
        After the heart muscle uses the oxygen, the blood is collected by cardiac veins and eventually returns to the right 
        atrium through the coronary sinus.
        </p>

        <h2>Why Is This Important</h2>

        <p>The heart works continuously, so its muscle requires a constant supply of oxygen. If'a coronary artery becomes 
        severely blocked, part of the heart muscle may not receive enough oxygen. This can lead to a heart attack.
        <p/>

        `
    },

    {
        id: "science-farming",
        title: "The Science of Farming",
        category: ["Science" , "Biology"],
        author: "Arwa Afridi",
        translator: null ,
        date: "August 11, 2026",
        readTime: "7 min read",
        image: "Blog/farming-science.png",
        excerpt:
            "Farming has assisted and been a huge part our lives in more ways than one. But What's The Science Behind It?.",
        content: `

        <h2>Crop Enhancement</h2>

        <p>Crop improvement is the process of developing plants with better and more useful 
        characteristics. Scientists use methods such as selective breeding and genetic 
        techniques to produce crops with higher yields, better quality, improved disease 
        esistance, and greater tolerance to environmental conditions.
        </p>

        <h2>Plant Breeding</h2>

        <p>Plant breeding is the selection and crossing of plants to produce better crops.
        </p>
        <h4>Why is it important?</h4>
        <p>
        • Higher crop yield
        • Better nutritional value
        • Disease resistance
        </p>

        <h2>Smart Farming</h2>
        
        <p>Smart farming uses technology, sensors, and data to monitor crops and soil. 
        It helps farmers use water, fertilizers, and other resources more efficiently while
        improving crop production.
        </p>

        <h2>Pest Control</h2>

        <p>Pest control is the management of organism that damage crops.
        </p>

        <h4>Common Methods</h4>
        • Biological control
        • Chemical control
        • Natural predators
        • Resistant crops

        <h2>Agricultural Drones</h2>

        <p>Agricultural drones are unmanned flying devices used to monitor crops, 
        detect problems, and collect information about farmland. They help farmers observe 
        large areas quickly and accurately.</p>

        `
    }


,{
        id: "cognitive-bias",
        title: "What is Cognitive Bias?",
        category: ["Science" , "Biology"],
        author: "Umber Kaila",
        translator: null ,
        date: "August 12, 2026",
        readTime: "6-8 min read",
        image: "Blog/cognitivebias.png",
        excerpt:
            "Loss Aversion? Herd Mentality? Does this sound familar? These are all different examples of cognitive biases! But is there more to it?",
        content: `

        <h2>What is it?</h2>

        <p>Cognitive Bias is when your brain takes a mental shortcut when processing information, the reason why your brain 
        takes a mental shortcut is to save energy, but when your brain takes a mental shortcut it could also lead your brain 
        into thinking a wrong conclusion.
        </p>

        <h2>Why does this happen?</h2>

        <p>The reason why this might happen is because your brain may face too much information in a day, your brain can not 
        handle all this information all at once so it uses shortcuts to save time and save energy. The brain uses shortcuts 
        called heuristics to make faster choices. Heuristics is a practical mental shortcut used to solve problems or make 
        decisions quickly. The shortcuts may be faster, save energy and help you survive but they may cause systematic 
        thinking errors.
        </p>

        <h2>The Different Types</h2>
        
        <p>There are many different types of Cognitive Bias. Confirmation Bias, Anchoring Bias, Bandwagon effect, Availability 
        Heuristics. Confirmation Bias is when you are only looking for facts that already prove what you believe in. Anchoring
        Bias is when you trust the very first information you hear too much of it. Bandwagon effect is when you believe something 
        just because everyone else believes it. Availability Heuristics is when you are judging a risk by how easily you remember 
        the dramatic example. 
        </p>

        <h2>How Can You Prevent It?/h2>

        <p>The way you can prevent cognitive bias is to slow down your thinking instead of taking shortcuts, stop and wait before 
        you make a decision or jump too fast towards the conclusion. When trying to prove your side is right with research and data, 
        try to find data or facts that challenge what you already believe in to be true. Ask others. Talk to people with different 
        backgrounds to find the blind spot in your own thinking. Check the current state you are in, notice if you are too tired, 
        rushed, or stressed, because if you are in any of these conditions then your brain relies more on bias than critical thinking. 
        List your assumptions, write down what you actually know rather than you guessing.  
        </p>

        `
    }
,{
        id: "butterflies-transform",
        title: "How Do Butterflies Transform?",
        category: ["Science" , "Biology"],
        author: "Arwa Afridi",
        translator: null ,
        date: "August 16, 2026",
        readTime: "10 min read",
        image: "Blog/butterfly.png",
        excerpt:
            "Butterflies are beautiful enchanting creatures! So much so, that we can't help but wonder where they come from. Have they always had their beautiful wings and colors?",
        content: `

        <h2>How Do Butterflies Transform</h2>

        <p>Have you ever imagined how a tiny caterpillar can transform into a magnificent butterfly? This remarkable 
        process is known as metamorphosis. Unlike humans, butterflies undergo a dramatic transformation during their life cycle, 
        changing their body structure completely as they grow.
        </p>

        <p>A butterfly's life cycle consists of four fascinating stages: egg, larva (caterpillar), pupa (chrysalis), 
        and adult butterfly. Each stage has a different purpose and sets the stage for the butterfly's development.
        </p>

        <p>But how does this incredible transformation actually happen? Let's explore each stage and uncover the science 
        behind one of nature's most extraordinary transformations.
        </p>

        <h2>The Beginning: The Egg</h2>

        <p>The transformation of a butterfly begins with a tiny egg. After mating, the female butterfly carefully lays her 
        eggs, usually on the leaves of a plant that will later provide food for the young caterpillars. Although the eggs 
        may appear small and delicate, they contain everything needed for a new butterfly to begin developing.
        </p>

        <p>Inside the egg, the embryo gradually develops as it receives nutrients from the egg. After a period of development, 
        a tiny caterpillar eventually emerges from the egg and begins the next stage of its life. This may seem like a simple 
        beginning, but the egg is the first important step in the butterfly's extraordinary life cycle.
        </p>

        <h4>The Hungry Caterpillar</h4>
        <p>
        After emerging from its egg, the butterfly enters its second stage of life as a larva, commonly known as a caterpillar. 
        At this stage, its main motive is to feed and develop. Caterpillars can consume large amounts of plant material, 
        providing them with the nutrients they require for growth.
        </p>

        <p>As the caterpillar grows, its outer skin becomes too small for its expanding body. It therefore sheds its previous skin 
        and develops a larger one. This process, known as molting, happens several times during the larval stage.
        </p>

        <p>Although the caterpillar looks entirely different from an adult butterfly, significant changes are already taking place 
        inside its body. It is preparing for the next and most dramatic stage of metamorphosis.
        </p>

        <h2>Inside the Chrysalis</h2>

        <p>After the caterpillar has grown enough, it enters the third stage of its life cycle: the pupa, commonly known as the 
        chrysalis. During this stage, the caterpillar binds itself to a suitable surface and forms a protective outer covering 
        around its body.
        </p>

        <p>Inside the chrysalis, an extraordinary transformation takes place. The caterpillar's body is gradually reorganised, 
        and specialised structures develop into the wings, legs, antennae, and other features of an adult butterfly.
        </p>

        <p>Although the chrysalis may appear utterly still from the outside, an incredible amount of biological activity is 
        taking place within it. This is the stage where the caterpillar undergoes its most incredible transformation, preparing 
        to emerge as a fully developed butterfly.
        </p>

        <h2>The Emergence of a Butterfly</h2>

        <p>After spending time inside the chrysalis, the fully developed butterfly is eventually primed to emerge. It meticulously 
        breaks through the chrysalis and pulls itself out, unleashing its newly formed body and wings. At first, its wings are soft, 
        folded, and too delicate for flight. The butterfly pumps fluid into the veins of its wings, causing them to expand and gradually 
        become firm. Once its wings are fully developed and dry, it can take its first flight.
        </p>

        <p>The transformation from a tiny caterpillar into a flying butterfly is truly stupendous. From egg to larva, pupa, and finally 
        adult, each stage plays an essential role in completing the butterfly's extraordinary life cycle.
        </p>

        `
    }

,{
        id: "cognitive-bias",
        title: "Why Do Icebergs Float?",
        category: ["Science", "Physics"],
        author: "Arwa Arfidi",
        translator: null ,
        date: "August 13, 2026",
        readTime: "8-10 min read",
        image: "Blog/iceberg.png",
        excerpt:
            "When people hear 'Iceberg' they traditionaly think of the Titanic! But these icy structures have a lot more to them!",
        content: `

        <h2>Why does Ice Float?</h2>

        <p>Have you ever wondered why a huge piece of ice can float on water instead of sinking? The answer lies in density. 
        Density describes how much matter is packed into a certain amount of space. When liquid water freezes, its molecules 
        arrange themselves into a special structure that leaves more space between them. This causes ice to become less dense 
        than liquid water. Because ice is less dense than water, it floats on the surface.
        </p>

        <p>Another important idea is buoyancy, which is the upward force that water exerts on an object. When an iceberg is 
        placed in the ocean, the water pushes upward against it. This upward force helps support the weight of the iceberg 
        and keeps it floating.
        </p>

        <p> Water has a very unusual property because most substances become denser when they become solid, but water expands 
        when it freezes. This is why ice floats and why frozen lakes and ponds form ice on the surface rather than freezing 
        completely from the bottom upward.
        </p>


        <h2>The Hidden Part of an Iceberg</h2>
        
        <p>When we look at an iceberg floating in the ocean, we only see a small part of it. Most of the iceberg is actually 
        hidden beneath the water. This happens because ice is only slightly less dense than seawater. Usually, around one-tenth 
        of an iceberg is visible above the surface, while roughly nine-tenths remains underwater.
        </p>

        <p>The exact amount can vary depending on the shape, size, and type of ice. The underwater section can extend deep into the 
        ocean, making icebergs much larger than they appear. This is also why ships and boats need to keep a safe distance from 
        icebergs—the part that cannot be seen can be surprisingly large.
        </p>

        <h4>Fun Fact</h4>

        <p>The phrase “the tip of the iceberg” comes from this idea. It means that we can see only a small part of something while a 
        much larger part remains hidden.
        </p>

        <h2>How Do Icebergs Form?/h2>

        <p>Icebergs have a fascinating journey that begins on land, not in the ocean. In extremely cold regions such as Antarctica and 
        Greenland, snow falls year after year. Because the temperature stays low, the snow does not completely melt. Instead, new layers 
        of snow build up on top of older layers and become compressed under their own weight. Over a very long period of time, this process 
        creates enormous masses of solid ice called glaciers and ice sheets.
        </p>

        <p>As glaciers slowly move toward the coast, they eventually reach the ocean. When a large piece of ice breaks away from the 
        edge of a glacier and falls or floats into the sea, this process is called calving. The newly separated piece becomes an iceberg.
        </p>

        <p>Once an iceberg enters the ocean, it can be carried by ocean currents and winds. Some icebergs travel great distances through 
        the sea while slowly becoming smaller as they melt. Eventually, the iceberg may completely melt and return its freshwater to the 
        ocean. So, every iceberg is part of a much longer journey—from snowfall, to glacier, to ocean, and finally back into the water.
        </p>

        <h2>What Happens to Icebergs as They Melt?/h2>

        <p>After an iceberg breaks away from a glacier, it begins a slow journey through the ocean. As it moves into warmer waters, 
        heat from the surrounding seawater and air causes the ice to melt. Waves and ocean currents can also break pieces away from 
        the iceberg, gradually changing its shape and size.
        </p>

        <p>As the iceberg becomes smaller, more of its surface is exposed to the warmer environment, causing it to continue melting. 
        Eventually, the entire iceberg disappears into the ocean as the solid ice turns back into liquid water.
        </p>

        <p>Icebergs can survive for months or even several years, depending on their size, location, water temperature, and ocean 
        conditions. A huge iceberg in very cold water may last much longer than a smaller iceberg in warmer conditions.
        </p>

        <p>The melting of icebergs is a natural part of the water cycle. The freshwater stored in the ice is eventually released 
        into the ocean, where it becomes part of the Earth's enormous water system.
        </p>

        <h2>Icebergs and Ocean Currents/h2>

        <p>Icebergs do not simply stay in one place after they enter the ocean. They can travel long distances because of ocean currents 
        and wind. Ocean currents are large movements of seawater that carry heat, nutrients, and floating objects around the world. When 
        an iceberg enters the ocean, these currents can push it in different directions.
        </p>

        <p>The movement of an iceberg can also be affected by its underwater shape. Since most of the iceberg is below the surface, the water 
        surrounding it has a major influence on how it moves. Wind can push the part above the water, while ocean currents act on the much 
        larger section underneath.
        </p>

        <p>As icebergs travel, they may move into warmer or colder waters. In warmer regions, they usually melt faster, while colder conditions 
        can allow them to survive for longer. Scientists can track large icebergs using satellite images and other technology to study where 
        they travel and how quickly they change.
        </p>

        <p>Understanding iceberg movement is useful for studying the ocean, climate, and marine environments. It also helps scientists monitor 
        large icebergs as they travel through areas used by ships.
        </p>

        <h2>Why Are Icebergs Important/h2>

        <p>Icebergs are more than just giant pieces of floating ice. They play an important role in polar ecosystems and the ocean environment. 
        As icebergs slowly melt, they release freshwater and minerals into the surrounding ocean. These nutrients can support tiny organisms 
        such as phytoplankton, which are an important part of the marine food chain. 
        </p>

        <p>Icebergs can also provide temporary surfaces where seals, seabirds, and other animals may rest. In addition, the freshwater and 
        nutrients released from melting ice can become part of ocean circulation. Studying icebergs also helps scientists understand changes 
        in polar regions and the climate system. By observing how ice forms, moves, and melts, scientists can learn more about the changing 
        conditions of Earth's coldest environments.
        </p>

        <h4>Icebergs may seem like simple blocks of ice, but they are connected to many processes happening throughout our planet's oceans.
        </h4>
        
        `
    },

    {
        id: "octopus-intelligent",
        title: "Why Are Octopuses So Intelligent?",
        category: ["Science" , "Biology"],
        author: "Arwa Afridi",
        translator: null ,
        date: "August 16, 2026",
        readTime: "7 min read",
        image: "Blog/octopus-intelligent.png",
        excerpt:
            "Octopie are known to be quite intelligent. But how is this intelligence shown> .",
        content: `

        <h2>A Brain Unlike Ours</h2>

        <p>One of the most intriguing facts about octopuses is their uncanny, formidable, and peculiar nervous system. 
        Unlike humans, whose neurons are mainly concentrated in the brain and spinal cord, octopuses have a vast number 
        of neurons spread throughout their arms.
        </p>

        <p>Yes, it is indeed fascinating to hear that! This means their arms can process information about their surroundings 
        while they explore. Each arm contains networks of neurons that help the octopus sense and respond to its environment, 
        allowing it to interact with objects and investigate its surroundings in remarkable ways.
        </p>

        <h2>Masters of Problem-Solving</h2>

        <p>Octopuses are exceptionally talented at problem-solving. They can learn from their surroundings, grasp concepts from 
        their experiences, remember particular events, and figure out how to interact with unfamiliar objects.
        </p>

        <p>Scientists have observed octopuses opening containers, navigating challenging spaces, and finding creative ways to 
        reach food. Their intelligence becomes especially useful when they face novel challenges. Instead of simply reacting, 
        octopuses explore the situation using their arms, gather information from their surroundings, and then take action after 
        deciding what to do.
        </p>

        <h2>Learning From Experience</h2>
        
        <p>Octopuses are not only able to solve obstacles; they can also learn from experiences. When they encounter a new 
        situation, they explore it and remember what happens.
        </p>

        <p>The ability to learn from experience is an important part of intelligence. It enables octopuses to adapt to 
        different surroundings instead of relying only on instinct. For example, after discovering how something works, an 
        octopus may remember the experience and use what it has learned when facing a similar situation later.
        </p>

        <h2>Masters of Disguise</h2>

        <p>One of the most incredible abilities of octopuses is their remarkable talent for camouflage. With remarkable speed, 
        they can change the colour and appearance of their skin to blend into their surroundings, making it difficult for 
        predators to notice them.
        </p>
        
        </p> This ability is made possible by specialised cells in their skin called chromatophores. These cells contain pigments 
        that can expand or contract, enabling the octopus to produce multiple colours and patterns. Other specialised structures 
        in their skin also assist them in changing the way light is reflected.
        </p>

        <p>This remarkable form of camouflage is not only captivating to observe but also showcases the complex biology and control 
        of their nervous system.
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

            const categories = Array.isArray(article.category)
                ? article.category
                : [article.category];


            let matchesCategory = false;


            if (selectedCategory === "All") {

                matchesCategory = true;

            } else if (selectedCategory === "All Translations") {

                matchesCategory =
                    categories.includes("Translation");

            } else {

                matchesCategory =
                    categories.includes(selectedCategory);

            }


            const matchesSearch =
                article.title.toLowerCase().includes(searchTerm) ||

                categories
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm) ||

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


        const categories = Array.isArray(article.category)
            ? article.category
            : [article.category];


        card.innerHTML = `

            <div class="article-image">

                <span class="article-category">
                    ${categories.join(" • ")}
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

                    ${
                        article.translator
                            ? `<span>
                                Translated by ${article.translator}
                               </span>`
                            : ""
                    }

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
