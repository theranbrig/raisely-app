# RAISELY APPLICATION

A few notes on what was built here.

[Deployed Version](https://raisely-brigowatz-application.netlify.app/)

## Tools

- Create-React-App (I usually go with NextJS or Gatsby, but since there was no routing it seemed like overkill)
- TailwindCSS (Easy to get up and running and since there are so few components it is easy to use just a few classes. If the project were scaled up I would proabably go with something like Styled Components)
- VanillaJS Fetch API (Could have used something like Axios here, but thought I would show a library is not always needed.  Axios would have been a bit cleaner for chaining the API requests though.)

## Known Issues / Code Decisions

- Form:
  - Code Splitting. I would normally not cram everything into one component. In this case inputs and buttons should be their own components as to make for my DRY code, but given that it is only one page I did not opt to for time sake.
  - Axios could be used for the POST requests.  It would be cleaner and easier for error handling, but I did want to show it can be done with just Vanilla JS.
  - I need a cleaner method of error handling.  This could be moved out into an error handling function.  This also includes custom error handling for form validation.  Right now it is just using the browser styling. This also applies to error styles.  I would try to make them more friendly and fit with the UI, rather than throwing them at the bottom of the form.  A toast message could be used, as I know you use for your forms.
  - Clear requirements for the form.  Adding password directions and validation, though none were required in this case.  Checking strength and having a confirm password box are two things that would be done.
  - Routing. I chose tho just make this a one page application as I did not have time to set up a router.  Typically the success and finished pages would be separate routes, rather than just modals, but for time's sake I decided to go the modal route.

- Buttons / Links:
  - The animation styling is not how you have it on Raisely. I know that the animation uses transforms on the `::after` and `::before` elements.  It rotates them and brings them into button area when in the hover state.  However, I could not get the animation to work properly with the short amount of time with dynamically sized buttons. It worked, but was not correct in animation colors and timing.  This opted for just a hover color transition.  I would rather give you something that is clean than not properly done.  I would add in the proper hover animation if given more time.

- Styling
  - Design system is not completely uniform.  I tried to take some cues from Raisely, but it could definitely use improvement.

## Thank You

Thank you so much for taking the time to look this over.  I really appreciate it.  Please feel free to reach out to me at theran.brigowatz@gmail.com or check out my portfolio and blog at [theran.dev](https://theran.dev)
