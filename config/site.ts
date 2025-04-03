export const siteConfig = {
   name: "Nekode",
   description: "Nekode is a free and open source platform to learn web development."
}

export const languages = [
   {
     name: 'English',
     locale: 'en',
   },
   {
     name: 'Indonesian',
     locale: 'id',
   },
 ]

export const progressBar = {
  color: '#47b7fc',
  height: '3px',
  spinner: false
}

export type Language = typeof languages[0]