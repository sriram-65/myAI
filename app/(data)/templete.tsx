export default  [
    
 
    {
        name: 'Math Problem Solver',
        desc: 'AI Model to Solve any Math Complex Problems in Maths',
        icon:'https://cdn-icons-png.flaticon.com/128/2436/2436632.png',
        category: 'maths',
       
        slug: 'maths-problmes',
        aiPrompt: 'Depends on user Math Problems Questions solve a  give Problem output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of your Math Problem Question',
                field: 'textarea',
                name: 'MathDesscripton',
                required:true
            },
           
        ]
    },

    {
        name: 'Physics Problem Solver',
        desc: 'AI Model to Solve any Complex Problems in Physics',
        icon: 'https://cdn-icons-png.flaticon.com/128/2497/2497631.png',
        category: 'physics',
        slug: 'physics-problems',
        aiPrompt: 'Depends on user Physics Problems Questions solve a give Problem output in rich text editor format in code block',
        form: [
            {
                label: 'Enter description of your Physics Problem Question',
                field: 'textarea',
                name: 'PhysicsDescription',
                required: true
            }
        ]
    },
   
    {
        name: 'Chatbot robot',
        desc: 'An AI-powered chatbot tool that can interact with users, answer questions, and provide information based on your input.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6819/6819650.png',
        category: 'Chatbot',
        slug: 'chatbot',
        aiPrompt: 'Engage in a conversation with the user, answer questions, and provide information based on user input. and output in the heading 3 and bold text ',
        form: [
            {
                label: 'Enter your question or topic',
                field: 'textarea',
                name: 'userInput',
                required: true
            },
        ]
    },
   
   

    {
        name: 'Chemistry Teacher',
        desc: 'Ai model To Teach the Chemistry In Ai and Solve Some Complex Chemical Equations',
        icon:'https://cdn-icons-png.flaticon.com/128/3655/3655580.png',
        category: 'chemistry',
       
        slug: 'chemistry',
        aiPrompt: 'Depends on user chemistry Topics Teach the Chemistry from The Given Input and output in  in rich text editor. ',
        form: [
            {
                label: 'Entre a Topic from the Chemistry',
                field: 'textarea',
                name: 'ChemistryDesscripton',
                required:true
            },
           
        ]
    },

    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },

    {
        name: 'Recipe Generator',
        desc: 'AI Model to generate unique recipes based on ingredients you have.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921820.png',
        category: 'Cooking',
        slug: 'recipe-generator',
        aiPrompt: 'Based on user ingredients and cuisine preference, generate a unique recipe with instructions in rich text editor format.',
        form: [
            {
                label: 'Enter the ingredients you have',
                field: 'textarea',
                name: 'ingredients',
                required: true
            },
            {
                label: 'Preferred cuisine (optional)',
                field: 'input',
                name: 'cuisine'
            }
        ]
    },

    {
        name: 'Travel Itinerary Planner',
        desc: 'An AI tool to plan your travel itinerary based on your destination and preferences.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2533/2533206.png',
        category: 'Travel',
        slug: 'travel-itinerary-planner',
        aiPrompt: 'Based on the user destination and preferences, generate a travel itinerary in rich text editor format.',
        form: [
            {
                label: 'Enter your travel destination',
                field: 'input',
                name: 'destination',
                required: true
            },
            {
                label: 'Enter your travel preferences (e.g., adventure, relaxation)',
                field: 'textarea',
                name: 'preferences'
            }
        ]
    },

    {
        name: 'Social Media Post Generator',
        desc: 'An AI tool to create engaging social media posts based on your provided content.',
        icon: 'https://cdn-icons-png.flaticon.com/128/145/145807.png',
        category: 'Social Media',
        slug: 'social-media-post-generator',
        aiPrompt: 'Generate an engaging social media post based on the provided content, optimized for the specified platform, in rich text editor format.',
        form: [
            {
                label: 'Enter the content or message for your post',
                field: 'textarea',
                name: 'content',
                required: true
            },
            {
                label: 'Specify the social media platform (e.g., Facebook, Twitter)',
                field: 'input',
                name: 'platform',
                required: true
            }
        ]
    },

    {
        name: 'Resume Builder',
        desc: 'An AI-powered resume builder that helps create a professional resume based on your input.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1087/1087815.png',
        category: 'Career',
        slug: 'resume-builder',
        aiPrompt: 'Generate a professional resume based on user input in rich text editor format.',
        form: [
            {
                label: 'Enter your full name',
                field: 'input',
                name: 'fullName',
                required: true
            },
            {
                label: 'Enter your work experience and skills',
                field: 'textarea',
                name: 'experienceSkills',
                required: true
            },
            {
                label: 'Enter your education details',
                field: 'textarea',
                name: 'education',
                required: true
            }
        ]
    },

    {
        name: 'Email Draft Assistant',
        desc: 'An AI tool to draft professional emails based on your input.',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        category: 'Writing Assistant',
        slug: 'email-draft-assistant',
        aiPrompt: 'Based on user input, draft a professional email with a clear structure and appropriate tone in rich text editor format.',
        form: [
            {
                label: 'Enter the email subject',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Enter the email content or message',
                field: 'textarea',
                name: 'message',
                required: true
            }
        ]
    },

    {
        name: 'SEO Keyword Generator',
        desc: 'An AI tool to generate SEO keywords for your content based on the topic.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3257/3257305.png',
        category: 'SEO',
        slug: 'seo-keyword-generator',
        aiPrompt: 'Generate a list of SEO keywords based on the provided content topic in rich text editor format.',
        form: [
            {
                label: 'Enter the content topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Specify the target audience or region (optional)',
                field: 'input',
                name: 'audience'
            }
        ]
    },

    {
        name: 'Motivational Quote Generator',
        desc: 'An AI tool to generate motivational quotes based on a specific theme or keyword.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3602/3602123.png',
        category: 'Motivation',
        slug: 'motivational-quote-generator',
        aiPrompt: 'Generate a motivational quote based on the provided theme or keyword in rich text editor format.',
        form: [
            {
                label: 'Enter a theme or keyword for the quote',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },

    {
        name: 'Daily Planner',
        desc: 'An AI tool to create a daily schedule based on your tasks and priorities.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png',
        category: 'Productivity',
        slug: 'daily-planner',
        aiPrompt: 'Based on user tasks and priorities, generate a detailed daily schedule in rich text editor format.',
        form: [
            {
                label: 'Enter your tasks for the day',
                field: 'textarea',
                name: 'tasks',
                required: true
            },
            {
                label: 'Enter your top priorities',
                field: 'textarea',
                name: 'priorities'
            }
        ]
    },

    {
        name: 'Language Translator',
        desc: 'AI tool to translate text from one language to another with accuracy and context.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4764/4764847.png',
        category: 'Translation',
        slug: 'language-translator',
        aiPrompt: 'Translate the provided text from sourceLanguage to targetLanguage and ensure contextual accuracy in rich text editor format.',
        form: [
            {
                label: 'Enter text to translate',
                field: 'textarea',
                name: 'textToTranslate',
                required: true
            },
            {
                label: 'Source Language (e.g., English)',
                field: 'input',
                name: 'sourceLanguage',
                required: true
            },
            {
                label: 'Target Language (e.g., Spanish)',
                field: 'input',
                name: 'targetLanguage',
                required: true
            }
        ]
    },

    {
        name: 'Customer Support Assistant',
        desc: 'An AI tool that helps generate customer support responses based on the customer query.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2718/2718232.png',
        category: 'Customer Support',
        slug: 'customer-support-assistant',
        aiPrompt: 'Generate a customer support response based on the provided query and context in rich text editor format.',
        form: [
            {
                label: 'Enter the customer query',
                field: 'textarea',
                name: 'customerQuery',
                required: true
            },
            {
                label: 'Provide additional context (optional)',
                field: 'textarea',
                name: 'context'
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },

    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },

    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },

    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
   
   
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },

    {
        name: 'Workout Plan Generator',
        desc: 'AI tool to create a customized workout plan based on your fitness goals.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2659/2659367.png',
        category: 'Fitness',
        slug: 'workout-plan-generator',
        aiPrompt: 'Generate a personalized workout plan based on user fitness goals and experience level in rich text editor format.',
        form: [
            {
                label: 'Enter your fitness goals (e.g., weight loss, muscle gain)',
                field: 'textarea',
                name: 'fitnessGoals',
                required: true
            },
            {
                label: 'Enter your experience level (e.g., beginner, intermediate)',
                field: 'input',
                name: 'experienceLevel',
                required: true
            }
        ]
    },

    {
        name: 'Meal Plan Generator',
        desc: 'AI tool to create a meal plan based on your dietary preferences and goals.',
        icon: 'https://cdn-icons-png.flaticon.com/128/857/857681.png',
        category: 'Nutrition',
        slug: 'meal-plan-generator',
        aiPrompt: 'Generate a personalized meal plan based on user dietary preferences and goals in rich text editor format.',
        form: [
            {
                label: 'Enter your dietary preferences (e.g., vegan, keto)',
                field: 'textarea',
                name: 'dietaryPreferences',
                required: true
            },
            {
                label: 'Enter your dietary goals (e.g., weight loss, muscle gain)',
                field: 'input',
                name: 'dietaryGoals',
                required: true
            }
        ]
    },

    {
        name: 'Story Plot Generator',
        desc: 'AI tool to generate creative story plots based on a given genre and theme.',
        icon: 'https://cdn-icons-png.flaticon.com/128/862/862097.png',
        category: 'Writing Assistant',
        slug: 'story-plot-generator',
        aiPrompt: 'Generate a unique story plot based on user provided genre and theme in rich text editor format.',
        form: [
            {
                label: 'Enter the genre (e.g., horror, romance)',
                field: 'input',
                name: 'genre',
                required: true
            },
            {
                label: 'Enter the theme or setting',
                field: 'textarea',
                name: 'theme',
                required: true
            }
        ]
    },

    {
        name: 'Personal Finance Planner',
        desc: 'AI tool to help you plan and manage your personal finances effectively.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png',
        category: 'Finance',
        slug: 'personal-finance-planner',
        aiPrompt: 'Generate a personal finance plan based on user income, expenses, and financial goals in rich text editor format.',
        form: [
            {
                label: 'Enter your monthly income',
                field: 'input',
                name: 'income',
                required: true
            },
            {
                label: 'Enter your monthly expenses',
                field: 'textarea',
                name: 'expenses',
                required: true
            },
            {
                label: 'Enter your financial goals (e.g., saving, investing)',
                field: 'textarea',
                name: 'financialGoals',
                required: true
            }
        ]
    },

    {
        name: 'Presentation Slide Generator',
        desc: 'AI tool to generate presentation slides based on the provided topic and content.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2421/2421820.png',
        category: 'Productivity',
        slug: 'presentation-slide-generator',
        aiPrompt: 'Generate a presentation slide outline based on the provided topic and content in rich text editor format.',
        form: [
            {
                label: 'Enter the presentation topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter the key points or content for the slides',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    {
        name: 'Poetry Generator',
        desc: 'AI tool to create original poems based on a given theme or keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3143/3143640.png',
        category: 'Creativity',
        slug: 'poetry-generator',
        aiPrompt: 'Generate a poem based on the provided theme or keywords in rich text editor format.',
        form: [
            {
                label: 'Enter the theme or keywords for the poem',
                field: 'textarea',
                name: 'keywords',
                required: true
            }
        ]
    },

    {
        name: 'Business Name Generator',
        desc: 'AI tool to generate unique and catchy business names based on the type of business.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2791/2791444.png',
        category: 'Business',
        slug: 'business-name-generator',
        aiPrompt: 'Generate a list of business names based on user provided business type and description in rich text editor format.',
        form: [
            {
                label: 'Enter the type of business',
                field: 'input',
                name: 'businessType',
                required: true
            },
            {
                label: 'Enter a brief description of your business',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },

    {
        name: 'Event Invitation Generator',
        desc: 'AI tool to create event invitations with engaging content and design suggestions.',
        icon: 'https://cdn-icons-png.flaticon.com/128/896/896573.png',
        category: 'Events',
        slug: 'event-invitation-generator',
        aiPrompt: 'Generate an event invitation based on user provided event details and preferences in rich text editor format.',
        form: [
            {
                label: 'Enter the event name',
                field: 'input',
                name: 'eventName',
                required: true
            },
            {
                label: 'Enter the event date and time',
                field: 'input',
                name: 'eventDateTime',
                required: true
            },
            {
                label: 'Enter the event details or message',
                field: 'textarea',
                name: 'eventDetails',
                required: true
            }
        ]
    },

    {
        name: 'Wedding Vows Generator',
        desc: 'AI tool to help you write personalized and heartfelt wedding vows.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2765/2765661.png',
        category: 'Writing Assistant',
        slug: 'wedding-vows-generator',
        aiPrompt: 'Generate wedding vows based on user provided details and relationship background in rich text editor format.',
        form: [
            {
                label: 'Enter details about your relationship (e.g., how you met, shared experiences)',
                field: 'textarea',
                name: 'relationshipDetails',
                required: true
            }
        ]
    },

    {
        name: 'Book Summary Generator',
        desc: 'AI tool to create concise and informative summaries of books.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1089/1089976.png',
        category: 'Reading',
        slug: 'book-summary-generator',
        aiPrompt: 'Generate a concise summary of the provided book title and author in rich text editor format.',
        form: [
            {
                label: 'Enter the book title',
                field: 'input',
                name: 'bookTitle',
                required: true
            },
            {
                label: 'Enter the author name',
                field: 'input',
                name: 'authorName',
                required: true
            }
        ]
    },

    {
        name: 'Speech Writer',
        desc: 'AI tool to help you write compelling speeches for any occasion.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1024/1024955.png',
        category: 'Writing Assistant',
        slug: 'speech-writer',
        aiPrompt: 'Generate a speech based on user provided occasion, audience, and key message in rich text editor format.',
        form: [
            {
                label: 'Enter the occasion (e.g., wedding, conference)',
                field: 'input',
                name: 'occasion',
                required: true
            },
            {
                label: 'Enter the key message or theme of the speech',
                field: 'textarea',
                name: 'keyMessage',
                required: true
            },
            {
                label: 'Enter details about the audience (optional)',
                field: 'textarea',
                name: 'audience'
            }
        ]
    },

    {
        name: 'Gift Suggestion Tool',
        desc: 'AI tool to suggest personalized gift ideas based on the recipient\'s interests.',
        icon: 'https://cdn-icons-png.flaticon.com/128/744/744927.png',
        category: 'Shopping',
        slug: 'gift-suggestion-tool',
        aiPrompt: 'Generate personalized gift suggestions based on the recipient\'s interests and occasion in rich text editor format.',
        form: [
            {
                label: 'Enter the recipient\'s interests',
                field: 'textarea',
                name: 'interests',
                required: true
            },
            {
                label: 'Enter the occasion (e.g., birthday, anniversary)',
                field: 'input',
                name: 'occasion',
                required: true
            }
        ]
    },

    {
        name: 'Pet Name Generator',
        desc: 'AI tool to generate cute and unique names for your pet based on their personality and species.',
        icon: 'https://cdn-icons-png.flaticon.com/128/616/616519.png',
        category: 'Pets',
        slug: 'pet-name-generator',
        aiPrompt: 'Generate unique pet names based on the pet\'s personality and species in rich text editor format.',
        form: [
            {
                label: 'Enter the pet species (e.g., dog, cat)',
                field: 'input',
                name: 'species',
                required: true
            },
            {
                label: 'Describe the pet\'s personality',
                field: 'textarea',
                name: 'personality',
                required: true
            }
        ]
    }

]
