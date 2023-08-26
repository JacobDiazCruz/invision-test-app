# Thinking process

## Framework
I have selected Next.js as the framework for this project primarily due to its convenience in building hybrid applications that incorporate both server-side rendering (SSR) and single-page application (SPA) features, making it SEO-friendly. Additionally, the ease of setting up the boilerplate and my proficiency in using React.js were also important factors influencing my decision.
## Configurability
I have made the decision to make the homepage configurable via retrieving some component's content from the `config/contents.ts` file. Although this process isn't strictly necessary for this exam, it serves to demonstrate my proficiency in understanding how configurability works, particularly in scenarios involving CMS or other processes that require handling dynamic content.

## Styles
I opted not to use CSS-in-JS tools due to potential performance overhead on components that render heavy styling. Instead, I have utilized Tailwind CSS, which functions solely as a CSS utility and offers a wide variety of shortcuts, all without requiring any JavaScript configuration. The only tradeoff I have encountered is a slight reduction in readability, particularly for developers who are using Tailwind for the first time.

## Animation
Regarding the animation, I made a deliberate decision to add a very simple fade animation in the first section of the homepage. I am aware of the potential performance overhead that could arise if animations are not optimized correctly. While I recognize that there is room for improvement in enhancing the fade animation, for the purpose of this test, I opted to just implement a subtle fade effect. This choice was made with the intention of striking a balance between demonstrating animation capability and ensuring optimal performance.